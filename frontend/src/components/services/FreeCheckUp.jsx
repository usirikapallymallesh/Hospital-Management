import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom if you're using it

const FreeCheckUp = () => {
  const checkupData = [
    {
      id: 1,
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Health Screening",
      description: "Comprehensive health screening to ensure your well-being.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Blood Pressure Check",
      description: "Regular blood pressure checks for a healthy heart.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Cholesterol Test",
      description: "Get your cholesterol levels checked for better health.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 5,
      title: "Diabetes Screening",
      description: "Screening for diabetes to maintain your health.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 6,
      title: "Vaccination",
      description: "Stay protected with our vaccination services.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {checkupData.map((checkup) => (
        <div key={checkup.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={checkup.image} alt={checkup.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{checkup.title}</h2>
            <p className="text-gray-600 mb-4">{checkup.description}</p>
            <Link to="#" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FreeCheckUp;