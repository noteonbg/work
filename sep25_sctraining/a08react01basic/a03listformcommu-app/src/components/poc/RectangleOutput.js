import React from 'react';

function RectangleOutput({ length, breadth, showArea, showPerimeter }) {
  const area = length * breadth;
  const perimeter = 2 * (length + breadth);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Results:</h2>
      {showArea && <p>Area: {area}</p>}
      {showPerimeter && <p>Perimeter: {perimeter}</p>}
    </div>
  );
}

export default RectangleOutput;
