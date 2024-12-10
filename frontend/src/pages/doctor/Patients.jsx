import React, { useEffect, useState } from "react";
import { Button, Table, Select } from "antd";
import { useNavigate } from "react-router-dom";
import DoctorSidebar from "../../components/doctor/DoctorSidebar";
import DoctorHeader from "../../components/doctor/DoctorHeader";
import { useSelector } from "react-redux";

const { Option } = Select;

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: "1",
      name: "John Doe",
      age: 30,
      condition: "Flu",
      contact: "123-456-7890",
      email: "john.doe@example.com",
      status: "Pending",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 25,
      condition: "Cold",
      contact: "987-654-3210",
      email: "jane.smith@example.com",
      status: "Accepted",
    },
    // Add more sample patients as needed
  ]);

  const navigate = useNavigate(); // Initialize navigate for navigation
  const role = useSelector((state) => state.user.role);
  useEffect(() => {
    if (role !== "DOCTOR") {
      navigate("/login");
    }
  }, []);

  const handleStatusChange = (value, patientId) => {
    setPatients(
      patients.map((patient) =>
        patient.id === patientId ? { ...patient, status: value } : patient
      )
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Select
          defaultValue={text}
          onChange={(value) => handleStatusChange(value, record.id)}
          className="w-32"
        >
          <Option value="Pending">Pending</Option>
          <Option value="Accepted">Accepted</Option>
          <Option value="Rejected">Rejected</Option>
          <Option value="Canceled">Canceled</Option>
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => editPatient(record)}>
          Edit
        </Button>
      ),
    },
  ];

  const editPatient = (patient) => {
    // Redirect to EditPatient page with patient's ID as a parameter
    navigate(`/admin/edit-patient/${patient.id}`);
  };

  const handleAddNewPatient = () => {
    navigate("/admin/add-patient"); // Redirect to the add new patient page
  };

  return (
    <div className="flex  h-screen bg-gray-50">
      <DoctorSidebar />
      <div className="flex-grow ">
        <section className=" w-[80vw] border-blue-900 h-10 px-0 mb-6">
          <DoctorHeader />
        </section>
        <section className="p-8 ">
          <section className="flex justify-between py-4 items-center ">
            <h2 className="text-3xl font-semibold ">Manage Patient</h2>
          </section>

          <Table
            dataSource={patients}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            bordered
            className="shadow-lg rounded-lg"
            style={{ marginTop: "20px" }}
          />
          {/* Dashboard Metrics */}
          <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Dashboard Metrics</h3>
            <p>
              Total Patients Registered:{" "}
              <span className="font-bold">{patients.length}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Patients;
