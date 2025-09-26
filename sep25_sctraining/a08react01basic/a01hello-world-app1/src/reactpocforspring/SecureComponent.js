import React, { useState } from 'react';
import { addNumbers, multiplyNumbers } from '../services/calculatorApi';

function SecureComponent() {
  const [addResult, setAddResult] = useState(null);
  const [mulResult, setMulResult] = useState(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleAdd = async () => {
    const result = await addNumbers(5, 3, credentials.username, credentials.password);
    setAddResult(result);
  };

  const handleMultiply = async () => {
    const result = await multiplyNumbers(5, 3);
    setMulResult(result);
  };

  return (
    <div>
      <h2>Secure Calculator</h2>

      <div>
        <input
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </div>

      <button onClick={handleAdd}>Add (Secure)</button>
      <p>Addition Result: {addResult}</p>

      <button onClick={handleMultiply}>Multiply (Open)</button>
      <p>Multiplication Result: {mulResult}</p>
    </div>
  );
}

export default SecureComponent;
