import React from "react";
import { Tooltip, Button, Typography } from "antd";

const { Title } = Typography;

const TooltipDemo = () => {
  return (
    <div>
      <Title level={4}>Tooltip Demo</Title>
      <Tooltip title="prompt text">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipDemo;
