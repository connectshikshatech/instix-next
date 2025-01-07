import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import DOMPurify from "dompurify";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"; // Import the loader
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const BlogPage = () => {
  const [loading, setLoading] = useState(false); // State for loader
  const [active, setActive] = useState("Latest Blogs"); // State for active category
  const [activeBlog, setActiveBlog] = useState("Latest Blogs"); // State for active blog
  const [allBlogs, setAllBlogs] = useState([]); // State for all blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/getAll`
        );

        if (res.data.success) {
          setAllBlogs(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 text-white w-full">
      {/* Loader */}
      {loading ? (
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
                      onClick={() => setActiveBlog(category)}
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
              {allBlogs && allBlogs.length > 0 ? (
                allBlogs.map((blog) => (
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
                        href="/blog/7676"
                        className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 hover:text-yellow-500 transition-colors"
                      >
                        {blog.title}
                      </Link>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(blog.description),
                        }}
                        className="text-sm md:text-base text-white mb-3"
                      />

                      <Link href={`/blog/${blog._id}`}>
                        <button className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm md:text-base inline-flex items-center gap-2">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white">No Blogs Found</div>
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
