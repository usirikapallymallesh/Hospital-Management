import React from "react";
import { Layout, Input, Button } from "antd";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; //
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#1F2B6C] text-white py-16 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 work-sans-color">
          <div className="col-span-1 md:col-span-2 ">
            <h1 className="text-3xl font-medium mb-3 uppercase  yeseva-one-regular">
              Meddical
            </h1>
            <p className="text-gray-300 ">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Important Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Call: +91 703000795</p>
            <p>Email: malleshMedical@gmail.com</p>
            <p>Address:  Gachibowli - Miyapur Rd, opp. SBI Bank Road, Rahmat Gulshan Colony, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032</p>
          </div>
          <div className="col-span-1 md:col-span-2 px-6">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="flex border border-gray-400 rounded-lg overflow-hidden shadow-sm transition-transform transform ">
              <input
                placeholder="Enter your email"
                className="rounded-l-sm text-black border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-2"
              />
              <button className="bg-white text-black text-lg transition duration-300 rounded-r-lg px-4 hover:bg-blue-700 flex items-center justify-center">
                <BsFillSendFill />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4 border-white " />
        <div className="flex justify-between items-center">
          <p>
            &copy; 2024 Mallesh Hospital. All Rights Reserved by Mallesh roommates.
          </p>
          <div className="flex space-x-4">
            {/* Icons for social media links */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-[#BFD2F8] transition duration-300 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#BFD2F8] transition duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#BFD2F8] transition duration-300 text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
