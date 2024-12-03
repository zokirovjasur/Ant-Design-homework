import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Title } = Typography;

const CollapseDemo = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Title level={4}>Collapse Demo</Title>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel header="This is panel header 1" key="1">
          <p>Panel content 1</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>Panel content 2</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>Panel content 3</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CollapseDemo;
