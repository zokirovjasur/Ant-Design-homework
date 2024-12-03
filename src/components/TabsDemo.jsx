import React from "react";
import { Tabs, Typography } from "antd";

const { TabPane } = Tabs;
const { Title } = Typography;

const TabsDemo = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Title level={4}>Tabs Demo</Title>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
