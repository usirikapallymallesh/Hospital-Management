import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import { useSelector } from "react-redux";

const { Option } = Select;

const EditDoctor = () => {
  const { name } = useParams(); // Get the doctor's name from the URL parameters
  const [doctor, setDoctor] = useState(null);
  const navigate =useNavigate();
  const role = useSelector((state) => state.user.role); // Assuming auth.user is a Redux state
  useEffect(() => {
    if (role !== "ADMIN") {
      navigate("/login");
    }
  }, []);

  // Sample doctor data (you would fetch this from your data source)
  const doctorsData = [
    {
      id: "1",
      name: "Dr. Smith",
      specialization: "Cardiology",
      description: "Heart specialist",
      contact: "123-456-7890",
      email: "smith@example.com",
      activeHours: "9 AM - 5 PM",
      status: "Active",
      image: "",
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
      image: "",
    },
  ];

  useEffect(() => {
    // Simulate fetching doctor details based on name
    const foundDoctor = doctorsData.find((doc) => doc.name === name);
    setDoctor(foundDoctor);
  }, [name]);

  const onFinish = (values) => {
    console.log("Updated Doctor Details:", values);
    // Logic to update doctor details in your data source goes here
  };

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-grow">
        <AdminHeader />
        <main className="p-10 bg-white overflow-y-auto">
          <h2 className="text-3xl font-semibold mb-6 pt-14">Edit Doctor</h2>
          <Form initialValues={doctor} layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name">
              <Input disabled className="border rounded-md" />
            </Form.Item>
            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[{ required: true }]}
            >
              <Input className="border rounded-md" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input.TextArea rows={4} className="border rounded-md" />
            </Form.Item>
            <Form.Item label="Contact Number" name="contact">
              <Input className="border rounded-md" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" className="border rounded-md" />
            </Form.Item>
            <Form.Item label="Active Hours" name="activeHours">
              <Input
                className="border rounded-md"
                placeholder="e.g., 9 AM - 5 PM"
              />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select defaultValue={doctor.status} style={{ width: "100%" }}>
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
                <Option value="On Leave">On Leave</Option>
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
              Update Doctor
            </Button>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default EditDoctor;
