import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Head from "next/head";

const AOS = dynamic(() => import("aos"), { ssr: false });

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - Services - Request for Quotation",
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

const rfq = ({ seoData }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css");
      const aos = require("aos");
      aos.init({
        duration: 2000,
        once: false,
        offset: 100,
      });
    }
  }, []);

  const cardsData = [
    {
      title: "Request Submission",
      description1:
        "- The trader sends an RFQ specifying the trade parameters (asset pair, size, etc.).",
      description2:
        "- This can be done via OTC desks, RFQ-enabled trading platforms.",
    },
    {
      title: "Quote Generation",
      description1:
        "- The market maker analyzes market conditions and calculates the best possible price.",
      description2:
        "- A quote is provided with a defined expiration time (e.g., 10 seconds).",
    },
    {
      title: "Acceptance or Rejection",
      description1:
        "- The requester reviews the quote and decides to accept or reject it.",
      description2:
        "- Once accepted, the trade is executed at the agreed-upon price.",
    },
    {
      title: "Settlement",
      description1:
        "- On the instiX platform, the trade is settled immediately.",
    },
  ];
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

      <div className="min-h-screen md:pt-[8rem] bg-[#000] text-white lg:py-24 relative overflow-hidden">
        {/* Section 1: RFS Introduction */}
        <section className="relative">
          <div className="flex items-center lg:pt-24 justify-center bg-[#000000c0] px-4">
            <div className="relative max-w-7xl w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/Untitled-1.png')",
                }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full lg:px-6">
                <h1
                  data-aos="fade-down"
                  className="text-4xl text-[40px] uppercase font-poppins md:text-6xl font-bold pt-[20rem] mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                >
                  Request for Quote (RFQ)
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-gray-300 lg:text-2xl md:text-2xl text-[20px] mb-12 leading-relaxed bg-opacity-50 lg:p-6 rounded-lg"
                >
                  A Request for Quote (RFQ) in cryptocurrency trading is a
                  process where a buyer or seller requests a price quote from a
                  liquidity provider or market maker (in this case instix Global
                  LLC) to execute a specific trade. The RFQ mechanism is
                  particularly common in over-the-counter (OTC) trading and
                  institutional trading platforms.
                </p>
                <a
                  href="https://otc.instix.io/"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium hover:bg-white transition duration-300">
                    Trade Now
                    <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-black" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Advantages of RFS */}
        <div className="bg-[#000000c0] p-4 md:p-8">
          <h2
            data-aos="fade-up"
            className="text-center text-3xl lg:pt-[50px] pb-[40px] font-bold text-white md:text-3xl"
          >
            Key Components of RFQ in Crypto Trading
          </h2>
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Participants Section */}
            <div
              data-aos="fade-right"
              className="rounded-xl bg-[#1a1a1a] border border-yellow-500 p-6 backdrop-blur"
            >
              <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 md:text-3xl">
                Participants
              </h2>
              <div className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-white md:text-xl whitespace-nowrap">
                    Requester:
                  </h3>
                  <p className="text-gray-300">
                    The party initiating the request, often a HNI, UHNI or
                    Institution looking to buy or sell a specific
                    cryptocurrency.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-white md:text-xl whitespace-nowrap">
                    Responder:
                  </h3>
                  <p className="text-gray-300 lg:text-center">
                    instiX Principal Liquidity works as a liquidity provider for
                    the quotes. It commits to fulfilling the trade at the quoted
                    price within a specified time frame.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Details Section */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="rounded-xl bg-[#1a1a1a] border border-yellow-500 p-6 backdrop-blur"
              >
                <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 md:text-3xl">
                  Details in the RFQ
                </h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-white md:text-xl whitespace-nowrap">
                      Asset Pair:
                    </h3>
                    <p className="text-gray-300 flex-1">
                      Specifies the cryptocurrencies involved, e.g. BTC/USDT,
                      USDT/USD.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-white md:text-xl whitespace-nowrap">
                      Quantity:
                    </h3>
                    <p className="text-gray-300 flex-1">
                      The amount of cryptocurrency the requester wants to trade.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-white md:text-xl whitespace-nowrap">
                      Direction:
                    </h3>
                    <p className="text-gray-300 flex-1">
                      Indicates whether it's a buy or sell order.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="rounded-xl bg-[#1a1a1a] border border-yellow-500 p-6 backdrop-blur"
              >
                <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 md:text-3xl">
                  Pricing
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300">
                    The validity of the price is for a few seconds depending on
                    the cryptocurrency.
                  </p>
                  <p className="text-gray-300">
                    The quoted price considers market conditions, liquidity, and
                    the order size.
                  </p>
                  <p className="text-gray-300">
                    Large orders may have a slight spread due to slippage risks
                    or liquidity constraints.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards Section */}
            <div className="mx-auto max-w-7xl pt-12 space-y-12">
              <h2
                data-aos="fade-up"
                className="text-center text-3xl font-bold text-white md:text-3xl"
              >
                How RFQ Works in Crypto Trading
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    className="rounded-lg border border-yellow-500 bg-[#1a1a1a] p-6 backdrop-blur transition-all duration-300 hover:transform hover:shadow-lg"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-400">{card.description1}</p>
                    <p className="text-gray-400">{card.description2}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <p
                data-aos="fade-up"
                className="text-gray-300 lg:text-2xl md:text-2xl text-[20px] mb-12 leading-relaxed bg-opacity-50 lg:p-6 rounded-lg"
              >
                RFQ (Request for Quote) trading offers a tailored, efficient,
                and bespoke solution for executing trades, especially for large
                ticket sized orders. It complements traditional order book
                systems by addressing liquidity and market impact concerns.
              </p>
              <a
                href="https://otc.instix.io/"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium hover:bg-white transition duration-300">
                  Trade Now
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default rfq;
