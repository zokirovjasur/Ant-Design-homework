import React from "react";
import { Alert, Typography } from "antd";

const { Title } = Typography;

const AlertDemo = () => {
  return (
    <div>
      <Title level={4}>Alert Demo</Title>
      <Alert message="Success Text" type="success" />
    </div>
  );
};

export default AlertDemo;
