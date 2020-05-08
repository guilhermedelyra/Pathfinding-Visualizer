import React from 'react';
import './Node.css';

export default function Node(props) {
  const {col, type, onMouseDown, onMouseEnter, onMouseUp, row} = props;

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${type}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}></div>
  );
}
