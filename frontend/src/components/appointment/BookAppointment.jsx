import React from 'react';
import { FaPhone, FaClock } from 'react-icons/fa'; // Importing icons for emergency contact and schedule

const BookAppointment = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Book an Appointment</h1>
      <p className="mb-6 text-gray-600 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Form Section */}
        <form action="" className="space-y-4 md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required 
          />
          
          <select 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input 
            type="email" 
            placeholder="Your Email" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required 
          />

          <input 
            type="tel" 
            placeholder="Your Phone Number" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required 
          />

          <input 
            type="date" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required 
          />

          <input 
            type="time" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" 
            required 
          />

          <select 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"  
            required
          >
            <option value="">Select your preferred service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>

          <select 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"  
            required
          >
            <option value="">Select Department</option>
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
          </select>

          <textarea 
            placeholder='Message' 
            className="border rounded w-full py-2 px-3 h-24 resize-none focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>

          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Schedule Information */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold mb-4">Schedule Hours</h1>
          <div className="space-y-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(day => (
              <p key={day} className="flex justify-between">
                {day} - 09:00 AM - 07:00 PM
              </p>
            ))}
            
            {["Saturday", "Sunday"].map(day => (
              <p key={day} className="flex justify-between text-gray-500">
                {day} - Closed
              </p>
            ))}
            
            <hr className="my-4"/>
            
            {/* Emergency Contact */}
            <div className="flex items-center">
              <FaPhone className="text-red-500 text-xl mr-2" />
              <div>
                <p className="font-semibold">Emergency Contact</p>
                <p>+1 (234) 567 - 8900</p>
              </div>
              <FaClock className="text-gray-500 text-xl ml-auto"/>
              {/* Optional clock icon can be placed here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;