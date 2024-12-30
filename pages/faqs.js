import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Head from "next/head";

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - FAQs",
    description: "Learn more about us.",
  };

  return {
    props: {
      seoData,
    },
  };
}

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="bg-[#222]  rounded-lg overflow-hidden mb-4">
    <div
      className="flex items-center justify-between p-4 cursor-pointer"
      onClick={onClick}
    >
      <h3
        className={`!text-[20px] sm:text-base font-medium pr-4 text-white ${
          isOpen ? "text-yellow-400" : ""
        }`}
      >
        {title}
      </h3>
      <div className="flex-shrink-0 bg-zinc-800 rounded-full p-1">
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-yellow-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white" />
        )}
      </div>
    </div>
    {isOpen && (
      <div className="px-4 pb-4 text-[17px] text-zinc-400 transition-all duration-300 ease-in-out">
        {content}
      </div>
    )}
  </div>
);

const faqs = ({ seoData }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const accordionItems = [
    {
      title: "What makes instiX different from other exchanges?",
      content:
        "instiX is built for big ticket sized orders with unbeatable liquidity and no hidden fees. Unlike other platforms, we cater specifically to institutions and high-net-worth individuals, so you get single-price execution at zero transaction cost.",
    },
    {
      title: "Why do institutions, UHNIs, and HNIs need instiX?",
      content:
        "In big ticket sized orders, every second counts. We provide the most liquid market at the best execution price where large-volume transactions can happen smoothly and without impact cost. This is ideal for anyone looking to trade confidently and efficiently at scale.",
    },
    {
      title: "What kind of assets can I trade on instiX?",
      content:
        "instiX supports over 100+ cryptocurrencies, from stablecoins to top-market crypto assets. Whether it’s USD-USDT or BTC-USDT, we’ve got a wide range covered to meet your trading needs.",
    },
    {
      title: "Are there any fees when trading on instiX?",
      content: "Zero transaction fees.",
    },
    {
      title: "How does instiX ensure fast trades and withdrawals?",
      content:
        "Our platform is designed for high-speed transactions. Crypto withdrawals typically clear within 1–15 minutes (depending upon the network congestion on blockchain and selection of network), while fiat transfers usually complete within 24–48 hours, depending on your bank.",
    },
    {
      title: "Is instiX available worldwide?",
      content:
        "instiX currently serves clients in over 10+ countries, with a focus on providing a seamless experience for institutional investors, UHNIs, and HNIs.",
    },
    {
      title: "How do I get started on instiX?",
      content:
        "First, create an account and go through our KYC (Know Your Customer) process. Once verified, you can fund your account and start trading right away.",
    },
    {
      title: "What security measures does instiX offer?",
      content:
        "We are a regulated platform licensed in Poland, designed with security and compliance at the forefront. All trades meet global standards, so you can trade confidently within a secure environment.",
    },
    {
      title: "What is instiX’s Request for Quote (RFQ) feature?",
      content:
        "With RFQ, you can get the best bid/ask for large orders at a single price. It’s ideal for those making big trades who want certainty and efficiency in execution.",
    },
    {
      title: "What’s the Request for Streamline (RFS) feature on instiX?",
      content:
        "RFS allows you to tap into live market depth for large trades, with access to real-time pricing data. This feature is especially useful for trades that require dynamic, flexible market engagement.",
    },
    {
      title: "Does instiX offer support for fiat trading?",
      content:
        "Yes, we support a variety of fiat-to-crypto options and provide a seamless onramp and offramp experience for your trading needs.",
    },
    {
      title: "Who can use instiX?",
      content:
        "Our platform is tailored for institutional investors, Ultra high-net-worth individuals (UHNIs), and high-net-worth individuals (HNIs) who need a reliable, highly-liquid trading platform.",
    },
    {
      title: "How does instiX provide liquidity for large trades?",
      content:
        "We are a liquidity provider across multiple exchanges, which means we ensure competitive pricing and high volume for big trades—without causing price swings.",
    },
    {
      title: "Why choose instiX over a regular exchange?",
      content:
        "Trades on regular exchanges can often increase the impact cost vs trading on the World’s 1st Institutional OTC Platform. instiX is specifically designed for high ticket sized orders, providing continuous liquidity, no transaction fees, and responsive support that makes a difference at scale.",
    },
    {
      title: "What customer support options does instiX offer?",
      content:
        "Our team is available 24/7, ready to assist with any questions or issues to ensure your trading experience stays smooth and stress-free.",
    },
  ];
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>

      <div className="bg-black pt-24 pb-4 top-0 z-50 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl justify-center text-center md:text-4xl font-bold mb-2">
            FAQs
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-[#1a1a1a] text-white p-4 sm:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:gap-8">
          {/* FAQ Accordion */}
          <div>
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={expandedItem === index}
                onClick={() =>
                  setExpandedItem(expandedItem === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default faqs;
