import React from "react";
import { Image, Typography } from "antd";

const { Title } = Typography;

const ImageDemo = () => {
  return (
    <div>
      <Title level={4}>Image Demo</Title>
      <Image
        width={200}
        src="https://techpearl.com/wp-content/uploads/2023/12/Vite-and-React-01.jpg"
      />
    </div>
  );
};

export default ImageDemo;
