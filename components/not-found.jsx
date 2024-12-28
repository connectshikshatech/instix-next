import { useState, useEffect } from "react";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNumbersVisible, setIsNumbersVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsNumbersVisible(true), 500);
    setTimeout(() => setShowMessage(true), 1000);
  }, []);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated 404 Numbers */}
        <div className="relative">
          <h1
            className={`text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mb-8 transform transition-all duration-1000 ease-out
              ${
                isNumbersVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
          >
            404
          </h1>

          {/* Animated floating shapes */}
          <div
            className={`absolute top-0 left-0 w-full h-full pointer-events-none
            ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75" />
            <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-amber-500 rounded-full animate-bounce opacity-75" />
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-pulse opacity-75" />
          </div>
        </div>

        {/* Animated Text Content */}
        <div
          className={`space-y-4 transition-all duration-1000 ease-out
          ${
            showMessage
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-white max-w-md mx-auto mb-8">
            Looks like this page got lost in the sunshine! ☀️ Don't worry, we
            can help you find your way back.
          </p>

          <button
            className="px-6 py-3 bg-white text-black font-medium rounded-lg
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-amber-200/50
              active:scale-95 hover:text-black hover:bg-yellow-500"
            onClick={() => window.history.back()}
          >
            Go Back Home
          </button>

          {/* Additional decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-75" />
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-150" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
