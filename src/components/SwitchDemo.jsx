import React from "react";
import { Switch, Typography } from "antd";

const { Title } = Typography;

const SwitchDemo = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div>
      <Title level={4}>Switch Demo</Title>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
};

export default SwitchDemo;
