import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; // Importing icons

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 py-10 lg:py-16 bg-gray-100">
      {/* Title Section */}
      <div className="md:w-1/2">
        {/* Titles */}
        <div className="mb-6 md:mr-4 md:ml-14">
          <h3 className="text-blue-500 font-semibold text-lg work-sans-color">
            GET IN TOUCH
          </h3>
          <h1 className="text-2xl font-bold text-gray-900 yeseva-one-regular">
            Contact
          </h1>
        </div>
        {/* Form Section */}
        <div className="hover:bg-blue-200 rounded-lg shadow-lg p-8  md:mr-4 md:ml-14 bg-blue-900">
          <form action="">
            <div className="md:w-full mb-4 grid grid-cols-10 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded w-full py-2 px-3"
                required
              />
              {/* </div> */}
              {/* <div className="md:w-1/2 mb-4"> */}
              <input
                type="email"
                placeholder="Email"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-1">
              <textarea
                placeholder="Message"
                className="border rounded w-full py-2 px-3 h-40"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Cards Section */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:mr-12">
        {/* Card 1: Email */}
        <div className=" rounded-sm shadow-lg p-2 flex flex-col justify-center  items-center bg-white hover:bg-blue-900  hover:text-white">
          <FaEnvelope className="text-5xl mb-5" />
          <div>
            <h3 className="font-semibold text-xl work-sans-color uppercase hover:text-white">
              Email
            </h3>
            <p className=" text-sm hover:text-white">contact@healthcare.com</p>
          </div>
        </div>

        {/* Card 2: Location */}
        <div className=" rounded-sm shadow-lg p-2 flex flex-col items-center justify-center bg-white hover:bg-blue-900 hover:text-white">
          <FaMapMarkerAlt className=" text-5xl mr-3 mb-5 " />
          <div>
            <h3 className="font-semibold text-xl work-sans-color uppercase">
              Location
            </h3>
            <p className="text-sm hover:text-white">
              123 Health St, Wellness City
            </p>
          </div>
        </div>

        {/* Card 3: Contact Number */}
        <div className=" rounded-sm shadow-lg p-4 flex items-center flex-col justify-center bg-white hover:bg-blue-900 hover:text-white">
          <FaPhone className="text-5xl mr-3 mb-5" />
          <div>
            <h3 className="font-semibold text-xl work-sans-color uppercase">
              Contact Number
            </h3>
            <p className="text-md hover:text-white">+1 (234) 567 8900</p>
          </div>
        </div>

        {/* Card 4: Working Hours */}
        <div className="rounded-sm shadow-lg p-4 flex items-center justify-center hover:bg-blue-900 flex-col bg-white hover:text-white ">
          <FaClock className="text-5xl mr-3 mb-5 " />
          <div>
            <h3 className="font-semibold text-xl work-sans-color uppercase hover:text-white">
              Working Hours
            </h3>
            <p className="text-md hover:text-white">Mon-Fri: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
