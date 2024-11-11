import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import Contact from "../../components/home/Contact";
import FreeCheckUp from "../../components/services/FreeCheckUp";
import bgImage from "../../assets/images/allBg6.jpg";
const Services = () => {
  return (
    <DefaultLayout>
      <AllPagesHero
        title="Our Services"
        path="Home / Services"
        ImgUrl={bgImage} 
      />
      <FreeCheckUp />
      <Contact />
    </DefaultLayout>
  );
};

export default Services;
