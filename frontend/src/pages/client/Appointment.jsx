import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import BookAppointment from "../../components/appointment/BookAppointment";
import MapCard from "../../components/contact/MapCard";
import Contact from "../../components/home/Contact";
import BgImg from "../../assets/images/doctors.png";
const Appointment = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="Book An Appointment"
          path="Home / Appointment"
          ImgUrl={BgImg}
        />
        <BookAppointment />
        <MapCard />
      </section>
      <Contact />
    </DefaultLayout>
  );
};

export default Appointment;
