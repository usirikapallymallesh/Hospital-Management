import React from "react";
import { Layout, Card, Button, Input, Form, message } from "antd";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const { Content } = Layout;

const AddPatient = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("New Patient Data:", values);
    // Here you can send the patient data to your backend
    message.success("Patient added successfully!");
    form.resetFields(); // Reset form fields after submission
  };

  return (
    <Layout className="flex">
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content
          style={{ marginTop: "64px", padding: "24px", overflowY: "auto" }}
        >
          <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Add New Patient
            </h2>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Card className="mb-4">
                <h4 className="text-xl font-semibold mb-2">
                  Patient Information
                </h4>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input the patient's name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[
                    {
                      required: true,
                      message: "Please input the patient's age!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select the patient's gender!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="contact"
                  label="Contact Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input the contact number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit" className="mr-2">
                  Add Patient
                </Button>
                <Button type="default" onClick={() => form.resetFields()}>
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddPatient;
