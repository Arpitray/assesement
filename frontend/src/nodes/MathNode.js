import React from "react";
import BaseNode from "./BaseNode";

export const MathNode = ({ id, data }) => {
	return (
		<BaseNode id={id} typeLabel="Math" inputs={["a","b"]} outputs={["sum"]}>
			<div style={{ fontSize: 13 }}>Adds two inputs: a + b - sum</div>
		</BaseNode>
	);
};

export default MathNode;
