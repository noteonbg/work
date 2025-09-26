import React, { useState } from 'react';

function Multiply() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  return (
    <div>
      <h2>Multiply Two Numbers</h2>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      ×
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <button onClick={handleMultiply}>Multiply</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Multiply;
