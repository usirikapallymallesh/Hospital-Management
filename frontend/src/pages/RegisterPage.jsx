import React, { useRef } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons from React Icons
import { CalendarOutlined } from "@ant-design/icons"; // Import Calendar icon from Ant Design
import moment from "moment";
import bgImage from "../assets/images/loginBg1.jpg";
import { Link } from "react-router-dom"; // Import Link for navigation

const { Option } = Select;

const Register = () => {
  const dobRef = useRef(); // Initialize the ref for the DatePicker

  const onFinish = (values) => {
    // Get the formatted date from the DatePicker
    const formattedDate = dobRef.current
      ? moment(dobRef.current.value).format("YYYY-MM-DD")
      : null;

    // Add the formatted date to the values object
    values = {
      ...values,
      dateOfBirth: formattedDate,
    };

    console.log("Received values:", values);
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          filter: `brightness(${50}%)`,
        }}
      ></div>
      <div className="w-full max-w-screen-md p-8 bg-red-50 rounded-lg shadow-md text-white z-10">
        <h2 className="text-3xl font-bold text-center text-[#1F2B6C] mb-4">
          Doctor Registration
        </h2>
        <p className="text-center text-gray-400 mb-4">
          Please fill in the details to create your account.
        </p>
        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input
                placeholder="Enter your first name"
                prefix={<FaUser />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input
                placeholder="Enter your last name"
                prefix={<FaUser />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email"
                prefix={<FaEnvelope />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Select
                placeholder="Select your gender"
                className="bg-white text-black border border-gray-300"
              >
                <Option value="M">Male</Option>
                <Option value="F">Female</Option>
                <Option value="O">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                prefix={<FaPhone />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[
                {
                  required: true,
                  message: "Please select your date of birth!",
                },
              ]}
            >
              <DatePicker
                format={"YYYY-MM-DD"}
                placeholder="Select your date of birth"
                style={{ width: "100%" }}
                suffixIcon={<CalendarOutlined />}
                ref={dobRef} // Attach ref to DatePicker
                disabledDate={(current) =>
                  current && current > moment().endOf("day")
                }
                className="bg-white text-black" // Customize DatePicker background and text color
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                prefix={<FaLock />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm your password"
                prefix={<FaLock />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
                style={{ boxShadow: "none" }}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-6 bg-[#1F2B6C] text-base py-5 hover:bg-[#101638]"
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        {/* Login Prompt */}
        <p className="text-center text-gray-400 mt-4">
          If you are already registered, please
          <Link to="/login" className="text-purple-700 hover:underline">
            {" "}
            login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
