import React, { useState } from "react";
import Head from "next/head";

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - Media Coverage",
    description: "Learn more about us.",
  };

  return {
    props: {
      seoData,
    },
  };
}

// Button Component
const Button = ({ children, onClick, variant, className }) => {
  const baseStyles = "px-4 py-1 rounded-full text-sm border";
  const variantStyles =
    variant === "outline"
      ? "border-gray-700 hover:bg-gray-800 text-white"
      : "bg-yellow-500 text-black border-yellow-500";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

const mediacoverage = ({ seoData }) => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [activeTab, setActiveTab] = useState("news");

  const newsItems = [
    {
      date: "21 Feb",
      source: "Technews24.com",
      title:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    },
    {
      date: "05 Feb",
      source: "Thenationalonlining.Net",
      title:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    },
    {
      date: "28 January",
      source: "Daily Champion",
      title:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    },
    {
      date: "25 January",
      source: "Coincodex.com",
      title:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    },
    {
      date: "05 Feb",
      source: "Thenationalonlining.Net",
      title:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    },
  ];

  const years = ["2024"];
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>
      <div className="min-h-screen pt-24 bg-[#1a1a1a] text-white">
        {/* Breadcrumbs */}
        <div className="bg-black py-3 md:py-4 top-0 z-50 w-full">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl justify-center text-center md:text-4xl font-bold mb-2">
              Media Coverage
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-white p-3 md:p-6 lg:p-8">
          {/* Tabs */}
          <div className="border-b border-gray-800 mb-6 mt-6 flex">
            <button
              onClick={() => setActiveTab("news")}
              className={`text-sm font-medium px-4 py-2 border-b-2 transition-colors ${
                activeTab === "news"
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent text-white hover:text-gray-300"
              }`}
            >
              In The News
            </button>
            <button
              onClick={() => setActiveTab("press")}
              className={`text-sm font-medium px-4 py-2 border-b-2 transition-colors ${
                activeTab === "press"
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent text-white hover:text-gray-300"
              }`}
            >
              Press Releases
            </button>
          </div>

          {/* News Content */}
          {activeTab === "news" && (
            <>
              {/* Year selection buttons */}
              <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar -mx-3 px-3 md:mx-0 md:px-0">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant="outline"
                    onClick={() => setSelectedYear(year)}
                    className={`flex-shrink-0 ${
                      selectedYear === year
                        ? "bg-yellow-500 text-black border-yellow-500"
                        : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
                    }`}
                  >
                    {year}
                  </Button>
                ))}
              </div>

              <div className="space-y-4 md:space-y-6 relative">
                {/* Vertical line - visible only on desktop */}
                <div className="absolute top-0 left-52 w-px h-full bg-gray-700 hidden md:block" />

                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:gap-8"
                  >
                    <div className="flex items-start md:w-48 md:text-right mb-2 md:mb-0">
                      <div className="md:flex-1">
                        <div className="font-medium text-sm md:text-base">
                          {item.date}
                        </div>
                        <div className="text-yellow-500 text-xs md:text-sm">
                          {item.source}
                        </div>
                      </div>
                    </div>
                    {/* Timeline dot - visible only on desktop */}
                    <div className="hidden md:block absolute left-[199px] w-[19px] h-[18px] bg-black border-2 border-white rounded-full transform translate-y-1" />
                    <div className="flex-1 bg-[#222] p-3 md:p-4 rounded-lg md:ml-0">
                      <p className="text-gray-300 text-sm md:text-base">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Press Releases Content */}
          {activeTab === "press" && (
            <div className="text-gray-400">
              <p>Press releases content here</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default mediacoverage;

// Add this CSS to your global styles to hide scrollbars while maintaining functionality
const styles = `
  @layer utilities {
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
`;
