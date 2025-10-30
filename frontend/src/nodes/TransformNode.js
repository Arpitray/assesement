import React from "react";
import BaseNode from "./BaseNode";
const TransformNode = ({ id }) => (
  <BaseNode id={id} typeLabel="Transform" inputs={["in"]} outputs={["out"]}>
    <div style={{ fontSize: 13 }}>Transforms data shape</div>
  </BaseNode>
);
export default TransformNode;
