import React, { useEffect, useState } from "react";
import { Lock, Mail } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - Login",
    description: "Learn more about us.",
  };

  return {
    props: {
      seoData,
    },
  };
}

const login = ({ seoData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin"); // Redirect to admin page if already logged in
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure email and password are not empty
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in both email and password.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/admin/login`,
        {
          email,
          password,
        }
      );

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          confirmButtonColor: "#4caf50",
        });
        localStorage.setItem("token", res.data.token);
        router.push("/admin");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: error.response.data.message,
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>
      <div className="min-h-screen bg-[1a1a1a] flex items-center justify-center p-4 mt-12">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-gray-500 mt-2">
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400 h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-gray-600 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400 h-5 w-5" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-gray-600 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="remember" className="text-gray-600">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black rounded-full hover:opacity-90 transition-opacity duration-300 ease-in-out"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?
                <a href="#" className="text-blue-600 hover:underline ml-2">
                  Sign Up
                </a>
              </p>
            </div>

            <div className="mt-6 border-t border-gray-300 pt-6 text-center">
              <p className="text-gray-600 mb-4">Or log in with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90">
                  G
                </button>
                <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90">
                  f
                </button>
                <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90">
                  𝕏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
