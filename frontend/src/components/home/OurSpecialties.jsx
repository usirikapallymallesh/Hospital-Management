import React from 'react';
import { FaBrain, FaBone, FaEye, FaHeart, FaLungs, FaUserMd, FaFemale } from 'react-icons/fa';
import { GiCancer ,GiKidneys  } from 'react-icons/gi'; // Correct icon for Gastroenterology
import { FaEarDeaf } from "react-icons/fa6";

const OurSpecialties = () => {
  return (
    <div className="py-16 px-5 md:px-16 lg:px-24 bg-gray-50 ">
      <div className="text-center mb-10">
        <h3 className="text-lg font-semibold  text-[#159EEC] text-center uppercase work-sans-color mb-2">Always Caring</h3>
        <h1 className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular">Our Specialties</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { icon: <FaBrain className="text-5xl" />, title: 'Neurology' },
          { icon: <FaBone className="text-5xl" />, title: 'Orthopedics' },
          { icon: <GiCancer className="text-5xl" />, title: 'Oncology' },
          { icon: <FaEarDeaf className="text-5xl" />, title: 'Otorhinolaryngology' },
          { icon: <FaEye className="text-5xl" />, title: 'Ophthalmology' },
          { icon: <FaHeart className="text-5xl" />, title: 'Cardiovascular' },
          { icon: <FaLungs className="text-5xl" />, title: 'Pulmonology' },
          { icon: <GiKidneys className="text-5xl" />, title: 'Renal Medicine' },
          { icon:<GiKidneys className="text-5xl" />, title: 'Gastroenterology' }, // Corrected icon
          { icon: <FaUserMd className="text-5xl" />, title: 'Urology' },
          { icon: <FaUserMd className="text-5xl" />, title: 'Urology' },
          { icon: <FaFemale className="text-5xl" />, title: 'Gynaecology' },
        ].map((specialty, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-white shadow-md rounded-sm  p-6 py-12 transition-transform transform duration-500 delay-100 hover:bg-[#1F2B6C] hover:text-white hover:scale-105"
          >
            {specialty.icon}
            <h4 className="text-lg font-semibold mt-2 ">{specialty.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSpecialties;