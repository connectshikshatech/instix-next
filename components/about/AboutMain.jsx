import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AOS = dynamic(() => import("aos"), { ssr: false });

const AboutMain = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css").then(() => {
        const aos = require("aos");
        aos.init({
          duration: 2000,
          once: true,
        });
        aos.refresh();
      });
    }
  }, []);

  if (!isClient) {
    <div className="min-h-screen bg-black text-white pt-24 relative overflow-hidden">
      <nav className="mt-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm">
            <h1 className="text-2xl sm:text-3xl justify-center md:text-4xl font-bold mb-2">
              About Us
            </h1>
          </div>
        </div>
      </nav>
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-4">
          <div className="w-full md:w-1/2 relative flex items-center justify-center">
            <Image
              src="/Frame.png"
              width={500}
              height={500}
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-cover bg-center"
              alt="Background"
            />
            <h2 className="absolute text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
              <span className="text-yellow-400 block">Integrity</span>
              <span className="text-white">Drives Change</span>
            </h2>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <div className="inline-block bg-yellow-400/10 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              The instiX Journey
            </div>
            <p className="text-gray-300 mb-8 text-justify">
              The world of crypto is growing fast, and for institutions, it's
              just not about taking a pie of share but it's about getting it
              right. That's where instiX Platform has evolved with a clear need
              of the hour. instiX is licensed and regulated by Poland VCAP
              making it World's No. 1 Regulated OTC Institutional Platform built
              exclusively for those who demand high ticket size order execution
              at lowest slippage cost.
            </p>
            <h3 className="text-2xl text-yellow-400 md:text-3xl py-3 lg:text-4xl font-bold leading-tight">
              Why instiX, and Why Now?
            </h3>
            <p className="text-gray-300 mb-8 text-justify">
              In a market flooded with crypto exchanges, none cater to the true
              depth and liquidity required by institutions, HNIs, UHNIs.
              Institutions having exposure with billions in crypto need a OTC
              platform to handle the high ticket sized orders - all at a single
              price with zero transaction cost. They need efficiency, security,
              and the muscle to match their big ticket sized order. instiX
              Global LLC has been built to serve this purpose and is World's No.
              1 Regulated OTC Institutional Platform.
            </p>
          </div>
        </div>
      </main>
    </div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 relative overflow-hidden">
      {/* Navigation and Breadcrumbs */}
      <nav className="mt-4 text-center" data-aos="fade-down">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm">
            <h1 className="text-2xl sm:text-3xl justify-center md:text-4xl font-bold mb-2">
              About Us
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-4">
          <div
            className="w-full md:w-1/2 relative flex items-center justify-center"
            data-aos="fade-right"
          >
            {/* <img
          src="/Frame.png"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-cover bg-center"
          alt="Background"
        /> */}
            <Image
              src="/Frame.png"
              width={500}
              height={500}
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-cover bg-center"
              alt="Background"
            />
            <h2 className="absolute text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
              <span className="text-yellow-400 block">Integrity</span>
              <span className="text-white">Drives Change</span>
            </h2>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <div className="inline-block bg-yellow-400/10 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              The instiX Journey
            </div>
            <p className="text-gray-300 mb-8 text-justify">
              The world of crypto is growing fast, and for institutions, it's
              just not about taking a pie of share but it's about getting it
              right. That's where instiX Platform has evolved with a clear need
              of the hour. instiX is licensed and regulated by Poland VCAP
              making it World's No. 1 Regulated OTC Institutional Platform built
              exclusively for those who demand high ticket size order execution
              at lowest slippage cost.
            </p>
            <h3 className="text-2xl text-yellow-400 md:text-3xl py-3 lg:text-4xl font-bold leading-tight">
              Why instiX, and Why Now?
            </h3>
            <p className="text-gray-300 mb-8 text-justify">
              In a market flooded with crypto exchanges, none cater to the true
              depth and liquidity required by institutions, HNIs, UHNIs.
              Institutions having exposure with billions in crypto need a OTC
              platform to handle the high ticket sized orders - all at a single
              price with zero transaction cost. They need efficiency, security,
              and the muscle to match their big ticket sized order. instiX
              Global LLC has been built to serve this purpose and is World's No.
              1 Regulated OTC Institutional Platform.
            </p>
          </div>
        </div>

        {/* Operations At A Glance Section */}
        <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-[rem] font-bold text-center mb-8 md:mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            Operations At A Glance
          </h1>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-24"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              { value: "100", label: "Coins Available" },
              { value: "20", label: "Institutions" },
              { value: "10", label: "Countries Covered" },
              { value: "5", label: "Fiat Currencies" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2">
                  {item.value}
                  <span className="text-yellow-500">+</span>
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Competitive Advantage Section */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-[6rem] font-bold text-center mb-8 md:mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            What We Stand For
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              {
                title: "Client-Centric Innovation",
                description:
                  "InstiX model focuses on creating a seamless experience for institutions, HNIs, and UHNIs, empowering them to trade big ticket sized order at a single price. Every feature of instiX platform is designed to meet specific the requirements of novice to professional clients.",
              },
              {
                title: "Integrity-Driven Excellence",
                description:
                  "At instiX, integrity defines in our day to day operations. We ensure transparency in all our dealings and maintain the highest standards of trust, compliance, and regulation, ensuring our clients receive the best service possible.",
              },
              {
                title: "Best in Class Support",
                description:
                  "Our customer support is available 24/7/365. No matter if you are stuck in middle of trade or your are a new user or you are looking to get best in class liquidity, we had covered you all. Our team is always ready to give you the solutions round the clock.",
              },
              {
                title: "Setting New Standards",
                description:
                  "Licensed and Regulated from Poland. instiX Global LLC enjoys high level of trust and confidence. Trading on instiX platform are just not crypto transactions; infact they are designed to embark the crypto journey to a new sphere. With the innovations at the core, instiX team believes in providing seamless price execution even at a higher market volatility.",
              },
              {
                title: "Global Reach",
                description:
                  "instiX Platform has its presence across more than 10+ countries. instiX stands on 3 pillar - Regulation, Security and Liquidity. Deep understanding of markets enables us to offer a comprehensive and tailored approach to Institutions, HNIs, UHNIs.",
              },
              {
                title: "Security Above All",
                description:
                  "Security is at the core of everything we do. At instiX we believe in the client fund security and for the same instiX has partnered with Fireblocks for providing custody solutions to its clients. We employ the most advanced security protocols to protect assets and data.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border-2 border-yellow-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <h3 className="text-base  sm:text-lg md:text-xl font-bold text-center text-yellow-500 mb-4 truncate">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-sm text-white text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Section Start */}
        <div className="bg-black text-white">
          {/* Top Section */}
          <section
            className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between"
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-[6rem] font-bold justify-start mb-8 md:mb-12 lg:mb-16">
                The Future of Crypto OTC Platform,
                <br /> Built for Today!
              </h3>
              <p
                className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                For the bold, the strategic, and the uncompromising, instiX is
                more than a platform; it's your gateway to execute large ticket
                sized order for institutions, HNIs, UHNIs and taking crypto
                trading to next level.
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              {/* <img
            src="/group.png"
            alt="World Map with Location Markers"
            className="w-full h-auto"
          /> */}

              <Image
                src="/group.png"
                width={500}
                height={500}
                alt="World Map with Location Markers"
                className="w-full h-auto"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutMain;
