import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ErrorPageBg from "../assets/images/HoerrorBg.jpg";

const ErrorPage = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ErrorPageBg})` }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Animation duration
    >
      <motion.div
        className="max-w-lg mx-auto text-center bg-white bg-opacity-90 p-10 rounded-lg shadow-lg transform transition-all duration-300"
        initial={{ scale: 0.8 }} // Initial scale for entrance animation
        animate={{ scale: 1 }} // Scale to normal size on entrance
        transition={{ duration: 0.3 }} // Duration of the scaling effect
      >
        <div className="text-9xl font-bold text-[#1F2B6C] mb-4 drop-shadow-md">
          404
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have gone on a little adventure.
          Don't worry, we'll help you find your way back home.
        </p>
        <a
          href="/" // Link to homepage
          className="inline-block bg-[#1F2B6C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#171f4f] transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Go Back Home
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
