// "use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-customHeader text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-8">
          {/* Logo and buttons column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <a href="/">
                {/* <img
                  src="/logo.png"
                  alt="InstiX Logo"
                  width={180}
                  height={80}
                  className="w-[120px] sm:w-[150px] md:w-[180px]"
                /> */}
                <Image
                  src="/logo.png"
                  alt="InstiX Logo"
                  width={180}
                  height={80}
                  className="w-[120px] sm:w-[150px] md:w-[180px]"
                />
              </a>
            </div>
            <p className="text-sm mb-4">
              World's No.1 Institutional OTC Platform
              <br />
              Licensed from Poland.
            </p>

            <div className="space-y-2 sm:space-y-0 sm:space-x-4 sm:flex lg:flex-col lg:gap-[0px] md:gap-[20px] lg:space-y-4">
              <a href="https://otc.instix.io/" className="block m w-full">
                <button className="border border-white text-white py-2 hover:text-black hover:bg-white  px-4 rounded-full w-full">
                  Login
                </button>
              </a>
              <a
                href="https://otc.instix.io/onboarding/"
                className="block !ml-0 w-full"
              >
                <button className="bg-yellow-400 text-black py-2 px-4 hover:text-black hover:bg-white  rounded-full w-full">
                  Get Started
                </button>
              </a>
            </div>
          </div>

          {/* Programs column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms&condition"
                  className="hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/cookiepolicy"
                  className="hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclosurestatement"
                  className="hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclosure Statements
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/rfq" className="hover:text-yellow-400">
                  Request for Quote (RFQ)
                </a>
              </li>
              <li>
                <a href="/services/rfs" className="hover:text-yellow-400">
                  Request for Stream (RFS)
                </a>
              </li>
              <li>
                <a href="lp" className="hover:text-yellow-400">
                  Principal Liquidity (LP)
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details Column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-Us" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/mediacoverage" className="hover:text-yellow-400">
                  In the media
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Out column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2">
              Reach out to Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/faqs" className="hover:text-yellow-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact-Us" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
              <h3 className="custom-h3 mb-4 font-semibold text-yellow-500 pb-2 \">
                Follow Us on
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/instix/"
                  className="hover:text-yellow-400"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaTimes />
                </a>
              </div>
            </ul>
          </div>

          {/* Address column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2">
              Reg. Address
            </h3>
            <p className="mb-2">
              Bartycka, 22B Suite, 21A, Warsaw, Poland 00-716
            </p>
            <h3 className="custom-h3 text-lg font-semibold text-yellow-500 mb-4 pb-2 \">
              Branch Office
            </h3>
            <p className="mb-2">Emirates Financial Tower, Level 41, Dubai</p>
          </div>
        </div>

        {/* Disclaimer and Copyright remain unchanged */}
        <div className="mt-8 text-sm text-gray-300">
          <p className="mb-4 text-[11px]">
            Trading digital assets involves significant risk and may not suit
            all investors. Asset values can fluctuate widely, leading to
            substantial losses. This material is for informational purposes only
            and is exclusively for sophisticated or institutional investors; it
            is not an offer, solicitation, or recommendation to invest, buy, or
            sell any securities or participate in any trading strategy.
          </p>
          <p className="mb-4 text-[11px]">
            This content does not constitute financial, legal, tax, or
            investment advice, nor is it an official statement of instiX Global
            LLC or its affiliates. Users should seek independent advice to
            assess the legal, tax, regulatory, and financial implications of
            transactions. instiX Global does not guarantee the accuracy or
            completeness of the information provided and disclaims liability for
            any reliance on it. Accessing this website confirms your
            acknowledgment of these terms and acceptance of associated risks.
          </p>
        </div>
        <div className="mt-8 pt-8 border-gray-800 text-center text-sm">
          Registered entity: instiX Global Polish Limited Liability Company,
          Reg. Number : KRS 0001107325
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © instiX 2024 All right reserved
        </div>
      </div>
    </footer>
  );
}
