import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Form, Input, DatePicker, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment'; // Import moment for date handling
import Sidebar from './Sidebar'; // Importing the Sidebar component

const EditUser = ({ user, onSave }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Include photo in values if needed
    onSave({ ...user, ...values });
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Edit User Details</h2>
      
      <Form.Item 
        label="Name" 
        name="name" 
        initialValue={user.name} 
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Email" 
        name="email" 
        initialValue={user.email} 
        rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Password" 
        name="password" 
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item 
        label="Date of Birth" 
        name="dob" 
        initialValue={user.dob ? moment(user.dob) : null}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label="Profile Photo" name="photo">
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button icon={<UploadOutlined />}>Upload Photo</Button>
        </Upload>
      </Form.Item>

      <Form.Item 
        label="Working Hours" 
        name="workingHours" 
        initialValue={user.workingHours}
      >
        <Input placeholder="e.g., Mon-Fri: 9 AM - 5 PM" />
      </Form.Item>

      <Button type="primary" htmlType="submit">Save Changes</Button>
    </Form>
  );
};

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    dob: '1990-01-01',
    workingHours: 'Mon-Fri: 9 AM - 5 PM',
  });

  const handleSave = (updatedUser) => {
    setCurrentUser(updatedUser);
    setIsEditing(false);
    alert('User details updated successfully!');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard Overview</h1>
        <p className="text-gray-700 mb-6">Manage your patients and appointments effectively.</p>

        {/* Button to Edit User Details */}
        <Button 
          onClick={() => setIsEditing(true)} 
          type="primary" 
          className="mb-6"
        >
          Edit User Details
        </Button>

        {/* Conditional Rendering of EditUser Component */}
        {isEditing && (
          <EditUser user={currentUser} onSave={handleSave} />
        )}

        {/* Other components like charts and patient list can follow here */}
      </main>
    </div>
  );
}

export default Settings;