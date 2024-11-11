import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/home/Hero";
import WelComeSection from "../../components/home/WelComeSection";
import OurServices from "../../components/home/OurServices";
import OurSpecialties from "../../components/home/OurSpecialties";
import BookAppointment from "../../components/home/BookAppointment";
import OurDoctors from "../../components/home/OurDoctors";
import News from "../../components/home/News";
import Contact from "../../components/home/Contact";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Hero />
      <WelComeSection />
      <OurServices />
      <OurSpecialties />
      <BookAppointment />
      <OurDoctors />
      <News />
      <Contact />
    </DefaultLayout>
  );
};

export default HomePage;
