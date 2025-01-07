import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Trash2, Upload, ArrowRight } from "lucide-react";
// dynamic import for ReactQuill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});
import "react-quill-new/dist/quill.snow.css";

const Admin = () => {
  const [metaDescription, setMetaDescription] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
    }
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogPost = {
      title,
      category,
      description,
      metaDescription,
      featuredImage,
    };
    console.log(blogPost);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-evenly bg-black py-36 px-4 sm:px-6 lg:px-8">
      {/* Form for Creating a New Blog Post */}
      <div className="max-w-3xl w-full lg:w-[60%] mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Create New Blog Post
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the details to create your new blog post
            </p>
          </div>
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
              >
                {featuredImage ? (
                  <img src={featuredImage} alt="Featured" className="h-32" />
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
            <div className="h-52">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              {/* <div className="border border-gray-300 rounded-md px-3 py-2 h-32">
                Placeholder for Text Editor
              </div> */}
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="mt-3 h-32"
              />
            </div>
            {/* Meta Description */}
            <div className="h-52">
              <label
                htmlFor="metaDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Meta Description
              </label>
              <ReactQuill
                theme="snow"
                value={metaDescription}
                onChange={setMetaDescription}
                className="mt-3 h-32"
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-3xl w-full lg:w-[40%] mx-auto mt-8 lg:mt-0">
        <div className="bg-[#0a0b0d] rounded-lg p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">
              All Blog Posts
            </h2>
            <button
              type="button"
              className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-light hover:bg-white hover:text-black flex items-center border border-white rounded-[30px]"
            >
              Log out
              <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>
            </button>
          </div>
          <ul className="space-y-4 overflow-y-auto max-h-[41rem] scrollbar-hidden">
            <li className="flex items-center justify-between border-b pb-2 last:border-b-0">
              <div className="flex-grow pr-4">
                <h3 className="text-[14px] lg:text-lg font-semibold">
                  Sample Blog Title
                </h3>
                <p className="text-[10px] lg:text-sm text-gray-500">
                  Category: Sample Category
                </p>
                <p className="text-sm text-gray-400 mb-2">Sample Description</p>
              </div>
              <Trash2
                className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                size={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
