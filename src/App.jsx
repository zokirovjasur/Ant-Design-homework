import React from "react";
import { Layout, Typography, Space } from "antd";

import {
  SelectDemo,
  SwitchDemo,
  AvatarDemo,
  BadgeDemo,
  CalendarDemo,
  CardDemo,
  CollapseDemo,
  ImageDemo,
  PopoverDemo,
  TooltipDemo,
  AlertDemo,
  TabsDemo,
  TourDemo,
  MessageDemo,
  ResultDemo,
} from "./components";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header>
        <Title level={2} style={{ color: "white", margin: 0 }}>
          Ant Design Components Demo
        </Title>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <SelectDemo />
          <SwitchDemo />
          <AvatarDemo />
          <BadgeDemo />
          <CalendarDemo />
          <CardDemo />
          <CollapseDemo />
          <ImageDemo />
          <PopoverDemo />
          <TooltipDemo />
          <AlertDemo />
          <TabsDemo />
          <TourDemo />
          <MessageDemo />
          <ResultDemo />
        </Space>
      </Content>
    </Layout>
  );
}

export default App;
