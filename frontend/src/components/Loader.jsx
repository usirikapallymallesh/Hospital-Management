// Loader.jsx
import React from 'react';
import { Spin } from 'antd';

const Loader = ({ color = '#1F2B6C' }) => {
    // Custom style for larger size
    const spinnerStyle = {
        color: color,
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <Spin style={spinnerStyle}  size="large" color = '#1F2B6C'/>
        </div>
    );
};

export default Loader;