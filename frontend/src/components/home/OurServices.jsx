import React from "react";
import { TbCheckupList } from "react-icons/tb";
import { FaDna } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="py-10 px-5 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold text-[#159EEC] text-center uppercase work-sans-color mb-2">Care you can believe in</h2>
        <h1 className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular">Our Services</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col space-y-2 md:w-1/3">
          {[
            { icon: <TbCheckupList className="text-4xl" />, label: "Free Checkup" },
            { icon: <TbCheckupList className="text-4xl" />, label: "Cardiogram" },
            { icon: <FaDna className="text-4xl" />, label: "DNA Testing" },
            { icon: <TbCheckupList className="text-4xl" />, label: "Blood Bank" },
          ].map((service, index) => (
            <div key={index} className="flex items-center flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
              {service.icon}
              <p className="text-lg font-semibold mt-2">{service.label}</p>
            </div>
          ))}
          <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-blue-600">
            View All
          </button>
        </div>

        <div className="md:w-2/3 mt-8 md:mt-0 md:pl-10">
          <h3 className="text-xl font-semibold mb-4">A passion for putting patients first.</h3>
          <div>
            <ul className="list-disc pl-5 space-y-2">
              {[
                "100% Satisfaction Guarantee",
                "24/7 Customer Support",
                "High-Quality Medical Equipment",
                "Patient-Centered Care",
                "Five Star Care",
                "Always Caring"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. 
            Convallis felis vitae tortor augue. Velit nascetur proin massa in.
          </p>
        </div>

        <div className="hidden md:flex md:w-1/3 justify-center mt-8 md:mt-0 flex-col">
          <img src="/path/to/image1.jpg" alt="Service Image 1" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/path/to/image2.jpg" alt="Service Image 2" className="w-full h-auto rounded-lg shadow-lg mt-4" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;