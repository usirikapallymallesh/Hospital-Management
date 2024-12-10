import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuClock5 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-2 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.h1
          className="text-blue-900 text-xl md:text-2xl lg:text-3xl yeseva-one-regular uppercase font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Med<span className="text-[#159EEC]">dical</span>
        </motion.h1>
        <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 work-sans-color">
          <motion.div
            className="flex items-center text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiPhoneCall className="text-xl md:text-2xl mr-2" />
            <div>
              <span className="font-medium text-sm md:text-base">
                Emergency
              </span>
              <span className="block text-[#159EEC] font-medium text-sm md:text-base">
                +91 7093000795
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LuClock5 className="text-xl md:text-2xl mr-1" />
            <div>
              <span className="font-medium text-sm md:text-base">
                Work Hour
              </span>
              <span className="block text-[#159EEC] text-sm md:text-base">
                09:00 - 20:00 Everyday
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IoLocationOutline className="text-xl md:text-2xl mr-1" />
            <div>
              <span className="font-medium text-sm md:text-base">Location</span>
              <span className="block text-[#159EEC] text-sm md:text-base">
                New York, USA
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1F2B6C] py-3 px-4 md:px-8 lg:px-12 work-sans-color">
        <div className="container mx-auto flex items-center justify-between px-4">
          <ol className="flex space-x-4 md:space-x-6">
            <li>
              <NavLink
                to={`/`}
                className="text-white hover:text-[#159EEC] transition duration-300 text-sm md:text-base"
              >
                Home
              </NavLink>{" "}
            </li>

            {["About Us", "Services", "Doctors", "News", "Contact"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-[#159EEC] transition duration-300 text-sm md:text-base"
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ol>

          {/* Search and Appointment Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-1.5 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <IoIosSearch className="absolute left-3 top-[50%] transform -translate-y-[50%] text-gray-400" />
            </motion.div>
            {["Book Appointment", "Login", "Register"].map((action) => (
              <NavLink
                key={action}
                to={`/${action.toLowerCase().replace(" ", "-")}`}
                className={`${
                  action === "Book Appointment"
                    ? "bg-blue-600"
                    : "border border-blue-600 text-blue-600"
                } text-white px-3 py-1.5 rounded-sm hover:bg-[#159EEC] hover:text-white transition duration=300 text-sm md:text-base`}
              >
                {action}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
