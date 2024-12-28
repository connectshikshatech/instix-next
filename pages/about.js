import React from "react";
import Head from "next/head";
import AboutMain from "@/components/about/AboutMain";

export async function getServerSideProps() {
  const seoData = {
    title: "InstiX - About Us",
    description: "Learn more about us.",
    ogImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
    twitterImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
  };

  return {
    props: {
      seoData,
    },
  };
}

const AboutPage = ({ seoData }) => {
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
      <AboutMain />
    </>
  );
};

export default AboutPage;
