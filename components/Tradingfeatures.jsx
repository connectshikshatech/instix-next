import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import AOS
const AOS = dynamic(() => import("aos"), { ssr: false });

export default function Tradingfeatures() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css"); // Dynamically import AOS CSS
      const aos = require("aos");
      aos.init({
        duration: 2000,
        once: true,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <div className="py-[6rem] bg-black text-white p-4 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="lg:text-5xl text-[2rem] font-bold">
            What Sets the instiX OTC Platform ahead!!
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div
            className="padding lg:p-[3rem] lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-zinc-900 to-[#352900] rounded-lg h-[250px] flex flex-col"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-[1.2rem] font-semibold text-yellow-500 mb-2">
              Institutional Focus
            </h2>
            <p className="text-[1.1rem] text-zinc-400 line-clamp-4">
              instiX offers unprecedented trust and confidence by onboarding all
              the institutions, HNIs, and UHNIs through proper KYC/ KYB, thereby
              offering best-in-the-class liquidity.
            </p>
          </div>

          <div
            className="padding lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-zinc-900 to-[#352900] p-[3rem] rounded-lg h-[250px] flex flex-col"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className="text-[1.2rem] font-semibold mb-2 text-yellow-500">
              Seamless Large Trading Volume
            </h2>
            <p className="text-[1.1rem] text-zinc-400">
              With the capability to handle significant trades—such as 100 BTC
              at a single price—instiX facilitates efficient trading for high
              net-worth individuals and institutions without the constraints of
              price fluctuations.
            </p>
          </div>

          <div
            className="padding lg:col-span-3 lg:row-span-3 bg-gradient-to-br from-zinc-900 to-[#352900] p-[3rem] rounded-lg h-[250px] flex flex-col"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-[1.2rem] font-semibold text-yellow-500 mb-2">
              User-Centric Support and Security
            </h2>
            <p className="text-[1.1rem] text-zinc-400">
              instiX employs a Request for Quote (RFQ) and Request for Stream
              (RFS) model to guarantee optimal liquidity to support the best
              trading flexibility and execution speed for all users.
            </p>
          </div>

          <div
            className="padding lg:col-span-2 lg:row-span-3 bg-gradient-to-br from-zinc-900 to-[#352900] p-[3rem] rounded-lg h-[250px] flex flex-col"
            data-aos="fade-up-left"
            data-aos-delay="500"
          >
            <h2 className="text-[1.2rem] font-semibold text-yellow-500 mb-2 ">
              Optimized Liquidity Solutions
            </h2>
            <p className="text-[1.1rem] text-zinc-400">
              Licensed in Poland, instiX prioritizes user security and
              satisfaction, offering 24/7 support, zero transaction fees on
              trades, and instant withdrawals – All for creating a reliable and
              efficient trading experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
