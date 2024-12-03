import React from "react";
import { Popover, Button, Typography } from "antd";

const { Title } = Typography;

const PopoverDemo = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div>
      <Title level={4}>Popover Demo</Title>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  );
};

export default PopoverDemo;
