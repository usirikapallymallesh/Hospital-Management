import React, { useEffect, useState } from "react";
import { Layout, Card, Row, Col, Table } from "antd";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import { motion } from "framer-motion"; // Import motion for animations

// Register Chart.js components
Chart.register(...registerables);

// Sample data for charts
const barData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Doctors Registered",
      data: [5, 10, 15, 20, 25, 30],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Patients Appointments",
      data: [10, 20, 30, 40],
      fill: false,
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 1)",
    },
  ],
};

const { Content } = Layout;

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const navigate = useNavigate();

  const role = useSelector((state) => state.user.role); // Assuming auth.user is a Redux state
  useEffect(() => {
    if (role !== "ADMIN") {
      navigate("/login");
    }
  }, []);

  return (
    <Layout className="flex">
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content
          style={{ marginTop: "64px", padding: "24px", overflowY: "auto" }}
        >
          <motion.div
            className="p-4 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }} // Initial opacity for fade-in effect
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 0.5 }} // Transition duration
          >
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center bg-blue-100">
                    <h3 className="text-3xl font-bold">30</h3>
                    <p>Registered Doctors</p>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center bg-green-100">
                    <h3 className="text-3xl font-bold">120</h3>
                    <p>Registered Patients</p>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center bg-yellow-100">
                    <h3 className="text-3xl font-bold">25</h3>
                    <p>Currently Active</p>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center bg-red-100">
                    <h3 className="text-3xl font-bold">15</h3>
                    <p>Appointments Awaiting Confirmation</p>
                  </Card>
                </motion.div>
              </Col>
            </Row>

            {/* Charts Section */}
            <Row gutter={16} className="mt-6">
              <Col xs={24} sm={24} md={12}>
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card title="Doctors Registered" className="shadow-md">
                    <Bar data={barData} options={{ responsive: true }} />
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    title="Patients Appointments Over Weeks"
                    className="shadow-md"
                  >
                    <Line data={lineData} options={{ responsive: true }} />
                  </Card>
                </motion.div>
              </Col>
            </Row>

            {/* Display some doctors and patients in tables */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Doctors</h2>
              {/* Replace with actual doctor data */}
              <Table
                dataSource={[
                  {
                    name: "Dr. Smith",
                    specialization: "Cardiology",
                    contact: "123-456-7890",
                  },
                  {
                    name: "Dr. Jones",
                    specialization: "Neurology",
                    contact: "987-654-3210",
                  },
                ]}
                columns={[
                  { title: "Name", dataIndex: "name", key: "name" },
                  {
                    title: "Specialization",
                    dataIndex: "specialization",
                    key: "specialization",
                  },
                  {
                    title: "Contact Number",
                    dataIndex: "contact",
                    key: "contact",
                  },
                ]}
                rowKey="name"
                pagination={{ pageSize: 5 }}
                bordered
              />

              <h2 className="text-xl font-semibold mt-8 mb-4">
                Recent Patients
              </h2>
              {/* Replace with actual patient data */}
              <Table
                dataSource={[
                  { name: "John Doe", condition: "Flu", contact: "555-1234" },
                  {
                    name: "Jane Smith",
                    condition: "Cold",
                    contact: "555-5678",
                  },
                ]}
                columns={[
                  { title: "Name", dataIndex: "name", key: "name" },
                  {
                    title: "Condition",
                    dataIndex: "condition",
                    key: "condition",
                  },
                  {
                    title: "Contact Number",
                    dataIndex: "contact",
                    key: "contact",
                  },
                ]}
                rowKey="name"
                pagination={{ pageSize: 5 }}
                bordered
              />
            </div>
          </motion.div>
        </Content>
      </Layout>
    </Layout>
  );
};

// Export AdminDashboard as default
export default AdminDashboard;
