import React from "react";
import { Layout, Button } from "antd";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaCog,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa"; // Importing icons
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const { Sider } = Layout;

const DoctorSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider className="bg-[#1F2B6C] sticky top-0 h-screen w-full md:w-1/5">
      <div className="logo text-white text-2xl p-4 py-6 font-bold text-center">
        <h1
          className="text-white text-2xl yeseva-one-regular uppercase font-semibold cursor-pointer "
          onClick={() => navigate("/")}
        >
          Med<span className="text-[#159EEC]">dical</span>
        </h1>
      </div>
      <section className="flex flex-col text-white px-4 gap-4 text-lg">
        {[
          { to: "/doctor", icon: <FaTachometerAlt />, label: "Dashboard" },
          { to: "/doctor/patients", icon: <FaUser />, label: "Patients" },
          {
            to: "/doctor/appointments",
            icon: <FaCalendarCheck />,
            label: "Appointments",
          },
          { to: "/doctor/settings", icon: <FaCog />, label: "Settings" },
        ].map(({ to, icon, label }) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, x: -20 }} // Initial state for animation
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
            transition={{ duration: 0.3 }} // Transition duration
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-sm transition duration-200 ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          </motion.div>
        ))}
      </section>

      {/* User Icon at the Bottom */}
      <div className="absolute bottom-0 w-full p-4 border-t bg-[#1F2B6C] flex justify-center hover:bg-blue-600 transition-colors duration-300">
        <NavLink to="/doctor/profile" className="flex items-center text-white">
          <FaUserCircle size={30} />
        </NavLink>
      </div>

      {/* Logout Button */}
      <div className="text-white text-sm p-4 text-center mt-auto">
        <Button
          type="primary"
          onClick={() => navigate("/login")}
          className="w-full py-5 text-md rounded-sm"
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default DoctorSidebar;
