import React from 'react';
import DrawingLine from './DrawingLine';
import * as Classes from './DrawArea.module.css';

function Drawing({ lines }) {
  return (
    <svg className={Classes.drawing}>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing;
