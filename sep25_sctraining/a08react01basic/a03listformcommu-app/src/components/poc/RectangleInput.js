import React from 'react';

function RectangleInput({
  length,
  setLength,
  breadth,
  setBreadth,
  showArea,
  setShowArea,
  showPerimeter,
  setShowPerimeter,
}) {
  return (
    <div>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <br />
      <label>
        Breadth:
        <input
          type="number"
          value={breadth}
          onChange={(e) => setBreadth(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={showArea}
          onChange={(e) => setShowArea(e.target.checked)}
        />
        Show Area
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={showPerimeter}
          onChange={(e) => setShowPerimeter(e.target.checked)}
        />
        Show Perimeter
      </label>
    </div>
  );
}

export default RectangleInput;
