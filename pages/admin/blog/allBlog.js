import axios from "axios";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";

const allBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [loadingBlogId, setLoadingBlogId] = useState(null);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading2(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/getAll`
        );

        if (res.data.success) {
          setAllBlogs(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading2(false);
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      setLoadingBlogId(id);
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setAllBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        Swal.fire({
          icon: "success",
          title: res.data.message,
          confirmButtonColor: "#4caf50",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: error.response.data.message,
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoadingBlogId(null);
    }
  };

  // Redirect to edit page and pass blog as state

  const handleRedirectToEdit = (blog) => {
    router.push({
      pathname: "/admin",
      query: { id: blog._id },
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-evenly bg-black py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full lg:w-[70%] mx-auto">
        <div className="bg-white h-auto rounded-lg shadow-lg p-6 space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Create New Blog Post
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border text-black p-2.5">Image</th>
                  <th className="border text-black p-2.5">Title</th>
                  <th className="border text-black p-2.5">Category</th>
                  <th className="border text-black p-2.5">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading2 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center p-4 text-black font-semibold"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : allBlogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center p-4 text-black font-semibold"
                    >
                      No blogs found
                    </td>
                  </tr>
                ) : (
                  allBlogs.map((blog) => (
                    <tr key={blog._id}>
                      <td className="border p-2.5">
                        <img
                          src={blog.image.url}
                          alt={blog.title}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="border text-black p-2.5">
                        <Link
                          href={`/blog/${blog._id}`}
                          className="text-black hover:underline hover:text-blue-500"
                        >
                          {blog.title}
                        </Link>
                      </td>
                      <td className="border text-black p-2.5">
                        {blog.category}
                      </td>
                      <td className="border p-2.5 flex items-center justify-center flex-col gap-2">
                        <button
                          onClick={() => handleRedirectToEdit(blog)}
                          className="bg-[#FACC15] hover:bg-[#facc15c6] text-black py-1 px-4 rounded-full text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBlog(blog._id)}
                          className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-full text-xs"
                        >
                          {loadingBlogId === blog._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-3xl w-full lg:w-[30%] mx-auto mt-8 lg:mt-0">
        <div className="bg-[#0a0b0d] rounded-lg p-4 w-full">
          <div className="flex justify-between mb-6 pb-3 items-center border-b border-gray-700">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
            <button
              type="button"
              onClick={handleLogout}
              className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-light hover:bg-white hover:text-black flex items-center border border-white rounded-[30px]"
            >
              Log out
              <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>
            </button>
          </div>

          <Link href="/admin">
            <div className="w-full bg-gray-900 py-2 px-3 rounded-md hover:bg-gray-800 cursor-pointer">
              Create New Blog Post
            </div>
          </Link>

          <Link href="/admin/blog/allBlog">
            {" "}
            <div className="w-full mt-2 bg-gray-900 py-2 px-3 rounded-md hover:bg-gray-800 cursor-pointer">
              All Blog Posts
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default allBlog;
