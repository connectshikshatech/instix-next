// "use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CoreServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Trigger animations only once
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "instiX RFQ",
      description:
        "The instiX RFQ (Request for Quote) feature brings transparency...",
      image: "/RFS.png",
      link: "/services/rfq",
    },
    {
      title: "instiX RFS",
      description:
        "The instiX RFS (Request for Stream) offers real-time streaming...",
      image: "/RFQ.png",
      link: "/services/rfs",
    },
    {
      title: "instiX Principal Liquidity",
      description: "The instiX Principal Liquidity connects users with best...",
      image: "/LP.png",
      link: "/principal-liquidity",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <h1
        className="relative z-10 lg:text-4xl text-[2rem] md:text-5xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        instiX Core Services
      </h1>
      <div className="w-full max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="px-2"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg text-center hover:border-yellow-500 border border-gray-300 p-4">
              {/* <img
                src={service.image}
                alt={service.title}
                className="w-full h-[30rem]"
                data-aos="zoom-in"
              /> */}
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
                data-aos="zoom-in"
              />
              <div className="p-4">
                <h2
                  className="text-xl text-yellow-500 font-semibold mb-2"
                  data-aos="zoom-in"
                >
                  {service.title}
                </h2>
                <p className="text-gray-400 mb-4 text-sm" data-aos="zoom-in">
                  {service.description}
                </p>
                <div className="flex justify-center" data-aos="zoom-in">
                  {/* Link for Navigation */}
                  <Link
                    href={service.link}
                    onClick={() => window.scrollTo(0, 0)} // Reset scroll to the top
                    className="text-white border border-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors"
                  >
                    View More
                    <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-black" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/service-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/service-bg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default CoreServices;
