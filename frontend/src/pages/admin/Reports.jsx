import React from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Reports = () => {
  // Sample data for complaints including "Problem" and "Doctor Name" fields
  const complaintData = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2024-12-01",
      doctorName: "Dr. Smith",
      problem: "Delayed response from staff",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2024-12-02",
      doctorName: "Dr. Johnson",
      problem: "Room cleanliness issue",
    },
    {
      id: 3,
      patientName: "Alice Johnson",
      date: "2024-12-03",
      doctorName: "Dr. Lee",
      problem: "Medication error",
    },
    // Add more complaint entries as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-row">
        <AdminSidebar />
        <div className="flex-grow p-6">
          <h2 className="text-2xl font-semibold mb-4">Patient Complaints</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="py-2 px-4 border-b">Complaint ID</th>
                  <th className="py-2 px-4 border-b">Patient Name</th>
                  <th className="py-2 px-4 border-b">Date of Complaint</th>
                  <th className="py-2 px-4 border-b">Doctor Name</th>
                  <th className="py-2 px-4 border-b">Problem</th>
                </tr>
              </thead>
              <tbody>
                {complaintData.map((complaint) => (
                  <tr key={complaint.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{complaint.id}</td>
                    <td className="py-2 px-4 border-b">
                      {complaint.patientName}
                    </td>
                    <td className="py-2 px-4 border-b">{complaint.date}</td>
                    <td className="py-2 px-4 border-b">
                      {complaint.doctorName}
                    </td>
                    <td className="py-2 px-4 border-b">{complaint.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
