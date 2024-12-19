// "use client";

import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     once: false, // animations only happen once
  //     easing: "ease-in-out",
  //   });
  // }, []);

  return (
    <section className="w-full overflow-hidden mb-12 bg-black py-[5rem]">
      {/* Marquee Section */}
      <div className="relative flex overflow-x-hidden">
        <div
          className="py-12 animate-marquee whitespace-nowrap"
          // data-aos="fade-left"
        >
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-5xl mx-4">
              World's No.1 Institutional OTC Platform - Regulated, Secured and
              Best Liquidity.
            </span>
          ))}
        </div>

        <div
          className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap"
          // data-aos="fade-right"
        >
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-5xl mx-4">
              World's No.1 Institutional OTC Platform - Regulated, Secured and
              Best Liquidity.
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-4">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 relative flex items-center justify-center"
          // data-aos="fade-right"
        >
          {/* <img
            src="/Frame.png"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-cover bg-center"
            alt="Background"
          /> */}
          <Image
            src="/Frame.png"
            alt="Background"
            width={500}
            height={500}
            layout="intrinsic"
          />
          <h2
            className="absolute text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
            // data-aos="zoom-in"
          >
            <span className="text-yellow-400 block">Integrity</span>
            <span className="text-white">Drives Change</span>
          </h2>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2" data-aos="fade-left">
          <div
            className="inline-block bg-yellow-400/10 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full mb-4"
            // data-aos="slide-up"
          >
            About instiX
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4 text-white"
            // data-aos="slide-up"
          >
            Where User-Centric Integrity Meets Open Communication to Deliver
            Trust and Results.
          </h3>
          <p
            className="text-gray-300 mb-8 text-justify"
            // data-aos="slide-up"
          >
            instiX stands out as a leading OTC platform designed specifically
            for institutional investors and high-net-worth individuals. It
            offers unmatched liquidity with 100+ coins available for trading.
            Focusing on tailored liquidity solutions, instiX differentiates
            itself from competitors through its Request for Quote (RFQ) /
            Request for Stream (RFS) and Principal Liquidity (LP) allowing large
            ticket sized orders execution with zero transaction fees. Licensed
            in Poland, instiX Platform offers seamless trading experience with
            24/7 customer support and instant withdrawals, hereby makes it a
            go-to choice for institutions, HNIs, ultra-HNIs across 10+
            countries.
          </p>
          <a
            href="/about-Us"
            className="inline-block"
            //  data-aos="zoom-in"
          >
            <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-3 px-6 border border-white hover:border-transparent rounded-full inline-flex items-center transition duration-300">
              Learn More
              <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
// export default InstiXLandingSection;
