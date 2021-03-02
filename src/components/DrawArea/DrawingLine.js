import React from 'react';
import * as Classes from './DrawArea.module.css';

function DrawingLine({ line }) {
  const pathData = `M ${
     line
      .map((p) => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(' L ')}`;

  return <path className={Classes.path} d={pathData} />;
}

export default DrawingLine;
