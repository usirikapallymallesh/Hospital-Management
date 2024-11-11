import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
        <h3 className="text-lg font-semibold text-blue-600">Welcome to Meddical</h3>
        <h1 className="text-3xl md:text-4xl font-bold my-4">A Great Place to Receive Care</h1>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
          Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <Link 
          to="/book" 
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
        >
          Book an Appointment
        </Link>
      </div>

      <div className="mt-10 flex justify-center">
        <img src="https://imgs.search.brave.com/GpWsvL2IhtPggsMPHLUDhpVCbt7WfpPNkD0sTO9irb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0dHlpbWFn/ZXMuY29tL2Rpc3Bs/YXktc2V0cy9jcmVh/dGl2ZS1sYW5kaW5n/L2Nhcm91c2VsLzg2/ZHRnZjVjMV9IUC1D/YXJvX0dlbi1BSS1Q/cmUtU2hvdC1Nb2Rz/X0Rlc2t0b3Bfc20z/LmpwZw" alt="Healthcare" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>
  );
};

export default WelComeSection;