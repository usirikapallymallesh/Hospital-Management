import React from "react";
import { Layout, Input, Button } from "antd";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  return (
    <div className="bg-[#1F2B6C] text-white py-16 px-5 md:px-10 lg:px-24">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-7 gap-8 work-sans-color"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-medium mb-3 uppercase yeseva-one-regular">
              Meddical
            </h1>
            <p className="text-gray-300">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Important Links</h3>
            <ul>
              {["Appointment", "Doctors", "Services", "About Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Call: +91 703000795</p>
            <p>Email: malleshMedical@gmail.com</p>
            <p>
              Address: Gachibowli - Miyapur Rd, opp. SBI Bank Road, Rahmat
              Gulshan Colony, P Janardhan Reddy Nagar, Gachibowli, Hyderabad,
              Telangana 500032
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 px-6">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <motion.div
              className="flex border border-gray-400 rounded-lg overflow-hidden shadow-sm transition-transform transform"
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              transition={{ duration: 0.3 }}
            >
              <input
                placeholder="Enter your email"
                className="rounded-l-sm text-black border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-2"
              />
              <button className="bg-white text-black text-lg transition duration-300 rounded-r-lg px-4 hover:bg-blue-700 flex items-center justify-center">
                <BsFillSendFill />
              </button>
            </motion.div>
          </div>
        </motion.div>

        <hr className="my-4 border-white" />

        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            &copy; 2024 Mallesh Hospital. All Rights Reserved by Mallesh
            roommates.
          </p>

          <div className="flex space-x-4">
            {/* Icons for social media links */}
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaLinkedinIn />, label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-gray-400 hover:text-[#BFD2F8] transition duration-300 text-2xl"
                whileHover={{ scale: 1.2 }} // Scale effect on hover
                transition={{ duration: 0.3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
