import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HomeBg from "../../assets/images/homeBg.png";

const WelComeSection = () => {
  return (
    <div className="relative bg-gray-100 py-10 px-5 md:px-10 lg:px-20">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 w-full justify-center text-xl">
        <div className="flex items-center bg-[#1F2B6C] text-white p-12 px-24 rounded-sm shadow-md hover:bg-[#159eec] hover:text-white">
          <IoCalendarNumberSharp className="mr-4 text-3xl" />
          <p>Book an Appointment</p>
        </div>
        <div className="flex items-center bg-[#BFD2F8]  p-8 rounded-sm  px-24 shadow-md text-black hover:bg-[#1F2B6C] hover:text-white">
          <IoCalendarNumberSharp className="mr-4 text-3xl" />
          <p>Check Availability</p>
        </div>
        <div className="flex items-center bg-[#159EEC] text-white p-8 px-24 rounded-sm shadow-md hover:bg-[#1F2B6C] hover:text-white">
          <FaMoneyBillTrendUp className="mr-4 text-3xl" />
          <p>Payment Options</p>
        </div>
      </div>

      <div className="text-center mt-20">
        <h3 className="text-lg font-semibold text-[#159EEC] text-center uppercase work-sans-color mb-2">
          Welcome to Meddical
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular">
          A Great Place to Receive Care
        </h1>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <Link
          to="/book"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-16 flex justify-center">
        <img
          src={HomeBg}
          alt="Healthcare"
          className="rounded-sm  w-[1020px] h-auto"
        />
      </div>
    </div>
  );
};

export default WelComeSection;
