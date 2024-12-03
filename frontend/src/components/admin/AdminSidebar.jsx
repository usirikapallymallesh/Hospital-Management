import React from "react";
import { Layout, Button } from "antd";
import {
  BarChartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AdminSidebar = ({ selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate();

  return (
    <Sider className="bg-[#1F2B6C] sticky top-0 h-screen w-full md:w-1/5">
      <div className="logo text-white text-2xl p-4 py-6 font-bold text-center">
        <h1 className="text-white text-2xl yeseva-one-regular uppercase font-semibold">
          Med<span className="text-[#159EEC]">dical</span>
        </h1>
      </div>
      <section className="flex flex-col text-white px-4 gap-4 text-lg">
        <NavLink
          to={"/admin"}
          className={({ isActive }) =>
            `flex items-center p-2 rounded-sm transition duration-200 ${
              isActive ? "bg-blue-600" : "hover:bg-blue-500"
            }`
          }
        >
          <BarChartOutlined className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={"/admin/manage-patients"}
          className={({ isActive }) =>
            `flex items-center p-2 rounded-sm transition duration-200 ${
              isActive ? "bg-blue-600" : "hover:bg-blue-500"
            }`
          }
        >
          <UserAddOutlined className="mr-2" />
          Patients
        </NavLink>
        <NavLink
          to={"/admin/manage-doctors"}
          className={({ isActive }) =>
            `flex items-center p-2 rounded-sm transition duration-200 ${
              isActive ? "bg-blue-600" : "hover:bg-blue-500"
            }`
          }
        >
          <UserAddOutlined className="mr-2" />
          Doctors
        </NavLink>
        <NavLink
          to={"/admin/doctors"}
          className={({ isActive }) =>
            `flex items-center p-2 rounded-sm transition duration-200 ${
              isActive ? "bg-blue-600" : "hover:bg-blue-500"
            }`
          }
        >
          <UserOutlined className="mr-2" />
          Profile
        </NavLink>
      </section>

      <div className="text-white text-sm p-4 text-center mt-auto">
        <Button
          type="primary"
          onClick={() => navigate("/login")}
          className="w-full py-5 text-md rounded-sm"
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default AdminSidebar;
