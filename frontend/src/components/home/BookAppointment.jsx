import React from "react";
import { Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import backgroundImg from "../../assets/images/HomeBgLoptop.jpeg";

const { Option } = Select;

const BookAppointment = () => {
  const handleFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div
      className="relative bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        filter: "revert-layer",
      }}
    >
      <div className="absolute inset-0 bg-blue-100 opacity-80 brightness-90"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full py-10 px-5 md:px-10 lg:px-20 text-white">
        {/* Left Side Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 yeseva-one-regular text-[#159EEC]">
            Book an Appointment
          </h2>
          <p className="text-lg max-w-md text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2  rounded-lg shadow-lg p-8 py-10 bg-[#1F2B6C]">
          <Form onFinish={handleFinish}>
            <div className=" flex gap-2">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                className=" w-1/2"
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              {/* Gender Field */}
              <Form.Item
                name="gender"
                className=" w-1/2"
                rules={[
                  { required: true, message: "Please select your gender!" },
                ]}
              >
                <Select placeholder="Select Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="flex gap-2">
              <Form.Item
                name="email"
                className=" w-1/2"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="phone"
                className=" w-1/2"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>
            </div>
            <div className="flex gap-2">
              <Form.Item
                name="date"
                className=" w-1/2"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <DatePicker
                  placeholder="Select a date"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item
                name="time"
                className=" w-1/2"
                rules={[{ required: true, message: "Please select a time!" }]}
              >
                <TimePicker
                  placeholder="Select a time"
                  style={{ width: "100%" }}
                  format="HH:mm"
                />
              </Form.Item>
            </div>
            <div className="flex gap-2">
              {/* Department Field */}
              <Form.Item
                name="department"
                className=" w-1/2"
                rules={[
                  { required: true, message: "Please select a department!" },
                ]}
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
                name="doctor"
                rules={[{ required: true, message: "Please select a doctor!" }]}
                className=" w-1/2"
              >
                <Select placeholder="Select Doctor">
                  <Option value="Dr. John Doe">Dr. John Doe</Option>
                  <Option value="Dr. Jane Smith">Dr. Jane Smith</Option>
                  <Option value="Dr. Alex Johnson">Dr. Alex Johnson</Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <textarea
                name=""
                id=""
                className="w-full h-32 p-4"
                placeholder="Message "
              ></textarea>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#BFD2F8] text-[#1F2B6C] w-full py-6 rounded-sm"
              >
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
