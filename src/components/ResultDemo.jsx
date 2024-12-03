import React from "react";
import { Result, Button, Typography } from "antd";

const { Title } = Typography;

const ResultDemo = () => {
  return (
    <div>
      <Title level={4}>Result Demo</Title>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </div>
  );
};

export default ResultDemo;
