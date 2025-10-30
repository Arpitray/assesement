import React, { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [vars, setVars] = useState([]);
  const taRef = useRef(null);

  // Auto-resize
  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [text]);

  // Parse variables
  useEffect(() => {
    const regex = /{{\s*([\w]+)\s*}}/g;
    const found = new Set();
    let m;
    while ((m = regex.exec(text)) !== null) {
      found.add(m[1]);
    }
    // Prefix vars
    const newVars = Array.from(found).map(varName => `var_${varName}`);
    setVars(newVars);
  }, [text]);

  return (
    <BaseNode 
      key={`text-${id}-${vars.join('-')}`} // Force re-render
      id={id} 
      data={data} 
      typeLabel="Text" 
      inputs={vars} 
      outputs={["out_text"]}
    >
      <textarea
        ref={taRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text. Use {{ variable }} to create handles."
        style={{
          width: "100%",
          minHeight: 40,
          resize: "none",
          padding: 8,
          borderRadius: 6,
          border: "1px solid #e6e6e6",
          fontSize: 13,
          lineHeight: "1.3",
          overflow: "hidden"
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
        Variables: {vars.length ? vars.map(v => v.replace('var_', '')).join(", ") : "none"}
      </div>
    </BaseNode>
  );
};

export default TextNode;
