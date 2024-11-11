import React from 'react';

const BestCare = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10">
      {/* Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src="https://via.placeholder.com/600x400" 
          alt="Hospital" 
          className="rounded-lg shadow-lg w-full h-auto" 
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 text-center md:text-left max-w-2xl px-4">
        <p className="text-lg text-blue-600 font-semibold">Welcome to Hospital Name</p>
        <h1 className="text-3xl md:text-5xl font-bold my-4">Best Care for Your Good Health</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>A Passion for Healing</li>
            <li>5-Star Care</li>
            <li>All Our Best</li>
            <li>Believe in Us</li>
            <li>Always Caring</li>
            <li>A Legacy of Excellence</li>
          </ul>
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