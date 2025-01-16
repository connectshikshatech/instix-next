// pages/preview.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Preview = () => {
  const router = useRouter();
  const { title, category, description, metaDescription } = router.query;

  const [isClient, setIsClient] = useState(false);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const extractTOC = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3");

    return Array.from(headings).map((heading) => ({
      text: heading.textContent,
      level: parseInt(heading.tagName.slice(1)),
    }));
  };

  useEffect(() => {
    const toc = extractTOC(description);

    setToc(toc);
  }, [description]);

  const handleScollToHeading = (text) => {
    const headings = document.querySelectorAll("h1, h2, h3");
    const heading = Array.from(headings).find(
      (heading) => heading.textContent.trim() === text.trim()
    );

    if (heading) {
      const yOffset = -150; // Adjust this value as needed
      const y =
        heading.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const processDescription = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Find all <li> elements with `data-list="bullet"`
    doc.querySelectorAll('li[data-list="bullet"]').forEach((li) => {
      // Replace parent <ol> with <ul> if it contains bullet lists
      const parent = li.parentElement;
      if (parent.tagName === "OL") {
        const ul = document.createElement("ul");
        Array.from(parent.children).forEach((child) => {
          ul.appendChild(child);
        });
        parent.replaceWith(ul);
      }
    });

    return doc.body.innerHTML;
  };

  return (
    <div className="min-h-screen mt-12 bg-[#1a1a1a] text-white py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar for mobile */}
          <div className="lg:hidden">
            <div className="bg-[#0a0b0d] rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">
                Table of Contents
              </h2>
              <div className="space-y-4">
                {toc.map((item) => (
                  <div key={item.text} className={`space-y-4 mt-4`}>
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
                        onClick={() => handleScollToHeading(item.text)}
                        className={`hover:text-gray-300 hover:border-b-2 hover:border-yellow-300 cursor-pointer transition-colors "text-gray-300`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>

            {/* show date in formate */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <span>{new Date().toDateString()} / </span>
              </div>

              <div className="flex items-center gap-2 ml-2 text-gray-400 mb-6">
                <span className="text-yellow-500">{category}</span>
              </div>
            </div>

            {isClient && (
              <div className="prose prose-invert max-w-none">
                <p
                  dangerouslySetInnerHTML={{
                    __html: processDescription(description),
                  }}
                  className="text-sm md:text-base text-white mb-3"
                ></p>
              </div>
            )}

            {isClient && (
              <div className="prose prose-invert max-w-none">
                <p
                  dangerouslySetInnerHTML={{
                    __html: metaDescription ? metaDescription : "",
                  }}
                  className="text-sm text-white mb-3"
                ></p>
              </div>
            )}
          </div>
          {/* Sidebar for desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              {/* TOC sidebar */}
              <div className="bg-[#0a0b0d] rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">
                  Table of Contents
                </h2>
                <div className="space-y-4">
                  {toc.map((item) => (
                    <div key={item.text} className={`space-y-4 mt-4`}>
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
                          onClick={() => handleScollToHeading(item.text)}
                          className={`hover:text-gray-300 hover:border-b-2 hover:border-yellow-300 cursor-pointer transition-colors "text-gray-300`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
