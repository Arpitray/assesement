import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} typeLabel="Output" inputs={["in_value"]}>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            style={{ width: "100%", padding: 4, borderRadius: 4, border: "1px solid #ddd", marginBottom: 8 }}
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange} style={{ width: "100%", padding: 4, borderRadius: 4, border: "1px solid #ddd" }}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
