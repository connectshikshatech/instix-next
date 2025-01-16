import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authAdmin, setAuthAdmin] = useState({
    admin: null,
    isAuth: false,
    token: null,
  });
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    if (token) {
      checkToken();
    } else {
      setAuthAdmin({
        admin: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("token");
    }
  }, [token]);

  const checkToken = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/admin/validateToken`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(res);

      if (res.data.success) {
        setAuthAdmin({
          isAuth: true,
          admin: res.data.admin,
          token: token,
        });
      } else {
        setAuthAdmin({
          admin: null,
          isAuth: false,
          token: null,
        });
        localStorage.removeItem("token");
      }
    } catch (error) {
      // console.log(error);

      setAuthAdmin({
        admin: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    // Listen for storage events to detect manual token removal
    const handleStorageChange = (event) => {
      if (event.key === "token" && event.newValue === null) {
        setAuthAdmin({
          admin: null,
          isAuth: false,
          token: null,
        });
        // toast.error("You are not authenticated");
        router.push("/login");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [authAdmin.isAuth, router, setAuthAdmin]);

  useEffect(() => {
    // Listen for storage events to detect manual token changes
    const handleStorageChange = (event) => {
      if (event.key === "token") {
        const newToken = event.newValue;
        if (!newToken) {
          setAuthAdmin({
            admin: null,
            isAuth: false,
            token: null,
          });
          router.push("/login");
        } else {
          checkToken();
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router]);

  const HandleLogout = () => {
    setAuthAdmin({
      admin: null,
      isAuth: false,
      token: null,
    });
    localStorage.removeItem("token");
    router.push("/");
    Swal.fire({
      icon: "success",
      title: "You have been logged out",
      confirmButtonColor: "#4caf50",
    });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setBlogLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/getAll`
        );

        if (res.data.success) {
          setAllBlogPosts(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setBlogLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authAdmin,
        setAuthAdmin,
        HandleLogout,
        allBlogPosts,
        setAllBlogPosts,
        blogLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
