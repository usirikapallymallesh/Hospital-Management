import React, { useRef } from "react";
import { Carousel } from "antd";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons for navigation
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { useNavigate } from "react-router-dom";

const OurDoctors = () => {
  const carouselRef = useRef(null); // Create a reference for the carousel
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Neurologist",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Alex Johnson",
      specialty: "Pediatrician",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Emily White",
      specialty: "Dermatologist",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      image: "https://via.placeholder.com/150",
    },
  ];

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <section className="py-10 px-5 md:px-10 lg:px-20 bg-gray-50">
      <h3 className="text-lg font-semibold text-[#159EEC] text-center uppercase work-sans-color mb-2">
        Trusted Care
      </h3>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2B6C] yeseva-one-regular">
        Our Doctors
      </h1>

      <Carousel ref={carouselRef} dots={false} autoplay autoplaySpeed={3000}>
        {" "}
        {/* 3000 ms delay */}
        {doctors.map((doctor, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex gap-10 justify-center">
              {/* Display three doctors per slide */}
              {doctors.slice(index, index + 3).map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-4 text-center"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-72 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p className="text-gray-600 py-1">{doc.specialty}</p>
                  {/* Social Media Icons */}
                  <div className="flex justify-center mt-2 text-2xl">
                    <a href="#" className="mx-2 text-blue-600">
                      <FaFacebook />
                    </a>
                    <a href="#" className="mx-2 text-pink-600">
                      <FaInstagram />
                    </a>
                    <a href="#" className="mx-2 text-blue-700">
                      <FaLinkedin />
                    </a>
                  </div>
                  {/* View Profile Button */}
                  <button className="mt-4 p-2 w-full rounded-b-md bg-[#1F2B6C]  text-white hover:bg-[#1F009E] "  onClick={()=>{navigate(`/doctor/${doc.name}`)}}>
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prev}
          className="mr-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default OurDoctors;
