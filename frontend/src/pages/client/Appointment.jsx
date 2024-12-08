import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import BookAppointment from "../../components/appointment/BookAppointment";
import MapCard from "../../components/contact/MapCard";
import Contact from "../../components/home/Contact";

const Appointment = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="Book An Appointment"
          path="Home / Appointment"
          ImgUrl="https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-740x492-1744915333.jpg"
        />
        <BookAppointment />
        <MapCard />
      </section>
      <Contact />
    </DefaultLayout>
  );
};

export default Appointment;
