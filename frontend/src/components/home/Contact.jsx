import React from "react";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-4xl " />,
      title: "Phone",
      description: "+1 (234) 567-8900",
      description1: "+1 (234) 567-8900",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl " />,
      title: "Emergency Location",
      description: "123 Health St, Wellness City, HC 12345",
      description1: "+1 (234) 567-8900",
    },

    {
      icon: <FaEnvelope className="text-4xl" />,
      title: "Email",
      description: "contact@healthcare.com",
      description1: "+1 (234) 567-8900",
    },
    {
      icon: <FaClock className="text-4xl " />,
      title: "Work Hours",
      description: "Mon-Fri: 9 AM - 5 PM",
      description1: "+1 (234) 567-8900",
    },
  ];

  return (
    <div className="py-10 px-5 md:px-10 lg:px-24 bg-gray-50">
      <h2 className="text-lg font-bold text-[#159EEC] text-center uppercase work-sans-color mb-2">
        Get in touch
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1F2B6C] yeseva-one-regular">
        Contact
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 work-sans-color work-sans-color">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-sm shadow-md p-10 flex flex-col items-center text-center transition-all ease-in-out delay-0 duration-500 hover:bg-[#1F2B6C] hover:text-white"
          >
            {info.icon}
            <h4 className="text-lg font-semibold mt-4 uppercase">
              {info.title}
            </h4>
            <p className=" mt-2">{info.description}</p>
            <p className=" mt-2">{info.description1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
