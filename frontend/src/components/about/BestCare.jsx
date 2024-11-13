import React from 'react';

const BestCare = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-12 lg:px-10 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src="https://img.freepik.com/premium-photo/pharmaceutical-sales-representative-talking-with-doctor-medical-building_328432-11197.jpg" 
          alt="Hospital" 
          className="rounded-sm shadow-lg w-full" 
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 text-center md:text-left max-w-2xl px-4">
        <p className="text-lg text-blue-600 font-semibold work-sans-color">Welcome to Hospital Name</p>
        <h1 className="text-3xl md:text-5xl font-bold my-4 yeseva-one-regular">Best Care for Your Good Health</h1>
        <div className="p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {/* Left Column */}
          <div className="space-y-2 text-left">
            {[
              "A Passion for Healing",
              "5-Star Care",
              "All Our Best"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2 text-left">
            {[
              "Believe in Us",
              "Always Caring",
              "A Legacy of Excellence"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
          Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. 
          Convallis felis vitae tortor augue. Velit nascetur proin massa in.
        </p>
      </div>
    </div>
  );
}

export default BestCare;