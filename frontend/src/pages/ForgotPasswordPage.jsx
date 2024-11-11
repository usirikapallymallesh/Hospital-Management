import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons"; // Import the mail icon
import ForgotPasswordImg from "../assets/images/forgottenPass1.png"; // Import your image
import bgImage from "../assets/images/loginBg1.jpg"; // Import your background image

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle password reset logic here, e.g., send a reset link to the email
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          filter: `brightness(50%)`,
        }}
      ></div>

      <div className="relative w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-black">
          <h2 className="text-3xl font-bold text-center text--[#1F2B6C] mb-4">
            Forgot Password
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email address below to receive a password reset link.
          </p>

          <Form layout="vertical" onFinish={onFinish} className="w-full">
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
                prefix={<MailOutlined />}
                className="h-12 placeholder-gray-400 bg-gray-100 border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-6 bg-[#1F2B6C] py-5 hover:bg-purple-600 transition duration-200"
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center text-gray-500 mt-4">
            Remembered your password?
            <a href="/login" className="text-purple-600 hover:underline">
              {" "}
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-end z-10 overflow-hidden">
        <img
          src={ForgotPasswordImg}
          alt="Forgot Password Illustration"
          className="w-[580px] h-[770px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
