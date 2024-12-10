import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { FaUser } from "react-icons/fa";
import DoctorSidebar from "../../components/doctor/DoctorSidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DoctorHeader from "../../components/doctor/DoctorHeader";

// Registering the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Dashboard = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.role);

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Patients Registered",
        data: [30, 50, 70, 40, 60, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Appointments",
        data: [5, 10, 15, 20],
        fill: false,
        backgroundColor: "rgba(153, 102, 255, 1)",
        borderColor: "rgba(153, 102, 255, 1)",
      },
    ],
  };

  const handlePatientClick = (patient) => {
    alert(`Showing details for ${patient}`);
    // Implement logic to show more detailed information about the patient
  };

  // Sample upcoming patients data
  const upcomingPatients = [
    { name: "John Doe", time: "2024-11-14T10:00:00" },
    { name: "Jane Smith", time: "2024-11-14T11:30:00" },
    { name: "Alice Johnson", time: "2024-11-14T14:00:00" },
    { name: "Michael Brown", time: "2024-11-15T09:00:00" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto ">
        <DoctorHeader />
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Dashboard Overview
        </h1>
        <p className="text-gray-700 mb-6">
          Manage your patients and appointments effectively.
        </p>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 px-4">
          {/* Bar Chart */}
          <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">Patients Registered</h3>
            <Bar data={barData} options={{ responsive: true }} />
          </div>

          {/* Line Chart */}
          <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">
              Appointments Over Weeks
            </h3>
            <Line data={lineData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Upcoming Patients Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
            Upcoming Patients
          </h1>
          <ul className="space-y-4">
            {upcomingPatients.map((patient) => (
              <li
                key={patient.name}
                onClick={() => handlePatientClick(patient.name)}
                className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition-colors duration-300"
              >
                <FaUser className="text-blue-500 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    {patient.name}
                  </h2>
                  <p className="text-gray-600">
                    Appointment Time: {new Date(patient.time).toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
