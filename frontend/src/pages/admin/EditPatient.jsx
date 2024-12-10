import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Upload, message, Select, Layout } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import AdminHeader from './AdminHeader'; // Import the new Header component
// import AdminSidebar from './AdminSidebar'; // Import the new Sidebar component
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useSelector } from "react-redux";

const { Option } = Select;
const { Content } = Layout;

const EditPatient = () => {
  const { id } = useParams(); // Get the patient's ID from the URL parameters
  const [patient, setPatient] = useState(null);
  const navigate = useNavigate(); // Assuming useNavigate hook is available from react-router-dom
  const role = useSelector((state) => state.user.role); // Assuming auth.user is a Redux state
  useEffect(() => {
    if (role !== "ADMIN") {
      navigate("/login");
    }
  }, []);
  // Sample patient data (you would fetch this from your data source)
  const patientsData = [
    {
      id: "1",
      name: "John Doe",
      age: 30,
      condition: "Flu",
      contact: "123-456-7890",
      email: "john.doe@example.com",
      status: "Pending",
      image: "",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 25,
      condition: "Cold",
      contact: "987-654-3210",
      email: "jane.smith@example.com",
      status: "Accepted",
      image: "",
    },
  ];

  useEffect(() => {
    // Simulate fetching patient details based on ID
    const foundPatient = patientsData.find((pat) => pat.id === id);
    setPatient(foundPatient);
  }, [id]);

  const onFinish = (values) => {
    console.log("Updated Patient Details:", values);
    // Logic to update patient details in your data source goes here
  };

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  if (!patient) return <div>Loading...</div>;

  return (
    <Layout
      style={{ minHeight: "100vh" }}
      className="flex flex-col overflow-hidden"
    >
      <AdminSidebar />
      <div className="flex-grow ">
        <section className=" w-[80vw] border-blue-900 h-10 px-0 mb-6">
          <AdminHeader />
        </section>
        <section>
          <main className="flex-grow p-8 bg-white overflow-y-auto">
            <h2 className="text-3xl font-semibold mb-6">Edit Patient</h2>
            <Form initialValues={patient} layout="vertical" onFinish={onFinish}>
              <Form.Item label="Name" name="name">
                <Input className="border rounded-md" />
              </Form.Item>
              <Form.Item label="Age" name="age">
                <Input type="number" className="border rounded-md" />
              </Form.Item>
              <Form.Item label="Condition" name="condition">
                <Input className="border rounded-md" />
              </Form.Item>
              <Form.Item label="Contact Number" name="contact">
                <Input className="border rounded-md" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" className="border rounded-md" />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Select defaultValue={patient.status} style={{ width: "100%" }}>
                  <Option value="Pending">Pending</Option>
                  <Option value="Accepted">Accepted</Option>
                  <Option value="Rejected">Rejected</Option>
                  <Option value="Canceled">Canceled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Image" name="image">
                <Upload
                  beforeUpload={(file) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      console.log(reader.result); // For debugging purposes
                    };
                    reader.readAsDataURL(file);
                    return false; // Prevent automatic upload
                  }}
                  onChange={handleImageChange}
                >
                  <Button
                    icon={<UploadOutlined />}
                    className="bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Upload Image
                  </Button>
                </Upload>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Update Patient
              </Button>
            </Form>
          </main>
        </section>
      </div>
    </Layout>
  );
};

export default EditPatient;
