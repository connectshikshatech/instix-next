import React from "react";
import Head from "next/head";

// export async function getStaticProps() {
//   const seoData = {
//     title: "InstiX - Login",
//     description: "Learn more about us.",
//   };

//   return {
//     props: {
//       seoData,
//     },
//   };
// }

const BlogPosts = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>Instix - Blog Posts</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className="min-h-screen mt-12 bg-[#1a1a1a] text-white py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Blog Title
              </h3>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <span>02/02/2025</span>
                <span>/</span>
                <span className="text-yellow-500">Uncategorized</span>
              </div>

              <div className="prose prose-invert max-w-none">
                <ul>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae laudantium facilis cumque.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae laudantium facilis cumque.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae laudantium facilis cumque.
                  </li>
                </ul>
              </div>

              <div className="prose prose-invert max-w-none">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime veniam, natus molestias harum non recusandae eveniet
                  culpa voluptatem, dolorum minima quasi ducimus rem eum? Natus,
                  ducimus et autem consequuntur perferendis neque non quo velit.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0a0b0d] rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">
                  Latest Blogs
                </h2>
                <div className="space-y-4">
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
                      className={`hover:text-gray-300 hover:border-b-2 hover:border-yellow-300 cursor-pointer transition-colors "text-gray-300`}
                    >
                      Blog Title
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mt-4">
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
                      className={`hover:text-gray-300 hover:border-b-2 hover:border-yellow-300 cursor-pointer transition-colors "text-gray-300`}
                    >
                      Blog Title
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
