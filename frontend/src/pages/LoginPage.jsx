import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons from React Icons
import axios from "axios";
import bgImage from "../assets/images/loginBg1.jpg";
import configuration from "../config";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { UPDATE_ROLE } from "../redux/slices/user";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion"; // Import motion for animations

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const url = `${configuration.API_BASE_URL}/api/v1/user/login`;
      const response = await axios.post(url, values);

      if (response.data.success) {
        const token = response.data.token; // Extract token from response
        console.log(token);

        // Decode token using jwt-decode package
        const payload = jwtDecode(token);
        const role = payload.role;
        dispatch(UPDATE_ROLE(role));

        // Show success toast with a timeout before navigation
        toast.success("Login successful"); // Show success toast immediately

        setTimeout(() => {
          // Navigate based on user role after the toast is shown
          switch (role) {
            case "ADMIN":
              navigate("/admin");
              break;
            case "DOCTOR":
              navigate("/doctor");
              break;
            case "PATIENT":
              navigate("/");
              break;
            default:
              navigate("/");
              break;
          }
        }, 1000); // Delay navigation by 1000 milliseconds (1 second)
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password"); // Show error toast instead of alert
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }} // Initial opacity for fade-in effect
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.5 }} // Transition duration
    >
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
      <motion.div
        className="w-full max-w-md p-8 rounded-lg shadow-md text-black backdrop-brightness-105 border bg-red-50"
        initial={{ y: -50, opacity: 0 }} // Start off-screen and transparent
        animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
        transition={{ duration: 0.5 }} // Transition duration for form entry
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black brightness-100 mb-4">
          Login
        </h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<span className="custom-label ml-1">Email</span>}
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
              prefix={<FaUser />}
              className="h-10 placeholder-white focus:border-transparent focus:ring-0"
              style={{
                backgroundColor: "transparent", // Ensure background is transparent
                boxShadow: "none", // Remove any box shadow if present
              }}
            />
          </Form.Item>
          <Form.Item
            label={<span className="custom-label ml-1">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<FaLock />}
              className="h-10 placeholder-white bg-transparent focus:border-transparent focus:ring-0"
              style={{
                backgroundColor: "transparent", // Ensure background is transparent
                boxShadow: "none", // Remove any box shadow if present
              }}
            />
          </Form.Item>
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline mb-2 md:mb-0"
            >
              Forgot Password?
            </Link>
            <Link to="/register" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#1F2B6C] mt-6 py-5 text-base"
            >
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
      </motion.div>
    </motion.div>
  );
};

export default Login;
