import React from "react";
import {
  FaBrain,
  FaBone,
  FaEye,
  FaHeart,
  FaLungs,
  FaUserMd,
  FaFemale,
} from "react-icons/fa";
import { GiCancer, GiKidneys } from "react-icons/gi"; // Correct icon for Gastroenterology
import { FaEarDeaf } from "react-icons/fa6";
import { motion } from "framer-motion";

const OurSpecialties = () => {
  return (
    <div className="py-16 px-5 md:px-16 lg:px-24 bg-gray-50">
      <div className="text-center mb-10">
        <motion.h3
          className="text-lg font-semibold text-[#159EEC] uppercase work-sans-color mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Always Caring
        </motion.h3>
        <motion.h1
          className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Specialties
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { icon: <FaBrain className="text-5xl" />, title: "Neurology" },
          { icon: <FaBone className="text-5xl" />, title: "Orthopedics" },
          { icon: <GiCancer className="text-5xl" />, title: "Oncology" },
          {
            icon: <FaEarDeaf className="text-5xl" />,
            title: "Otorhinolaryngology",
          },
          { icon: <FaEye className="text-5xl" />, title: "Ophthalmology" },
          { icon: <FaHeart className="text-5xl" />, title: "Cardiovascular" },
          { icon: <FaLungs className="text-5xl" />, title: "Pulmonology" },
          { icon: <GiKidneys className="text-5xl" />, title: "Renal Medicine" },
          {
            icon: <GiKidneys className="text-5xl" />,
            title: "Gastroenterology",
          }, // Corrected icon
          { icon: <FaUserMd className="text-5xl" />, title: "Urology" },
          { icon: <FaUserMd className="text-5xl" />, title: "Urology" },
          { icon: <FaFemale className="text-5xl" />, title: "Gynaecology" },
        ].map((specialty, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-sm p-6 py-12 transition-transform transform duration-500 hover:bg-[#1F2B6C] hover:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
          >
            {specialty.icon}
            <h4 className="text-lg font-semibold mt-2">{specialty.title}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialties;
