import React from "react";
import { Layout, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className=" top-0 fixed z-10 h-[80px] w-[90vw] flex items-center justify-between pr-20 gap-2 bg-[#1F2B6C]">
      <h1 className="text-2xl text-white font-bold text-start"></h1>
      <section>
        <Button
          type="primary"
          onClick={() => navigate("/profile")}
          className="mr-4"
        >
          Profile
        </Button>
        <Button type="primary" onClick={() => navigate("/login")}>
          Logout
        </Button>
      </section>
    </Header>
  );
};

export default AdminHeader;
