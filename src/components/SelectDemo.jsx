import React from "react";
import { Select, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;

const SelectDemo = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Title level={4}>Select Demo</Title>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default SelectDemo;
