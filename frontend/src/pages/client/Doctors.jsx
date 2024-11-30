import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import OurDoctors from "../../components/home/OurDoctors";
import News from "../../components/home/News";
import Contact from "../../components/home/Contact";
import Testimonial from "../../components/about/Testimonial";
import doctorsPageBg from "../../assets/images/allBg4.jpg"

const Doctors = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="Doctors"
          path="Home / Doctors"
          ImgUrl={doctorsPageBg}
        />
        <OurDoctors />
        <Testimonial />
        <News />
        <Contact />
      </section>
    </DefaultLayout>
  );
};

export default Doctors;
