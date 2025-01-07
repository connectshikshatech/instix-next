import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

// Dynamically import AOS
const AOS = dynamic(() => import("aos"), { ssr: false });

// Dummy blog data (fallback if API fails)
const blogPosts = [
  {
    title: "Teaching Note on Shriram Finance",
    description:
      "instiX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    featuredImage: "/blog01.png",
    slug: "teaching-note-on-shriram-finance",
    createdAt: "2024-01-01T00:00:00Z", // Default date
  },
  {
    title: "Dividend adjustment for stock derivatives",
    description:
      "instiX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    featuredImage: "/blog02.png",
    slug: "dividend-adjustment-for-stock-derivatives",
    createdAt: "2024-02-01T00:00:00Z",
  },
  {
    title: "Double win at FX DailyInfo Forex Brokers Award",
    description:
      "instiX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    featuredImage: "/blog03.png",
    slug: "double-win-at-fx-dailyinfo-forex-brokers-award",
    createdAt: "2024-03-01T00:00:00Z",
  },
  {
    title: "Best Professional Trading Platform",
    description:
      "instiX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    featuredImage: "/blog04.png",
    slug: "best-professional-trading-platform",
    createdAt: "2024-04-01T00:00:00Z",
  },
];

export default function BlogSection() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css"); // Dynamically import CSS
      const aos = require("aos");
      aos.init({
        duration: 2000,
        easing: "ease-out-cubic",
        once: true,
      });
    }
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
    <div
      className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Blogs</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Get The Latest In Crypto, Fintech, Blockchain & OTC Crypto Trading
              With instiX Expert Insights
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a href="/blog">
              <button className="text-white border border-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors">
                <span>View All</span>
                <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-black" />
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(allBlogs.length > 0 ? allBlogs : blogPosts)
            .slice(0, 4)
            .map((blog, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <Image
                  src={blog?.image?.url || blog.featuredImage}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="pt-4">
                  <Link href={`/blog/${blog._id || blog.slug}`}>
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: blog ? blog.description : "",
                    }}
                    className="text-sm text-white mb-4"
                  ></p>
                  <Link href={`/blog/${blog._id || blog.slug}`}>
                    <button className="text-white border border-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors">
                      View More
                      <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
