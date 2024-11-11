import React from "react";
import { Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import backgroundImg from '../../assets/images/HomeBgLoptop.jpeg';
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { Option } = Select;

const BookAppointment = () => {
  const handleFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div
      className="relative bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        filter: "revert-layer"
      }}
    >
      <div className="absolute inset-0 bg-[#43444b] opacity-70 brightness-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full py-10 px-5 md:px-10 lg:px-20 text-white">
        {/* Left Side Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book an Appointment
          </h2>
          <p className="text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          <Form onFinish={handleFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            {/* Gender Field */}
            <Form.Item
              name="gender"
              rules={[{ required: true, message: 'Please select your gender!' }]}
            >
              <Select placeholder="Select Gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            {/* Department Field */}
            <Form.Item
              name="department"
              rules={[{ required: true, message: 'Please select a department!' }]}
            >
              <Select placeholder="Select Department">
                <Option value="cardiology">Cardiology</Option>
                <Option value="neurology">Neurology</Option>
                <Option value="orthopedics">Orthopedics</Option>
                <Option value="pediatrics">Pediatrics</Option>
                {/* Add more departments as needed */}
              </Select>
            </Form.Item>

            <Form.Item
              name="date"
              rules={[{ required: true, message: 'Please select a date!' }]}
            >
              <DatePicker placeholder="Select a date" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="time"
              rules={[{ required: true, message: 'Please select a time!' }]}
            >
              <TimePicker placeholder="Select a time" style={{ width: '100%' }} format='HH:mm' />
            </Form.Item>

            <Form.Item
              name="doctor"
              rules={[{ required: true, message: 'Please select a doctor!' }]}
            >
              <Select placeholder="Select Doctor">
                <Option value="Dr. John Doe">Dr. John Doe</Option>
                <Option value="Dr. Jane Smith">Dr. Jane Smith</Option>
                <Option value="Dr. Alex Johnson">Dr. Alex Johnson</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit Appointment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;