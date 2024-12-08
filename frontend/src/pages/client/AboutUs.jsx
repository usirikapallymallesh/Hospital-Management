import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import BestCare from "../../components/about/BestCare";
import Testimonial from "../../components/about/Testimonial";
import OurDoctors from "../../components/home/OurDoctors";
import News from "../../components/home/News";
import Contact from "../../components/home/Contact";
import bgImage from "../../assets/images/allBg3.jpg";
const AboutUs = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero title="About Us" path="Home / About" ImgUrl={bgImage} />
        <BestCare />
        <Testimonial />
        <OurDoctors />
        <News />
        <Contact />
      </section>
    </DefaultLayout>
  );
};

export default AboutUs;
