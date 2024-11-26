import React, { useState } from 'react';
import { Layout, Menu, Button, Card } from 'antd';
import { UserAddOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ManageDoctors from './ManageDoctors'; // Import the ManageDoctors component
import ManagePatients from './ManagePatients'; // Import the ManagePatients component

// Register Chart.js components
Chart.register(...registerables);

// Sample data for charts
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Doctors Registered',
      data: [5, 10, 15, 20, 25, 30],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Patients Appointments',
      data: [10, 20, 30, 40],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 1)',
      borderColor: 'rgba(153, 102, 255, 1)',
    },
  ],
};

const { Header, Content, Sider } = Layout;

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'manageDoctors':
        return <ManageDoctors />;
      case 'managePatients':
        return <ManagePatients />;
      case 'dashboard':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <Card title="Doctors Registered" className="mb-4">
              <Bar data={barData} options={{ responsive: true }} />
            </Card>
            <Card title="Patients Appointments Over Weeks">
              <Line data={lineData} options={{ responsive: true }} />
            </Card>
          </div>
        );
      default:
        return <h2 className="text-xl">Welcome to the Admin Dashboard</h2>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="bg-gray-800">
        <div className="logo text-white text-lg p-4">Admin Panel</div>
        <Menu theme="dark" mode="inline" selectedKeys={[selectedMenu]} items={[
          {
            key: "dashboard",
            icon: <BarChartOutlined />,
            label: "Dashboard",
            onClick: () => setSelectedMenu('dashboard'),
          },
          {
            key: "manageDoctors",
            icon: <UserAddOutlined />,
            label: "Manage Doctors",
            onClick: () => setSelectedMenu('manageDoctors'),
          },
          {
            key: "managePatients",
            icon: <UserOutlined />,
            label: "Manage Patients",
            onClick: () => setSelectedMenu('managePatients'),
          },
        ]} />
      </Sider>
      <Layout>
        <Header className="bg-white shadow">
          <Button type="primary" style={{ marginLeft: '16px' }}>Logout</Button>
        </Header>
        <Content style={{ margin: '16px' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

// Export AdminDashboard as default
export default AdminDashboard;