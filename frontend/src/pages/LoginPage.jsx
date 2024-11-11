import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons from React Icons

import bgImage from "../assets/images/loginBg1.jpg";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-end pr-24 min-h-screen p-4">
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
      <div className="w-full max-w-md p-8 rounded-lg shadow-md text-white backdrop-brightness-105 border">
        <h2 className="text-4xl font-bold text-center text-white brightness-100 mb-4">
          Login
        </h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<span className="custom-label text-white ml-1">Email</span>}
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
              prefix={<FaUser className="text-white" />}
              className="h-10 text-white placeholder-white  focus:border-transparent focus:ring-0"
              paddingXS
              style={{
                backgroundColor: 'transparent', // Ensure background is transparent
                boxShadow: 'none' // Remove any box shadow if present
              }}
            />
          </Form.Item>
          <Form.Item
            label={<span className="custom-label text-white ml-1">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<FaLock className="text-white" />}
              className="h-10 text-white placeholder-white bg-transparent  focus:border-transparent focus:ring-0"
              style={{
                backgroundColor: 'transparent', // Ensure background is transparent
                boxShadow: 'none' // Remove any box shadow if present
              }}
            />
          </Form.Item>
          <div className="flex justify-between mb-4">
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-[#1F2B6C] mt-6 py-5 text-base ">
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?
          <Link to="/register" className="text-purple-600 hover:underline">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;