import React from 'react';
import DrawingLine from './DrawingLine';

function Drawing({ lines }) {
  return (
    <> </>
    // <svg>
    //   {lines.map((line, index) => {
    //     // eslint-disable-next-line react/no-array-index-key
    //     console.log('[Drawing]', `M ${line.map((p) => `${p.get('x')} ${p.get('y')}`).join(' L ')}`);
    //     return <DrawingLine key={index} line={line} />;
    //   })}
    // </svg>
  );
}

export default Drawing;
