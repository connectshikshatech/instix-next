import Hero from "../components/Hero";
import OperationalHighlights from "../components/Operatinal";
import React from "react";
import About from "../components/About";
import CoreServices from "../components/CoreServices";
import Tradingfeatures from "../components/Tradingfeatures";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import Head from "next/head";

export async function getServerSideProps() {
  const seoData = {
    title: "InstiX - Your Trading Partner",
    description: "Discover the best trading features and services with InstiX.",
    ogImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
    twitterImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
  };

  return {
    props: {
      seoData,
    },
  };
}

const HomePage = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.twitterImage} />
      </Head>
      <div className="bg-black text-white min-h-screen flex flex-col justify-center overflow-hidden">
        <Hero />
        <OperationalHighlights />
        <About />
        <CoreServices />
        <Tradingfeatures />
        <BlogSection />
        <Newsletter />
      </div>
    </>
  );
};

export default HomePage;
