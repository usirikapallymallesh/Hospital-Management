import React from "react";

const MapCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15175.259368911695!2d77.77024904822407!3d18.033794582449204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcea3d016c7fbd9%3A0xfb114fde631308b5!2sSAI%20SANJEEVANI%20HOSPITAL!5e0!3m2!1sen!2sin!4v1730968754695!5m2!1sen!2sin"
        width="100%"
        height="400" // Adjusted height for better proportion
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-b-lg"
      ></iframe>
      {/* <iframe
        src=""
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default MapCard;
