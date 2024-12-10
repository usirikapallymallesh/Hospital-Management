import React from "react";
import { Carousel } from "antd";
import BgImg from "../../assets/images/DoctorPageBg1.png";
import { motion } from "framer-motion"; // Import Framer Motion

const Testimonial = () => {
  const testimonials = [
    {
      text: "This service is amazing! It has changed my life for the better.",
      author: "John Doe",
    },
    {
      text: "I can't believe how easy it is to use. Highly recommend!",
      author: "Jane Smith",
    },
    {
      text: "The customer support is outstanding. They really care about their clients.",
      author: "Alice Johnson",
    },
    {
      text: "A fantastic experience from start to finish. Will definitely use again!",
      author: "Bob Brown",
    },
  ];

  return (
    <div className="relative h-64 md:h-96">
      {/* Background Image */}
      <img
        src={BgImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-blue-900 opacity-40"></div>

      {/* Carousel Section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Carousel autoplay dots={false} className="w-full max-w-2xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center text-white p-6"
              initial={{ opacity: 0, scale: 0.9 }} // Initial state for animation
              whileInView={{ opacity: 1, scale: 1 }} // Animate to this state
              transition={{ duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <p className="text-xl italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-bold">{testimonial.author}</h4>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
