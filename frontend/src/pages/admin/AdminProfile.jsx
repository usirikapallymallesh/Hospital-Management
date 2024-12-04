import React, { useState } from "react";
import { Layout, Card, Avatar, Button, Input, Form, Upload, message } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const { Content } = Layout;

const AdminProfile = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  // Sample initial values (you can replace these with actual data)
  const initialValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    bio: "Experienced admin with a demonstrated history of working in the healthcare industry. Skilled in management, communication, and data analysis.",
  };

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue(initialValues);
  };

  const handleSave = (values) => {
    console.log("Updated Profile:", values);
    // Here you can send the updated values to your backend
    setIsEditing(false);
    message.success('Profile updated successfully!');
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
          <div className="p-4 bg-white rounded-lg shadow-md max-w-full mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Admin Profile</h2>
            <div className="flex flex-col items-center mb-6">
              <Avatar size={100} icon={<UserOutlined />} src={imageUrl} className="mb-4" />
              <h3 className="text-2xl font-semibold">{initialValues.name}</h3>
              <p className="text-gray-500">Admin Role</p>
            </div>

            <Form
              form={form}
              layout="vertical"
              initialValues={initialValues}
              onFinish={handleSave}
            >
              {/* Profile Picture Upload */}
              <Card className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Profile Picture</h4>
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
                  <Button icon={<UploadOutlined />} disabled={!isEditing}>
                    {isEditing ? 'Click to Upload' : 'Upload Disabled'}
                  </Button>
                </Upload>
              </Card>

              {/* Contact Information */}
              <Card className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input disabled={!isEditing} />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input disabled={!isEditing} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input disabled={!isEditing} />
                </Form.Item>
              </Card>

              {/* About Me */}
              <Card className="mb-4">
                <h4 className="text-xl font-semibold mb-2">About Me</h4>
                <Form.Item
                  name="bio"
                  label="Bio"
                  rules={[{ required: true, message: 'Please input your bio!' }]}
                >
                  <Input.TextArea disabled={!isEditing} rows={4} />
                </Form.Item>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-center">
                {!isEditing ? (
                  <>
                    <Button type="primary" onClick={handleEdit} className="mr-2">Edit Profile</Button>
                    <Button type="default">Logout</Button>
                  </>
                ) : (
                  <>
                    <Button type="primary" htmlType="submit" className="mr-2">Save Changes</Button>
                    <Button type="default" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </>
                )}
              </div>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminProfile;