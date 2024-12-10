import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HomeBg from "../../assets/images/homeBg.png";
import { motion } from "framer-motion";

const WelComeSection = () => {
  return (
    <div className="relative bg-gray-100 py-10 px-5 md:px-10 lg:px-20">
      {/* Action Buttons */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 md:gap-10 w-full justify-center text-xl">
        <motion.div
          className="flex items-center bg-[#1F2B6C] text-white p-4 md:p-8 px-6 md:px-12 rounded-sm shadow-md hover:bg-[#159eec] hover:text-white"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <IoCalendarNumberSharp className="mr-2 text-2xl md:text-3xl" />
          <p>Book an Appointment</p>
        </motion.div>

        <motion.div
          className="flex items-center bg-[#BFD2F8] p-4 md:p-8 px-6 md:px-12 rounded-sm shadow-md text-black hover:bg-[#1F2B6C] hover:text-white"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <IoCalendarNumberSharp className="mr-2 text-2xl md:text-3xl" />
          <p>Check Availability</p>
        </motion.div>

        <motion.div
          className="flex items-center bg-[#159EEC] text-white p-4 md:p-8 px-6 md:px-12 rounded-sm shadow-md hover:bg-[#1F2B6C] hover:text-white"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaMoneyBillTrendUp className="mr-2 text-2xl md:text-3xl" />
          <p>Payment Options</p>
        </motion.div>
      </div>

      {/* Welcome Text */}
      <div className="text-center mt-20">
        <motion.h3
          className="text-lg font-semibold text-[#159EEC] uppercase work-sans-color mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Welcome to Meddical
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A Great Place to Receive Care
        </motion.h1>

        <motion.p
          className="text-md md:text-lg mb-6 work-sans-color max-w-xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </motion.p>

        <Link
          to="/book"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
        >
          Learn More
        </Link>
      </div>

      {/* Background Image */}
      <div className="mt-16 flex justify-center">
        <motion.img
          src={HomeBg}
          alt="Healthcare"
          className="rounded-sm w-full max-w-[1020px] h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default WelComeSection;
