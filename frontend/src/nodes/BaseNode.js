import React from "react";
import { Handle, Position } from "reactflow";
import "./nodeStyles.css";

/**
 * BaseNode props:
 * - id: node id
 * - data: node data object
 * - typeLabel: string label to show at top
 * - inputs: array of input handle ids (strings)
 * - outputs: array of output handle ids (strings)
 * - children: node-specific UI
 */
const BaseNode = ({ id, data, typeLabel, inputs = [], outputs = [], children }) => {
  // Force re-render
  const inputHandles = React.useMemo(() => inputs, [JSON.stringify(inputs)]);
  const outputHandles = React.useMemo(() => outputs, [JSON.stringify(outputs)]);
  
  return (
    <div className="base-node">
      <div className="node-header">{typeLabel}</div>

      {inputHandles.map((handleId, idx) => {
        return (
          <Handle
            key={`${id}-input-${handleId}`}
            id={handleId}
            type="target"
            position={Position.Left}
            style={{ top: 50 + idx * 30 }}
          />
        );
      })}

      <div className="node-body">{children}</div>

      {outputHandles.map((handleId, idx) => {
        return (
          <Handle
            key={`${id}-output-${handleId}`}
            id={handleId}
            type="source"
            position={Position.Right}
            style={{ top: 50 + idx * 30 }}
          />
        );
      })}
    </div>
  );
};

export default BaseNode;
