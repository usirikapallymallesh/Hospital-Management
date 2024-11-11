import React from 'react';
import { Carousel } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles

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
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Carousel autoplay dots={false} className="w-full max-w-2xl">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center text-white p-6">
              <p className="text-xl italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-bold">{testimonial.author}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;