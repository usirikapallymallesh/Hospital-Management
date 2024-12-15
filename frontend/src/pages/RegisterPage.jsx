import React from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import bgImage from "../assets/images/loginBg1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import configuration from "./../config.js";
import { toast } from "react-toastify";

const { Option } = Select;

const Register = () => {
  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dob ? moment(values.dob).format("YYYY-MM-DD") : null,
    };

    try {
      const response = await axios.post(
        `${configuration.API_BASE_URL}/api/v1/user/patient/register`,
        formattedValues
      );
      toast.success("Registration successful!");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          filter: `brightness(40%)`,
        }}
      ></div>
      <motion.div
        className="w-full max-w-screen-md p-8 bg-red-50 rounded-lg shadow-md text-white z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
              validateFirst
              rules={[
                { required: true, message: "Please enter your first name!" },
                { min: 4, message: "Must be at least 4 characters!" },
                { max: 20, message: "Cannot exceed 20 characters!" },
                { whitespace: true, message: "Cannot be empty!" },
                { pattern: /^[A-Za-z]+$/, message: "Letters only!" },
              ]}
            >
              <Input
                placeholder="Enter your first name"
                prefix={<FaUser />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              validateFirst
              rules={[
                { required: true, message: "Please enter your last name!" },
                { min: 4, message: "Must be at least 4 characters!" },
                { max: 20, message: "Cannot exceed 20 characters!" },
                { whitespace: true, message: "Cannot be empty!" },
                { pattern: /^[A-Za-z]+$/, message: "Letters only!" },
              ]}
            >
              <Input
                placeholder="Enter your last name"
                prefix={<FaUser />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              validateFirst
              rules={[
                { required: true, type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Enter your email"
                prefix={<FaEnvelope />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select your gender!" }]}
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
              validateFirst
              rules={[
                { required: true, message: "Enter your phone number!" },
                { min: 8, message: "Must be at least 8 characters!" },
                { max: 20, message: "Cannot exceed 20 characters!" },
                { pattern: /^[0-9]+$/, message: "Numbers only!" },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                prefix={<FaPhone />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Select your date of birth!" }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="Select your date of birth"
                style={{ width: "100%" }}
                suffixIcon={<CalendarOutlined />}
                disabledDate={(current) =>
                  current && current > moment().endOf("day")
                }
                className="bg-white text-black"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              validateFirst
              rules={[
                { required: true, message: "Enter your password!" },
                { min: 8, message: "Must be at least 8 characters!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                prefix={<FaLock />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
              />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              validateFirst
              rules={[
                { required: true, message: "Confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm your password"
                prefix={<FaLock />}
                className="h-12 text-black placeholder-gray-400 bg-white border border-gray-300 focus:border-purple-500"
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

        <p className="text-center text-gray-400 mt-4">
          Already registered?{" "}
          <Link to="/login" className="text-purple-700 hover:underline">
            Login here.
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Register;
