import React, { useState } from "react";
import { Tour, Button, Typography } from "antd";

const { Title } = Typography;

const TourDemo = () => {
  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: "Upload File",
      description: "Put your files here.",
      target: () => document.getElementById("tourTarget"),
    },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => document.getElementById("tourTarget2"),
    },
  ];

  return (
    <div>
      <Title level={4}>Tour Demo</Title>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <div id="tourTarget" style={{ marginTop: 8 }}>
        Upload File
      </div>
      <div id="tourTarget2" style={{ marginTop: 8 }}>
        Save
      </div>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  );
};

export default TourDemo;
