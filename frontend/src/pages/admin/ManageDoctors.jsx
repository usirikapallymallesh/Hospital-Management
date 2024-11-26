import React, { useState } from 'react';
import { Form, Input, Button, Table, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ManageDoctors = () => {
  const [form] = Form.useForm();
  const [doctors, setDoctors] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const onFinish = (values) => {
    if (editingDoctor) {
      // Update existing doctor
      setDoctors(doctors.map(doc => (doc.name === editingDoctor.name ? values : doc)));
      setEditingDoctor(null);
    } else {
      // Add new doctor
      setDoctors([...doctors, values]);
    }
    form.resetFields();
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Doctor" style={{ width: 50, height: 50 }} />,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => editDoctor(record)}>Edit</Button>
          <Button type="link" onClick={() => deleteDoctor(record)}>Delete</Button>
        </>
      ),
    },
  ];

  const editDoctor = (doctor) => {
    form.setFieldsValue(doctor);
    setEditingDoctor(doctor);
  };

  const deleteDoctor = (doctor) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this doctor?',
      onOk: () => {
        setDoctors(doctors.filter(doc => doc.name !== doctor.name));
        // Optionally handle self-deletion logic here
        if (doctor.name === editingDoctor?.name) {
          setEditingDoctor(null);
          form.resetFields();
        }
      },
    });
  };

  return (
    <div>
      <h2>Manage Doctors</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <Upload 
            beforeUpload={(file) => {
              // Convert file to base64 URL
              const reader = new FileReader();
              reader.onloadend = () => {
                form.setFieldsValue({ image: reader.result });
              };
              reader.readAsDataURL(file);
              return false; // Prevent automatic upload
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">{editingDoctor ? 'Update Doctor' : 'Add Doctor'}</Button>
        {editingDoctor && (
          <Button type="default" onClick={() => { setEditingDoctor(null); form.resetFields(); }} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        )}
      </Form>

      <Table 
        dataSource={doctors} 
        columns={columns} 
        rowKey="name" 
        style={{ marginTop: '20px' }} 
      />
      
      {/* Dashboard Metrics */}
      <div style={{ marginTop: '40px' }}>
        <h3>Dashboard Metrics</h3>
        <p>Total Doctors Registered: {doctors.length}</p>
        {/* Add more metrics as needed */}
      </div>
    </div>
  );
};

export default ManageDoctors;