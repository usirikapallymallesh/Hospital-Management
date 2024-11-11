import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuClock5 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4  px-8 pl-[1rem]">
        {/* <img src="" alt="logo" className="h-12 border" /> */}
        <h1 className="text-blue-900 text-2xl yeseva-one-regular uppercase font-semibold">
          Med<span className="text-[#159EEC]">dical</span>
        </h1>
        <div className="flex space-x-8 mt-4 md:mt-0 work-sans-color">
          <div className="flex items-center text-gray-600">
            <FiPhoneCall className="text-3xl mr-2" />
            <div>
              <span className="font-medium">Emergency</span>
              <span className="block text-[#159EEC] font-medium">
                +91 7093000795
              </span>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <LuClock5 className="text-3xl mr-1 " />
            <div>
              <span className="font-medium">Work Hour</span>
              <span className="block text-[#159EEC]">
                09:00 - 20:00 Everyday
              </span>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <IoLocationOutline className="text-3xl mr-1" />
            <div>
              <span className="font-medium">Location</span>
              <span className="block text-[#159EEC]">New York, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1F2B6C] py-3 px-16 work-sans-color">
        <div className="container mx-auto flex items-center justify-between px-4">
          <ol className="flex space-x-6">
            <li>
              <NavLink
                to={"/"}
                className="text-white hover:text-[#159EEC] transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about-us"}
                className="text-white round hover:text-[#159EEC] transition duration-300"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className="text-white hover:text-[#159EEC] transition duration-300"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/doctors"}
                className="text-white hover:text-[#159EEC] transition duration-300"
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/news"}
                className="text-white hover:text-[#159EEC] transition duration-300"
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-white hover:text-[#159EEC] transition duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ol>

          {/* Search and Appointment Buttons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <IoIosSearch className="absolute left-3 top-[50%] transform -translate-y-[50%] text-gray-400" />
            </div>
            <NavLink
              to={"/appointment"}
              className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-[#159EEC] transition duration-300"
            >
              Book Appointment
            </NavLink>
            <NavLink
              to={"/login"}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-sm hover:bg-[#159EEC] hover:text-white transition duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-sm hover:bg-[#159EEC] hover:text-white transition duration=300"
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
