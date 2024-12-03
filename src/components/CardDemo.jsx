import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CardDemo = () => {
  return (
    <div>
      <Title level={4}>Card Demo</Title>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default CardDemo;
