import React from "react";
import { Button, message, Typography } from "antd";

const { Title } = Typography;

const MessageDemo = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("This is a normal message");
  };

  return (
    <div>
      <Title level={4}>Message Demo</Title>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </div>
  );
};

export default MessageDemo;
