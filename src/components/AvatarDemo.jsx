import React from "react";
import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AvatarDemo = () => {
  return (
    <div>
      <Title level={4}>Avatar Demo</Title>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  );
};

export default AvatarDemo;
