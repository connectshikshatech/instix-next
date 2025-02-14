import React, { useState, useEffect, useContext } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import AuthContext from "@/context/authContext";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("Latest Blogs");
  const [activeBlog, setActiveBlog] = useState("Latest Blogs");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { allBlogPosts, blogLoading } = useContext(AuthContext);

  const stripHtml = (html) => {
    if (typeof window === "undefined") return html;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  useEffect(() => {
    if (active === "Latest Blogs") {
      // show only the latest 6 blogs
      const latest = allBlogPosts.slice(0, 5);
      setFilteredBlogs(latest);
    } else {
      const filtered = allBlogPosts.filter((blog) =>
        blog.category.includes(active)
      );
      setFilteredBlogs(filtered);
    }
  }, [active, allBlogPosts]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 text-white w-full">
      {/* Loader */}
      {blogLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#eab308"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <>
          {/* Breadcrumbs */}
          <div className="bg-black py-4 top-0 z-50 w-full">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl sm:text-3xl justify-center text-center md:text-4xl font-bold mb-2">
                Blogs
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8 w-full">
            {/* Description */}
            <p className="text-gray-300 mb-8 lg:text-xl text-sm md:text-base">
              Get The Latest In Crypto, Fintech, Blockchain & OTC Crypto Trading
              With instIX Expert Insights
            </p>

            {/* Navigation and Search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8">
              {/* Categories */}
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0">
                {["Latest Blogs", "Crypto Trading", "OTC Crypto Platform"].map(
                  (category) => (
                    <p
                      key={category}
                      onClick={() => setActive(category)}
                      className={`cursor-pointer lg:text-xl text-[13px] hover:border-yellow-500 whitespace-nowrap pb-1 ${
                        active === category
                          ? "text-yellow-500 border-yellow-500 border-b-2 hover:text-gray-300"
                          : "text-gray-300 hover:text-yellow-500 hover:border-yellow-500"
                      }`}
                    >
                      {category}
                    </p>
                  )
                )}
              </div>

              {/* Search Bar */}
              <div className="relative w-full border border-gray-700 rounded-full sm:w-64 flex-shrink-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-[#1a1a1a] rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Blog Grid */}

            <div className="grid mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredBlogs && filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-[#000] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 flex flex-col"
                  >
                    <div className="relative pb-[60%] overflow-hidden">
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                        className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <Link
                        href={`/blog/${blog._id}`}
                        className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 hover:text-yellow-500 transition-colors"
                      >
                        {blog.title}
                      </Link>
                      <p className="text-sm md:text-base text-white mb-3">
                        {truncateText(
                          stripHtml(blog ? blog.description : ""),
                          40
                        )}
                      </p>

                      <Link href={`/blog/${blog._id}`}>
                        <button className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm md:text-base inline-flex items-center gap-2">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white">No Blogs Found</div>
              )}
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#000] rounded-lg">
              <Newsletter />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default BlogPage;
