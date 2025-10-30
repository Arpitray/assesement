import React from "react";
import BaseNode from "./BaseNode";
const LogicNode = ({ id }) => (
  <BaseNode id={id} typeLabel="Logic" inputs={["cond"]} outputs={["true","false"]}>
    <div style={{ fontSize: 13 }}>Branches based on condition</div>
  </BaseNode>
);
export default LogicNode;
