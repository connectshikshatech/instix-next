import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/getAll`
  );
  const blogs = res.data.data;

  const paths = blogs.map((blog) => ({
    params: { id: blog._id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/admin/blog/get/${params.id}`
  );
  const blog = res.data.data;

  const seoData = {
    title: blog.title,
    description: blog.metaDescription,
  };

  return {
    props: {
      seoData,
      blog,
    },
    revalidate: 10,
  };
}

const BlogPosts = ({ seoData, blog }) => {
  const [allBlogs, setAllBlogs] = useState([]);

  const router = useRouter();

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
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>
      <div className="min-h-screen mt-12 bg-[#1a1a1a] text-white py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {blog.title}
              </h3>

              <div>
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* show date in formate */}
              <div className="flex items-center">
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <span>{new Date(blog.createdAt).toDateString()} / </span>
                </div>

                <div className="flex items-center gap-2 ml-2 text-gray-400 mb-6">
                  <span className="text-yellow-500">{blog.category}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p
                  dangerouslySetInnerHTML={{
                    __html: blog ? blog.description : "",
                  }}
                  className="text-sm md:text-base text-white mb-3"
                ></p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p
                  dangerouslySetInnerHTML={{
                    __html: blog ? blog.metaDescription : "",
                  }}
                  className="text-sm md:text-base text-white mb-3"
                ></p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0a0b0d] rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">
                  Latest Blogs
                </h2>
                {allBlogs.map((blog, idx) => (
                  <div
                    key={blog._id}
                    className={`space-y-4 ${idx === 0 ? "mt-0" : "mt-4"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <p
                        onClick={() => router.push(`/blog/${blog._id}`)}
                        className={`hover:text-gray-300 hover:border-b-2 hover:border-yellow-300 cursor-pointer transition-colors "text-gray-300`}
                      >
                        {blog.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
