import React, { useState } from "react";
import { Layout, Card, Button, Input, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const { Content } = Layout;

const AddDoctor = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = (values) => {
    console.log("New Doctor Data:", values);
    // Here you can send the doctor data to your backend
    message.success('Doctor added successfully!');
    form.resetFields(); // Reset form fields after submission
  };

  const handleUploadChange = (info) => {
    if (info.file.status === 'done') {
      // Assuming the server returns the uploaded image URL
      setImageUrl(info.file.response.url); // Update this based on your response structure
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Layout className="flex">
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ marginTop: "64px", padding: "24px", overflowY: "auto" }}>
          <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Doctor</h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Card className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Doctor Information</h4>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input the doctor\'s name!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="specialization"
                  label="Specialization"
                  rules={[{ required: true, message: 'Please input the doctor\'s specialization!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="contact"
                  label="Contact Number"
                  rules={[{ required: true, message: 'Please input the contact number!' }]}
                >
                  <Input />
                </Form.Item>

                {/* Profile Picture Upload */}
                <Form.Item label="Profile Picture">
                  <Upload
                    name="profilePicture"
                    showUploadList={false}
                    action="/upload" // Replace with your upload endpoint
                    onChange={handleUploadChange}
                    beforeUpload={(file) => {
                      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                      if (!isJpgOrPng) {
                        message.error('You can only upload JPG/PNG file!');
                      }
                      return isJpgOrPng;
                    }}
                  >
                    <Button icon={<UploadOutlined />}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>

              </Card>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit" className="mr-2">Add Doctor</Button>
                <Button type="default" onClick={() => form.resetFields()}>Cancel</Button>
              </div>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddDoctor;