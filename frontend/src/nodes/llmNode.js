import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      data={data} 
      typeLabel="LLM" 
      inputs={["in_system", "in_prompt"]} 
      outputs={["out_response"]}
    >
      <div style={{ padding: 8, textAlign: 'center' }}>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
