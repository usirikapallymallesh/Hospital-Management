import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import MapCard from "../../components/contact/MapCard";
import News from "../../components/home/News"; // Ensure this is needed
import ContactForm from "../../components/contact/ContactForm";
import contactPageBg from "../../assets/images/contactPageBg.jpeg";

const Contact = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="Contact Us"
          path="Home / Contact"
          ImgUrl={contactPageBg} // Ensure this image exists
        />
        <MapCard /> {/* Ensure this component works as expected */}
        <ContactForm /> {/* Validate props if necessary */}
        <News /> {/* Check if News is required here */}
      </section>
    </DefaultLayout>
  );
};

export default Contact;
