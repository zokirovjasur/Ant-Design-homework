import React from "react";
import { Badge, Avatar, Typography } from "antd";

const { Title } = Typography;

const BadgeDemo = () => {
  return (
    <div>
      <Title level={4}>Badge Demo</Title>
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
    </div>
  );
};

export default BadgeDemo;
