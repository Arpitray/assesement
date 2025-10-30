import React from "react";
import BaseNode from "./BaseNode";
const ImageNode = ({ id }) => (
  <BaseNode id={id} typeLabel="Image" outputs={["out"]}>
    <div style={{ fontSize: 13 }}>Image processing node</div>
  </BaseNode>
);
export default ImageNode;
