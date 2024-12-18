"use client";

import { useState, useEffect } from "react";
import { ArrowRight, LogOut, Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleInsights = () => setIsInsightsOpen(!isInsightsOpen);

  const getActiveClass = (route) => {
    return pathname === route
      ? "bg-yellow-300 bg-opacity-20 text-yellow-400"
      : "hover:text-yellow-400 hover:bg-yellow-300 hover:bg-opacity-20";
  };

  const services = [
    { name: "Request for Quote (RFQ)", path: "/services/rfq" },
    { name: "Request for Stream (RFS)", path: "/services/rfs" },
    { name: "Principal Liquidity (LP)", path: "/services/lp" },
  ];

  const insights = [
    { name: "Blogs", path: "/blog" },
    { name: "In the Media", path: "/mediacoverage" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isHomePage = pathname === "/";
  return (
    <div className="text-white">
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isHomePage
            ? isSticky
              ? "bg-[#0a0b0d] shadow-lg"
              : "bg-transparent"
            : "bg-[#0a0b0d]"
        } text-white`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
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

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-4 xl:space-x-6">
              <li>
                <a
                  href="/about-us"
                  className={`font-light text-sm xl:text-base list-none px-2 py-1 rounded-full leading-6 ${getActiveClass(
                    "/about-us"
                  )}`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://otc.instix.io/"
                  className={`font-light text-sm xl:text-base list-none px-2 py-1 rounded-full leading-6 ${getActiveClass(
                    "/otc"
                  )}`}
                >
                  OTC Trade
                </a>
              </li>
              <li className="relative group">
                <button
                  className={`font-light -mt-1 text-sm xl:text-base list-none px-2 py-1 rounded-full leading-6 flex items-center ${getActiveClass(
                    "/services"
                  )}`}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible group-hover:visible hover:visible opacity-0 group-hover:opacity-100 hover:opacity-100 absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300">
                  {services.map((service) => (
                    <a
                      key={service.path}
                      href={service.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 hover:text-yellow-600"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </li>
              <li className="relative group">
                <button
                  className={`font-light -mt-1 text-sm xl:text-base list-none px-2 py-1 rounded-full leading-6 flex items-center ${getActiveClass(
                    "/insights"
                  )}`}
                >
                  Insights
                  <ChevronDown className="ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible group-hover:visible hover:visible opacity-0 group-hover:opacity-100 hover:opacity-100 absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300">
                  {insights.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 hover:text-yellow-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </li>
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="https://otc.instix.io/" className="inline-block">
                <button className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-light hover:bg-white hover:text-black flex items-center border border-white rounded-[30px]">
                  Log in
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </button>
              </a>
              <a href="https://otc.instix.io/onboarding/">
                <button className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-medium bg-yellow-400 hover:bg-white hover:text-black text-black rounded-full flex items-center">
                  Get Started
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-[350px] bg-black transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-start space-y-6 sm:space-y-8">
            <a
              href="/about-us"
              className="text-white text-xl sm:text-2xl font-light hover:text-yellow-400"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="https://otc.instix.io/"
              className="text-white text-xl sm:text-2xl font-light hover:text-yellow-400"
              onClick={toggleMenu}
            >
              OTC Trade
            </a>

            {/* Mobile Services */}
            <div className="w-full">
              <button
                onClick={toggleServices}
                className="text-white text-xl sm:text-2xl font-light hover:text-yellow-400 flex items-center w-full justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  className={`ml-2 h-6 w-6 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="mt-4 ml-4 space-y-4">
                  {services.map((service) => (
                    <a
                      key={service.path}
                      href={service.path}
                      className="block text-white text-lg hover:text-yellow-400"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Insights */}
            <div className="w-full">
              <button
                onClick={toggleInsights}
                className="text-white text-xl sm:text-2xl font-light hover:text-yellow-400 flex items-center w-full justify-between"
              >
                <span>Insights</span>
                <ChevronDown
                  className={`ml-2 h-6 w-6 transform transition-transform ${
                    isInsightsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isInsightsOpen && (
                <div className="mt-4 ml-4 space-y-4">
                  {insights.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block text-white text-lg hover:text-yellow-400"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Buttons */}
            <div className="w-full space-y-4 pt-4 mt-auto">
              <a
                href="https://otc.instix.io/"
                className="block"
                onClick={toggleMenu}
              >
                <button className="w-full px-4 py-2 text-white border border-white rounded-full flex items-center justify-between hover:text-black hover:bg-white hover:border-white">
                  Log in
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </button>
              </a>
              <a
                href="https://otc.instix.io/onboarding/"
                className="block"
                onClick={toggleMenu}
              >
                <button className="w-full px-4 py-2 bg-yellow-400 text-black rounded-full flex items-center justify-between hover:bg-white hover:border hover:border-black">
                  Get Started
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
