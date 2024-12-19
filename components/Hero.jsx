import React from "react";
import dynamic from "next/dynamic";

const HeroClient = dynamic(() => import("./clientComponents/HeroClient"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div>
      <HeroClient />
    </div>
  );
};

export default Hero;
