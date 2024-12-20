import React from "react";
import { TbCheckupList } from "react-icons/tb";
import { FaDna } from "react-icons/fa";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <section className="py-10 px-5 md:px-10 lg:px-40 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-lg font-semibold text-[#159EEC] uppercase mb-2 work-sans-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Care you can believe in
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-4xl font-bold my-4 text-[#1F2B6C] yeseva-one-regular"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Services
        </motion.h1>
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        <motion.div
          className="flex flex-col space-y-4 md:w-1/6 bg-white p-4 rounded-md shadow-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            {
              icon: <TbCheckupList className="text-4xl" />,
              label: "Free Checkup",
            },
            {
              icon: <TbCheckupList className="text-4xl" />,
              label: "Cardiogram",
            },
            { icon: <FaDna className="text-4xl" />, label: "DNA Testing" },
            {
              icon: <TbCheckupList className="text-4xl" />,
              label: "Blood Bank",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center flex-col shadow-md p-4 transition-transform transform hover:scale-105 hover:bg-[#1F2B6C] hover:text-white"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <p className="text-lg font-normal mt-3">{service.label}</p>
            </motion.div>
          ))}

          <motion.button
            className="mt-4 bg-[#1F2B6C] text-white font-semibold py-2 px-4 rounded-sm shadow-md transition duration-300 hover:bg-blue-600"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            View All
          </motion.button>
        </motion.div>

        {/* Description Section */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:pl-10 px-4">
          <h3 className="text-2xl font-semibold mb-4 py-4">
            A passion for putting patients first.
          </h3>

          {/* Table for Services and Features */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Feature</th>
                <th className="py-2 px-4 border-b text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                "100% Satisfaction Guarantee",
                "24/7 Customer Support",
                "High-Quality Medical Equipment",
                "Patient-Centered Care",
                "Five Star Care",
              ].map((feature, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b flex items-center">
                    {/* Blue dot before each feature */}
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </td>
                  <td className="py-2 px-4 border-b">Available</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Description Paragraphs */}
          <p className="text-gray-700 mb-4 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/3 justify-center mt-8 md:mt-0 flex-col">
          {/* Consider using different images to enhance the visual appeal */}
          <motion.img
            src="https://img.freepik.com/premium-photo/female-doctor-with-clients-insurance-agency_392895-134607.jpg"
            alt="Service Image 1"
            className="w-full rounded-lg shadow-lg h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.img
            src="https://beginningstreatment.com/wp-content/uploads/2016/08/Beginnings-Treatment-Centers-Detox-Program-Doctor-with-client-44407544.jpg"
            alt="Service Image 2"
            className="w-full rounded-lg shadow-lg mt-4 h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
