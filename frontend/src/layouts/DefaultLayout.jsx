import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
