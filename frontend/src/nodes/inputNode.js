import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} typeLabel="Input" outputs={["out_value"]}>
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
          <select value={inputType} onChange={handleTypeChange} style={{ width: "100%", padding: 4, borderRadius: 4, border: "1px solid #ddd" }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
