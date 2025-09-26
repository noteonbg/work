// App.js
import React, { useState } from 'react';
import RectangleInput from './RectangleInput';
import RectangleOutput from './RectangleOutput';

function Rectpoc() {
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [showArea, setShowArea] = useState(false);
  const [showPerimeter, setShowPerimeter] = useState(false);

  return (
    <div>
      <h1>Rectangle when in doubt ....</h1>
      <RectangleInput
        length={length}
        setLength={setLength}
        breadth={breadth}
        setBreadth={setBreadth}
        showArea={showArea}
        setShowArea={setShowArea}
        showPerimeter={showPerimeter}
        setShowPerimeter={setShowPerimeter}
      />
      <RectangleOutput
        length={Number(length)}
        breadth={Number(breadth)}
        showArea={showArea}
        showPerimeter={showPerimeter}
      />
    </div>
  );
}

export default Rectpoc;
