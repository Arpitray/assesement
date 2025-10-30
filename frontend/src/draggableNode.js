// draggableNode.js

import React from 'react';
import styled from 'styled-components';

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <StyledWrapper>
        <div className="container">
          <div
            className="button type--C"
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = 'grab')}
            style={{ cursor: 'grab' }}
            draggable
          >
            <div className="button__line" />
            <div className="button__line" />
            <span className="button__text">{label.toUpperCase()}</span>
            <div className="button__drow1" />
            <div className="button__drow2" />
          </div>
        </div>
      </StyledWrapper>
    );
  };

const StyledWrapper = styled.div`
  .type--A {
    --line_color: #555555;
    --back_color: #ffecf6;
  }
  .type--B {
    --line_color: #1b1919;
    --back_color: #e9ecff;
  }
  .type--C {
    --line_color: #00135c;
    --back_color: #defffa;
  }
  .button {
    position: relative;
    z-index: 0;
    width: 140px;
    height: 40px;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    color: var(--line_color);
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin: 5px;
  }
  .button__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .button::before,
  .button::after,
  .button__text::before,
  .button__text::after {
    content: "";
    position: absolute;
    height: 3px;
    border-radius: 2px;
    background: var(--line_color);
    transition: all 0.5s ease;
  }
  .button::before {
    top: 0;
    left: 40px;
    width: calc(100% - 40px * 2 - 12px);
  }
  .button::after {
    top: 0;
    right: 40px;
    width: 6px;
  }
  .button__text::before {
    bottom: 0;
    right: 40px;
    width: calc(100% - 40px * 2 - 12px);
  }
  .button__text::after {
    bottom: 0;
    left: 40px;
    width: 6px;
  }
  .button__line {
    position: absolute;
    top: 0;
    width: 40px;
    height: 100%;
    overflow: hidden;
  }
  .button__line::before {
    content: "";
    position: absolute;
    top: 0;
    width: 150%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 300px;
    border: solid 3px var(--line_color);
  }
  .button__line:nth-child(1),
  .button__line:nth-child(1)::before {
    left: 0;
  }
  .button__line:nth-child(2),
  .button__line:nth-child(2)::before {
    right: 0;
  }
  .button:hover {
    letter-spacing: 4px;
  }
  .button:hover::before,
  .button:hover .button__text::before {
    width: 6px;
  }
  .button:hover::after,
  .button:hover .button__text::after {
    width: calc(100% - 40px * 2 - 12px);
  }
  .button__drow1,
  .button__drow2 {
    position: absolute;
    z-index: -1;
    border-radius: 12px;
    transform-origin: 12px 12px;
  }
  .button__drow1 {
    top: -12px;
    left: 30px;
    width: 24px;
    height: 0;
    transform: rotate(30deg);
  }
  .button__drow2 {
    top: 32px;
    left: 55px;
    width: 24px;
    height: 0;
    transform: rotate(-127deg);
  }
  .button__drow1::before,
  .button__drow1::after,
  .button__drow2::before,
  .button__drow2::after {
    content: "";
    position: absolute;
  }
  .button__drow1::before {
    bottom: 0;
    left: 0;
    width: 0;
    height: 24px;
    border-radius: 12px;
    transform-origin: 12px 12px;
    transform: rotate(-60deg);
  }
  .button__drow1::after {
    top: -8px;
    left: 32px;
    width: 0;
    height: 24px;
    border-radius: 12px;
    transform-origin: 12px 12px;
    transform: rotate(69deg);
  }
  .button__drow2::before {
    bottom: 0;
    left: 0;
    width: 0;
    height: 24px;
    border-radius: 12px;
    transform-origin: 12px 12px;
    transform: rotate(-146deg);
  }
  .button__drow2::after {
    bottom: 20px;
    left: -30px;
    width: 0;
    height: 24px;
    border-radius: 12px;
    transform-origin: 12px 12px;
    transform: rotate(-262deg);
  }
  .button__drow1,
  .button__drow1::before,
  .button__drow1::after,
  .button__drow2,
  .button__drow2::before,
  .button__drow2::after {
    background: var(--back_color);
  }
  .button:hover .button__drow1 {
    animation: drow1 ease-in 0.06s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow1::before {
    animation: drow2 linear 0.08s 0.06s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow1::after {
    animation: drow3 linear 0.03s 0.14s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2 {
    animation: drow4 linear 0.06s 0.2s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2::before {
    animation: drow3 linear 0.03s 0.26s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2::after {
    animation: drow5 linear 0.06s 0.32s;
    animation-fill-mode: forwards;
  }
  @keyframes drow1 {
    0% {
      height: 0;
    }
    100% {
      height: 60px;
    }
  }
  @keyframes drow2 {
    0% {
      width: 0;
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    11% {
      opacity: 1;
    }
    100% {
      width: 80px;
    }
  }
  @keyframes drow3 {
    0% {
      width: 0;
    }
    100% {
      width: 50px;
    }
  }
  @keyframes drow4 {
    0% {
      height: 0;
    }
    100% {
      height: 80px;
    }
  }
  @keyframes drow5 {
    0% {
      width: 0;
    }
    100% {
      width: 80px;
    }
  }

  .container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
  