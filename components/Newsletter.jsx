// "use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false); // State to track errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      setError(true); // Mark it as an error
      return;
    }

    // Construct the body of the email
    const body = `Hello,\n\nI would like to subscribe to the newsletter using the following email: ${email}\n\nThank you.`;

    // Redirect to the default mail client
    window.location.href = `mailto:support@instix.io?subject=Newsletter Subscription&body=${encodeURIComponent(
      body
    )}`;

    // Optionally clear the email field and show a message
    setEmail("");
    setMessage("Redirecting to your email client...");
    setError(false);
  };

  return (
    <div className="py-[5rem] p-6 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="lg:text-4xl text-[2rem] sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
          Get The Latest Industry Updates!
        </h1>
        <p className="text-gray-300 lg:text-lg text-[17px] sm:text-xl mb-8 max-w-3xl mx-auto">
          instiX is a leading Over-the-Counter (OTC) platform designed to make <br />
          cryptocurrency trading easier for Institutions, HNIs, and UHNIs.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 pr-24 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-white transition duration-300 flex items-center justify-center"
            >
              Submit
              <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>
            </button>
          </div>
        </form>
        {message && (
          <div
            className={`text-center pt-8 text-lg font-semibold ${
              error ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
