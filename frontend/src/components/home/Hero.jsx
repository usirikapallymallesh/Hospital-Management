import React from 'react';
import heroImg from '../../assets/images/HomeHero.png';

const Hero = () => {
  return (
    <main className=" flex flex-col md:flex-row items-center justify-between p-8 md:px-24 h-[80vh] md:pt-0">
      <div className=" max-w-full h-full  order-2 flex justify-center items-start flex-col md:order-1 w-[46%]">
        <p className="text-lg font-semibold mb-2 work-sans-color uppercase text-[#159EEC]">Caring for Life</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 yeseva-one-regular">
          Leading the Way in Medical Excellence
        </h1>
        <p className="text-md md:text-lg mb-6 work-sans-color">
          We provide top-notch healthcare services with a commitment to excellence and patient care.
        </p>
        <button className="bg-[#1F2B6C] hover:bg-[#159EEC]  text-white font-semibold py-3 px-10 rounded-sm  transition duration-300">
          Our Services
        </button>
      </div>
      <div className=" md:mt-0 w-[70%]  order-1 md:order-2 h-full flex items-end justify-end">
        <img src={heroImg} alt="Hero" className="w-full h-full  pt-44 shadow-inherit" />
      </div>
    </main>
  );
};

export default Hero;