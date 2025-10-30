import React from "react";
import BaseNode from "./BaseNode";
const ApiNode = ({ id }) => (
  <BaseNode id={id} typeLabel="API Request" outputs={["out"]}>
    <div style={{ fontSize: 13 }}>Mock API call node</div>
  </BaseNode>
);
export default ApiNode;
