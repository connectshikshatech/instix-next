import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Head from "next/head";
const AOS = dynamic(() => import("aos"), { ssr: false });

export async function getServerSideProps() {
  const seoData = {
    title: "InstiX - Services - Request for Streaming (RFS)",
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

const rfs = ({ seoData }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css");
      const aos = require("aos");
      aos.init({
        duration: 2000,
        once: false,
        easing: "ease-out",
      });
    }
  }, []);
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
                  Request for Streaming (RFS)
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-gray-300 lg:text-2xl md:text-2xl text-[20px] mb-12 leading-relaxed bg-opacity-50 lg:p-6 rounded-lg"
                >
                  Request for Streaming (RFS) in cryptocurrency trading is a
                  mechanism where a trader requests a continuous stream of live
                  prices on the instiX RFS platform, rather than a one-time
                  static quote as seen in instiX Request for Quote (RFQ). This
                  approach is commonly used in high-frequency trading,
                  institutional trading, or advanced algorithmic trading, where
                  real-time market updates are crucial for decision-making.
                </p>
                <a
                  href="https://otc.instix.io/"
                  data-aos="fade-up"
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
        <section className="bg-[#000000c0] pt-16 md:p-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-white text-4xl md:text-5xl font-bold text-center mb-16"
            >
              Advantages Of Request For Stream (RFS)
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Real-Time Pricing Card */}
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="border-yellow-500 bg-[#1a1a1a] rounded-lg p-8 border"
              >
                <h2 className="text-[#FFD700] text-2xl md:text-3xl font-bold text-center mb-6">
                  Real-Time Pricing
                </h2>
                <p className="text-white text-center text-lg leading-relaxed">
                  Traders Have Access To Continuously Updated, Actionable
                  Prices.
                </p>
              </div>

              {/* Flexibility Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="border-yellow-500 bg-[#1a1a1a] rounded-lg p-8 border"
              >
                <h2 className="text-[#FFD700] text-2xl md:text-3xl font-bold text-center mb-6">
                  Flexibility
                </h2>
                <p className="text-white text-center text-lg leading-relaxed">
                  Allows Traders To Act Immediately On Favorable Price
                  Movements.
                </p>
              </div>

              {/* Efficient Execution Card */}
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="border-yellow-500 bg-[#1a1a1a] rounded-lg p-8 border"
              >
                <h2 className="text-[#FFD700] text-2xl md:text-3xl font-bold text-center mb-6">
                  Efficient Execution
                </h2>
                <p className="text-white text-center text-lg leading-relaxed">
                  Minimizes Delays In Executing Trades Since The Pricing And
                  Available Quantity Is Current.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default rfs;
