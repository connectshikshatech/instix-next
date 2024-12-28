import { useState, useEffect } from "react";
import { Mail, HelpCircle } from "lucide-react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import Link from "next/link";

const AOS = dynamic(() => import("aos"), { ssr: false });

const ContactUsMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    privacyPolicy: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css").then(() => {
        const aos = require("aos");
        aos.init({
          duration: 1000,
          once: true,
          easing: "ease-out",
        });
        aos.refresh();
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your message has been sent successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending data:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 text-white">
      {/* Breadcrumb Section */}
      <div
        className="bg-black py-4 px-4 text-center sm:px-6 lg:px-8"
        data-aos="fade-down"
      >
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl justify-center md:text-4xl font-bold mb-2">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We're here to make things easy for you. Got a question? need some
              help with a trade, or looking for something more tailored? Just
              reach out. Our team at instiX is ready to help you find the
              answers and keep things running smoothly. Whether it's a quick
              question or a complex inquiry, we're here with straightforward,
              real solutions. You can reach us through the contact form or drop
              us an email and we'll get back to you as fast as we can. Every
              message you send is important to us, and we'll keep it
            </p>
          </div>

          {/* Right Column - Form */}
          <div data-aos="fade-left" data-aos-delay="400">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  Email Id
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 resize-none text-sm sm:text-base"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 border-gray-700 rounded focus:ring-yellow-400"
                  checked={formData.privacyPolicy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      privacyPolicy: e.target.checked,
                    })
                  }
                  required
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm">
                  You agree to our friendly{" "}
                  <Link
                    href="/privacypolicy"
                    className="underline hover:text-yellow-400"
                  >
                    privacy policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-3 sm:py-4 rounded-full hover:bg-white transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact-info-Card */}
        <div className="w-full bg-[#1a1a1a] pt-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div
                className="p-6 rounded-lg border border-gray-800 bg-[#1c1c1c]"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#806000] flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Email Id
                    </h3>
                    <p className="text-gray-400 mb-2">
                      Contact us via email for more information
                    </p>
                    <a
                      href="mailto:Support@instix.io"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Support@instix.io
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div
                className="p-6 rounded-lg border border-gray-800 bg-[#1c1c1c]"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#806000] flex items-center justify-center">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      FAQ's
                    </h3>
                    <p className="text-gray-400 mb-2">
                      Find answers to your questions here
                    </p>
                    <a href="/faqs">
                      <p className="text-yellow-400">Learn More</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUsMain;
