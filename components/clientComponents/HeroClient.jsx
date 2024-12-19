"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroClient = () => {
  // Ref for detecting when the section is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  // Animation controls
  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  // Scroll-based animation logic
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
      paragraphControls.start("hidden");
    }
  }, [isInView, mainControls, paragraphControls]);

  // Text animation variants with scroll-based reset
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        onComplete: () => {
          paragraphControls.start("visible");
        },
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Parallax effect for background
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#0a0b0d] text-white h-screen flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 500,
        }}
      >
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
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
        initial="hidden"
        animate={mainControls}
        variants={textVariants}
      >
        <div className="max-w-[1320px] mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4"
            initial="hidden"
            animate={mainControls}
            variants={headingVariants}
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
                <motion.span
                  key={index}
                  variants={wordVariants}
                  style={{
                    display: "inline-block",
                    marginRight: "0.5rem",
                    transform: `translateY(${scrollY * 0.2}px)`,
                  }}
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h2>
          <motion.p
            className="mb-6 max-w-2xl mx-auto text-white font-light text-base md:text-lg"
            initial="hidden"
            animate={paragraphControls}
            variants={textVariants}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            instiX is the first regulated OTC Crypto Platform with Best-in class
            Liquidity, Zero Transaction Fees, 24/7 Support, and Instant Deposits
            and Withdrawals
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial="hidden"
            animate={paragraphControls}
            variants={textVariants}
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <a
              href="https://otc.instix.io/onboarding/"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-yellow-400 text-black hover:bg-white rounded-full font-medium">
                Get Started
                <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center sm:inline-flex ">
                  <ArrowRight className="h-4 w-4 text-black" />
                </div>
              </button>
            </a>
            <a href="/about-Us" className="inline-block">
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-full font-medium">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroClient;