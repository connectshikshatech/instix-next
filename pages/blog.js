import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import DOMPurify from "dompurify";
import { ThreeDots } from "react-loader-spinner"; // Import the loader
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const BlogPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    agreed: false,
  });

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State for loader
  const [active, setActiveBlog] = useState("Latest Blogs");
  const [searchQuery, setSearchQuery] = useState("");

  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const trimDescription = (description, maxLength = 100) => {
    const strippedDescription = stripHTML(description);
    return strippedDescription.length > maxLength
      ? `${strippedDescription.slice(0, maxLength)}...`
      : strippedDescription;
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    fetch("https://blogs.instix.io/api/blog")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false); // Turn off loading after fetching
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error.message);
        setBlogs([]); // Ensure blogs is empty to avoid undefined errors
        setLoading(false); // Turn off loading in case of error
      });
  }, []);

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const filteredBlogs = blogs.filter(
    (blog) =>
      (blog.category === active || active === "Latest Blogs") &&
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1a1a1a] rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => {
                  const sanitizedDescription =
                    typeof window !== "undefined"
                      ? DOMPurify.sanitize(blog.description)
                      : blog.description;

                  return (
                    <div
                      key={blog._id}
                      className="bg-[#000] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 flex flex-col"
                    >
                      <div className="relative pb-[60%] overflow-hidden">
                        <img
                          src={`https://blogs.instix.io/${blog?.featuredImage}`}
                          alt={blog.title}
                          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <Link
                          href={`/blog/${generateSlug(blog.title)}`}
                          className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 hover:text-yellow-500 transition-colors"
                        >
                          {blog.title}
                        </Link>
                        <p className="text-sm md:text-base text-white mb-3">
                          {trimDescription(sanitizedDescription, 80)}
                        </p>
                        <Link href={`/blog/${generateSlug(blog.title)}`}>
                          <button className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm md:text-base inline-flex items-center gap-2">
                            Read More...
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No blogs found matching your search criteria.</p>
              )}
            </div>
            <div className="grid mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#000] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 flex flex-col">
                <div className="relative pb-[60%] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1731589802956-b4693dae884b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Title"
                    className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <Link
                    href="/blog/7676"
                    className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 hover:text-yellow-500 transition-colors"
                  >
                    Dummy Blog Title
                  </Link>
                  <p className="text-sm md:text-base text-white mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem mollitia porro magnam nesciunt fugit odit
                    necessitatibus modi veniam, facilis quam tempore dolore.
                    Voluptatum voluptatem laudantium quo assumenda, ipsam
                    officiis fugiat eveniet consectetur ab odit sed eaque! Id
                    sint, laudantium veniam officiis maxime voluptatibus nisi
                    eos necessitatibus.
                  </p>
                  <Link href="/blog/7676">
                    <button className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm md:text-base inline-flex items-center gap-2">
                      Read More...
                    </button>
                  </Link>
                </div>
              </div>
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
