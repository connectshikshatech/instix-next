import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import AOS to ensure it's only loaded on the client
const AOS = dynamic(() => import("aos"), { ssr: false });

const Hero = () => {
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    // Set to true after the component is mounted (client-side)
    setIsClient(true);

    if (typeof window !== "undefined") {
      import("aos/dist/aos.css").then(() => {
        const aos = require("aos");
        aos.init({
          duration: 800, // Animation duration
          once: true, // Only animate once
        });
        aos.refresh();
      });
    }
  }, []);

  // Render the component only if it's client-side
  if (!isClient) {
    return (
      <section className="bg-[#0a0b0d] text-white h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <video
              src="/main-bg-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </div>
        {/* Content without animations */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              Most Trusted Secured Liquid OTC Institutional Platform.
            </h2>
            <p className="mb-6 max-w-2xl mx-auto text-white font-light text-base md:text-lg">
              instiX is the first regulated OTC Crypto Platform with Best-in
              class Liquidity, Zero Transaction Fees, 24/7 Support, and Instant
              Deposits and Withdrawals.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Once on the client side, render the animations
  return (
    <section className="bg-[#0a0b0d] text-white h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            src="/main-bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10">
        <div className="max-w-[1320px] mx-auto">
          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4"
            data-aos="fade-up" // AOS animation for the heading
            data-aos-delay="200" // Delay for better effect
          >
            {[
              "Most",
              "Trusted.",
              "Secured.",
              "Liquid",
              "\n",
              "OTC",
              "Institutional",
              "Platform.",
            ].map((word, index) =>
              word === "\n" ? (
                <br key="line-break" />
              ) : (
                <span
                  key={index}
                  className="inline-block mr-2"
                  data-aos="fade-up" // Individual word animation
                  data-aos-delay={200 + index * 100} // Staggered animation
                >
                  {word}
                </span>
              )
            )}
          </h2>

          {/* Paragraph */}
          <p
            className="mb-6 max-w-2xl mx-auto text-white font-light text-base md:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            instiX is the first regulated OTC Crypto Platform with Best-in class
            Liquidity, Zero Transaction Fees, 24/7 Support, and Instant Deposits
            and Withdrawals
          </p>

          {/* Buttons */}
          <div
            className="flex justify-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://otc.instix.io/onboarding/"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-yellow-400 text-black hover:bg-white rounded-full font-medium">
                Get Started
                <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center sm:inline-flex">
                  <ArrowRight className="h-4 w-4 text-black" />
                </div>
              </button>
            </a>
            <a href="/about-Us" className="inline-block">
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-full font-medium">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
