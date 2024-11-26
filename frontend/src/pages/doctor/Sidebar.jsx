import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaCog,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa"; // Importing icons

const Sidebar = () => {
  return (
    <aside className=" bg-white shadow-md h-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-blue-600">Doctor's Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="hover:bg-gray-200">
            <a
              href="/doctor/dashboard"
              className="flex items-center py-2 px-4 text-gray-700"
            >
              <FaTachometerAlt className="mr-3" /> {/* Dashboard Icon */}
              Dashboard
            </a>
          </li>
          <li className="hover:bg-gray-200">
            <a
              href="/doctor/patients"
              className="flex items-center py-2 px-4 text-gray-700"
            >
              <FaUser className="mr-3" /> {/* Patients Icon */}
              Patients
            </a>
          </li>
          <li className="hover:bg-gray-200">
            <a
              href="/doctor/appointments"
              className="flex items-center py-2 px-4 text-gray-700"
            >
              <FaCalendarCheck className="mr-3" /> {/* Appointments Icon */}
              Appointments
            </a>
          </li>
          <li className="hover:bg-gray-200">
            <a
              href="/doctor/settings"
              className="flex items-center py-2 px-4 text-gray-700"
            >
              <FaCog className="mr-3" /> {/* Settings Icon */}
              Settings
            </a>
          </li>
          <li className="hover:bg-gray-200">
            <a
              href="/doctor/reports"
              className="flex items-center py-2 px-4 text-gray-700"
            >
              <FaFileAlt className="mr-3" /> {/* Reports Icon */}
              Reports
            </a>
          </li>
        </ul>
      </nav>

      {/* User Icon at the Bottom
      <div className="absolute bottom-0 w-full p-4 border-t bg-white flex justify-center hover:bg-gray-200 transition-colors duration-300">
        <a href="/doctor/profile" className="flex items-center text-gray-700">
          <FaUserCircle size={30} />
        </a>
      </div> */}
    </aside>
  );
};

export default Sidebar;
