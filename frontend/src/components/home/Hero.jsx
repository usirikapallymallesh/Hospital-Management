import React from "react";
import heroImg from "../../assets/images/HomeHero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 lg:p-12 h-[80vh]">
      <div className="max-w-full h-full order-2 flex justify-center items-start flex-col md:order-1 w-full md:w-[46%]">
        <motion.p
          className="text-lg font-semibold mb-2 work-sans-color uppercase text-[#159EEC]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Caring for Life
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 yeseva-one-regular"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Leading the Way in Medical Excellence
        </motion.h1>

        <motion.p
          className="text-md md:text-lg mb-6 work-sans-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide top-notch healthcare services with a commitment to
          excellence and patient care.
        </motion.p>

        <motion.button
          className="bg-[#1F2B6C] hover:bg-[#159EEC] text-white font-semibold py-3 px-6 md:px-10 rounded-sm transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our Services
        </motion.button>
      </div>

      <div className="md:mt-0 w-full md:w-[54%] order-1 md:order-2 h-full flex items-end justify-end">
        <motion.img
          initial={{ x: +100, opacity: 0 }} // Start with a slight scale down
          whileInView={{ x: 0, opacity: 1, scale: 1 }} // Animate to full size and position
          transition={{ duration: 0.5 }} // Transition duration
          src={heroImg}
          alt="Hero"
          className="w-full h-auto pt-10 md:pt-0 shadow-inherit"
        />
      </div>
    </main>
  );
};

export default Hero;
