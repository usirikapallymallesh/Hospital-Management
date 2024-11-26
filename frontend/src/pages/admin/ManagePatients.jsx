import React, { useState } from 'react';
import { Form, Input, Button, Table, Modal, Select } from 'antd';

const { Option } = Select;

const ManagePatients = () => {
  const [form] = Form.useForm();
  const [patients, setPatients] = useState([
    { name: 'John Doe', age: 30, status: 'Pending' },
    { name: 'Jane Smith', age: 25, status: 'Accepted' },
  ]);
  const [editingPatient, setEditingPatient] = useState(null);

  const onFinish = (values) => {
    if (editingPatient) {
      // Update existing patient
      setPatients(patients.map(patient => (patient.name === editingPatient.name ? { ...patient, ...values } : patient)));
      setEditingPatient(null);
    } else {
      // Add new patient
      setPatients([...patients, { ...values, status: 'Pending' }]);
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => editPatient(record)}>Edit</Button>
          <Button type="link" onClick={() => deletePatient(record)}>Delete</Button>
        </>
      ),
    },
  ];

  const editPatient = (patient) => {
    form.setFieldsValue(patient);
    setEditingPatient(patient);
  };

  const deletePatient = (patient) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this patient?',
      onOk: () => {
        setPatients(patients.filter(p => p.name !== patient.name));
        if (editingPatient?.name === patient.name) {
          setEditingPatient(null);
          form.resetFields();
        }
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Patients</h2>
      
      {/* Patient Editing Form */}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input className="border border-gray-300 rounded-md p-2" />
        </Form.Item>
        <Form.Item label="Age" name="age" rules={[{ required: true }]}>
          <Input type="number" className="border border-gray-300 rounded-md p-2" />
        </Form.Item>
        <Form.Item label="Status" name="status" rules={[{ required: true }]}>
          <Select defaultValue="Pending" className="border border-gray-300 rounded-md">
            <Option value="Pending">Pending</Option>
            <Option value="Accepted">Accepted</Option>
            <Option value="Rejected">Rejected</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="bg-blue-500 text-white rounded-md p-2">
          {editingPatient ? 'Update Patient' : 'Add Patient'}
        </Button>
        {editingPatient && (
          <Button 
            type="default" 
            onClick={() => { 
              setEditingPatient(null); 
              form.resetFields(); 
            }} 
            className="ml-2 border border-gray-300 rounded-md p-2"
          >
            Cancel
          </Button>
        )}
      </Form>

      {/* Patient List */}
      <Table 
        dataSource={patients} 
        columns={columns} 
        rowKey="name" 
        className="mt-6"
      />
      
      {/* Dashboard Metrics */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Dashboard Metrics</h3>
        <p>Total Patients Registered: {patients.length}</p>
        {/* Add more metrics as needed */}
      </div>
    </div>
  );
};

export default ManagePatients;