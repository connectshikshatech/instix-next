import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Upload, ArrowRight } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Editor from "@/components/Editor";
import Link from "next/link";
import AuthContext from "@/context/authContext";

const Admin = () => {
  const [metaDescription, setMetaDescription] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { authAdmin, HandleLogout, setAllBlogPosts } = useContext(AuthContext);

  const fileInputRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!authAdmin.isAuth) {
      router.push("/login");
    }
  }, [authAdmin]);

  // get query params
  const { id } = router.query;

  const fetchBlog = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/get/${id}`
    );
    if (res.data.success) {
      setTitle(res.data.data.title);
      setCategory(res.data.data.category);
      setDescription(res.data.data.description);
      setMetaDescription(res.data.data.metaDescription);
      setFeaturedImage(res.data.data.image ? res.data.data.image.url : null);
    }
  };

  useEffect(() => {
    if (id === undefined) {
      setTitle("");
      setCategory("");
      setDescription("");
      setMetaDescription("");
      setFeaturedImage(null);

      return;
    }

    if (id) {
      try {
        fetchBlog();
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }
  }, [id]);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("metaDescription", metaDescription);
    formData.append("image", featuredImage);
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authAdmin.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        setAllBlogPosts((prevBlogs) => [...prevBlogs, res.data.data]);
        setTitle("");
        setCategory("");
        setDescription("");
        setMetaDescription("");
        setFeaturedImage(null);
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
      setLoading(false);
    }
  };

  const handlePreview = () => {
    router.push({
      pathname: "/preview",
      query: {
        title,
        category,
        description,
        metaDescription,
      },
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("metaDescription", metaDescription);
    formData.append("image", featuredImage);

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authAdmin.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        setAllBlogPosts((prevBlogs) =>
          prevBlogs.map((blog) => (blog._id === id ? res.data.data : blog))
        );
        setTitle("");
        setCategory("");
        setDescription("");
        setMetaDescription("");
        setFeaturedImage(null);
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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-evenly bg-black py-36 px-4 sm:px-6 lg:px-8">
      {/* Form for Creating a New Blog Post */}
      <div className="max-w-3xl w-full lg:w-[70%] mx-auto">
        <div className="bg-white h-auto rounded-lg shadow-lg p-6 space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {id ? "Edit Blog Post" : "Create New Blog Post"}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the details to create your new blog post
            </p>
          </div>
          <form className="space-y-6">
            {/* Blog Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Blog Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Crypto Trading">Crypto Trading</option>
                <option value="OTC Crypto Platform">OTC Crypto Platform</option>
              </select>
            </div>
            {/* Featured Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <div
                className="mt-1 flex justify-center rounded-lg border-2 border-dashed p-6 border-gray-300"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={handleClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {featuredImage ? (
                  <img
                    src={
                      typeof featuredImage === "string"
                        ? featuredImage
                        : URL.createObjectURL(featuredImage)
                    }
                    alt="Featured"
                    className="h-32"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-10 w-10 text-blue-500" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag & drop to upload or click to select
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Description */}
            <div className="h-auto">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>

              <Editor
                setDescription={setDescription}
                description={description}
              />
            </div>
            {/* Meta Description */}
            <div className="h-auto">
              <label
                htmlFor="metaDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Meta Description
              </label>
              <Editor
                setDescription={setMetaDescription}
                description={metaDescription}
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handlePreview()}
                className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 mr-4"
              >
                Preview
              </button>
              {id ? (
                <button
                  type="button"
                  onClick={(e) => handleUpdate(e)}
                  className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  {loading ? "Loading..." : " Update Post"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  {loading ? "Loading..." : " Publish Post"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-3xl w-full lg:w-[30%] mx-auto mt-8 lg:mt-0">
        <div className="bg-[#0a0b0d] rounded-lg p-4 w-full">
          {/* <div className="flex justify-between mb-6 items-center">
            <h2 className="text-2xl font-bold pb-2 border-b border-gray-700">
              All Blog Posts
            </h2>
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
          <ul className="space-y-4 overflow-y-auto max-h-[41rem] scrollbar-hidden">
            {allBlogs.map((blog) => (
              <li
                key={blog._id}
                className="flex  items-center justify-between border-b pb-2 last:border-b-0"
              >
                <div
                  onClick={() => redirectToBlog(blog._id)}
                  className="flex-grow cursor-pointer pr-4"
                >
                  <h3 className="text-[14px] lg:text-lg font-semibold">
                    {blog.title}
                  </h3>
                  <p className="text-[10px] lg:text-sm text-gray-500">
                    Category: {blog.category}
                  </p>
                </div>
                <Trash2
                  onClick={() => deleteBlog(blog._id)}
                  className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                  size={20}
                />
              </li>
            ))}
          </ul> */}

          <div className="flex justify-between mb-6 pb-3 items-center border-b border-gray-700">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
            <button
              type="button"
              onClick={HandleLogout}
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

export default Admin;
