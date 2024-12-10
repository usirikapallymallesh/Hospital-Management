import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const AllPagesHero = ({ ImgUrl, path, title }) => {
  return (
    <div className="relative h-64 md:h-96">
      {/* Background Image */}
      <img
        src={ImgUrl}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-full bg-black bg-opacity-45 text-white p-4"
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        transition={{ duration: 0.5 }} // Transition duration
      >
        <p className="text-lg work-sans-color">{path}</p>
        <h1 className="text-3xl md:text-5xl font-bold yeseva-one-regular">
          {title}
        </h1>
      </motion.div>
    </div>
  );
};

export default AllPagesHero;
