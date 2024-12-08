import React, { useState } from "react";
import { Button, Table, Select } from "antd";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
const { Option } = Select;

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      name: "Dr. Smith",
      specialization: "Cardiology",
      description: "Heart specialist",
      contact: "123-456-7890",
      email: "smith@example.com",
      activeHours: "9 AM - 5 PM",
      status: "Active",
    },
    {
      id: "2",
      name: "Dr. Jones",
      specialization: "Neurology",
      description: "Brain specialist",
      contact: "987-654-3210",
      email: "jones@example.com",
      activeHours: "10 AM - 6 PM",
      status: "Inactive",
    },
    // Add more sample doctors as needed
  ]);

  const navigate = useNavigate(); // Initialize navigate for navigation

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Active Hours",
      dataIndex: "activeHours",
      key: "activeHours",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Select
          defaultValue={text}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record.id)}
        >
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
          <Option value="On Leave">On Leave</Option>
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => editDoctor(record)}>
          Edit
        </Button>
      ),
    },
  ];

  const handleStatusChange = (value, id) => {
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === id ? { ...doctor, status: value } : doctor
      )
    );
  };

  const editDoctor = (doctor) => {
    // Redirect to EditDoctor page with doctor's ID as a parameter
    navigate(`/admin/edit-doctor/${doctor.name}`);
  };

  const handleAddNewDoctor = () => {
    navigate("/admin/add-doctor"); // Redirect to the add new doctor page
  };

  return (
    <div className=" flex  h-screen bg-gray-50 ">
      <AdminSidebar />
      <div className="flex-grow ">
        <section className=" w-[80vw] border-blue-900 h-10 px-0 mb-6">
          <AdminHeader />
        </section>
        <section className="p-8 ">
          <section className="flex justify-between py-4 items-center ">
            <h2 className="text-3xl font-semibold ">Manage Doctors</h2>

            <Button
              type="primary"
              onClick={handleAddNewDoctor}
              className="mb-4"
            >
              Add New Doctor
            </Button>
          </section>

          <Table
            dataSource={doctors}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            style={{ marginTop: "20px" }}
            bordered
            className="shadow-md"
          />

          {/* Dashboard Metrics */}
          <div style={{ marginTop: "40px" }}>
            <h3 className="text-xl">Dashboard Metrics</h3>
            <p>Total Doctors Registered: {doctors.length}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageDoctors;
