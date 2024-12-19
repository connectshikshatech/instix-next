// "use client";

import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Statistic = ({ number, prefix, suffix, label, highlight = false }) => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     once: false
  //   });
  // }, []);

  return (
    <div 
      // data-aos="fade-up"
      // data-aos-delay="200"
      className="flex flex-col items-center justify-center text-center"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-baseline justify-center text-white">
        {prefix && <span className="text-yellow-400">{prefix}</span>}
        <span>{number}</span>
        <span className="text-yellow-400">{suffix}</span>
      </p>
      <p 
        // data-aos="fade-up"
        // data-aos-delay="400"
        className="text-sm text-gray-400"
      >
        {label}
      </p>
    </div>
  );
};

const OperationalHighlights = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false
  //   });
  // }, []);

  return (
    <section 
      // data-aos="fade-up"
      className="custom-min-height py-[2rem] lg:py-[10rem] flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      <div className="max-w-4xl w-full">
        <h1 
          // data-aos="zoom-in"
          className="text-[2rem] md:text-5xl lg:text-6xl sm:text-3xl font-bold text-center mb-16 text-white"
        >
          Operational Highlights
        </h1>
        
        <div 
          // data-aos="fade-up"
          // data-aos-delay="300"
          className="grid grid-cols-2 gap-8 mb-8"
        >
          <Statistic number="100" suffix="+" label="Coins Available" />
          <Statistic
            number="20"
            prefix=""
            suffix="+" 
            label="Institutions"
            highlight
          />
        </div>
        
        <div className="flex justify-center mb-8">
          <Statistic number="10" suffix="+" label="Countries Covered" />
        </div>
        
        <div 
          // data-aos="fade-up"
          // data-aos-delay="500"
          className="grid grid-cols-2 gap-8"
        >
          <Statistic number="7" suffix="+" label="Strategic Partners" />
          <Statistic number="5" suffix="+" label="Fiat Currencies" />
        </div>
      </div>
    </section>
  );
};

export default OperationalHighlights;