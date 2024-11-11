import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'; // Importing icons

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      {/* Form Section */}
      <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 mb-6 md:mr-4">
        <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <form action="">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder='Name' 
              className="border rounded w-full py-2 px-3" 
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder='Email' 
              className="border rounded w-full py-2 px-3" 
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder='Subject' 
              className="border rounded w-full py-2 px-3" 
              required 
            />
          </div>
          <div className="mb-4">
            <textarea 
              placeholder='Message' 
              className="border rounded w-full py-2 px-3" 
              rows="4" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Cards Section */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Email */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaEnvelope className="text-blue-500 text-3xl mr-3" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">contact@healthcare.com</p>
          </div>
        </div>

        {/* Card 2: Location */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 text-3xl mr-3" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">123 Health St, Wellness City</p>
          </div>
        </div>

        {/* Card 3: Contact Number */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaPhone className="text-blue-500 text-3xl mr-3" />
          <div>
            <h3 className="font-semibold">Contact Number</h3>
            <p className="text-gray-600">+1 (234) 567 8900</p>
          </div>
        </div>

        {/* Card 4: Working Hours */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaClock className="text-blue-500 text-3xl mr-3" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-gray-600">Mon-Fri: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;