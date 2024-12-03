import React from "react";
import { Calendar, Typography } from "antd";

const { Title } = Typography;

const CalendarDemo = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div>
      <Title level={4}>Calendar Demo</Title>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarDemo;
