import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { Title } = Typography;

const ResetPassword = () => {
  const onFinish = (values) => {
    const { newPassword, confirmPassword } = values;

    if (newPassword === confirmPassword) {
      // Handle password reset logic here
      console.log("Password reset successfully:", newPassword);
      message.success("Password reset successfully!");
    } else {
      message.error("Passwords do not match!");
    }
  };

  return (
    <div style={styles.container}>
      <Title level={2}>Reset Password</Title>
      <Form name="reset_password" onFinish={onFinish} style={styles.form}>
        <Form.Item
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your new password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm New Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.button}>
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "10px",
  },
};

export default ResetPassword;
