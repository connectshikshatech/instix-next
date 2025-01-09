import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Statistic = ({ number, prefix, suffix, label, highlight = false }) => {
  return (
    <div className="statistic flex flex-col items-center justify-center text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-baseline justify-center text-white">
        {prefix && <span className="text-yellow-400">{prefix}</span>}
        <span>{number}</span>
        <span className="text-yellow-400">{suffix}</span>
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};

const OperationalHighlights = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;

      gsap.fromTo(
        section.querySelectorAll(".statistic"),
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    };

    loadGSAP();

    return () => {
      if (gsap.core.globals().ScrollTrigger) {
        gsap.core
          .globals()
          .ScrollTrigger.getAll()
          .forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="custom-min-height py-[2rem] lg:py-[10rem] flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-[2rem] md:text-5xl lg:text-6xl sm:text-3xl font-bold text-center mb-16 text-white">
          Operational Highlights
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <Statistic
            number="100"
            suffix="+"
            label="Coins Available"
            className="statistic"
          />
          <Statistic
            number="20"
            prefix=""
            suffix="+"
            label="Institutions"
            highlight
            className="statistic"
          />
        </div>

        <div className="flex justify-center mb-8">
          <Statistic
            number="10"
            suffix="+"
            label="Countries Covered"
            className="statistic"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Statistic
            number="7"
            suffix="+"
            label="Strategic Partners"
            className="statistic"
          />
          <Statistic
            number="5"
            suffix="+"
            label="Fiat Currencies"
            className="statistic"
          />
        </div>
      </div>
    </section>
  );
};

export default OperationalHighlights;
