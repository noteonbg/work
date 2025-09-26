import React, { useState } from "react";
import { calculateRectangle } from "../services/rectangleService";

const RectangleForm = () => {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await calculateRectangle(length, breadth);
      setResult(data);
      setError("");
    } catch (errMessage) {
      setError(errMessage);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Rectangle Calculator</h2>
      <div>
        <label>Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>Breadth:</label>
        <input
          type="number"
          value={breadth}
          onChange={(e) => setBreadth(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Calculate</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <p><strong>Area:</strong> {result.area}</p>
          <p><strong>Perimeter:</strong> {result.perimeter}</p>
        </div>
      )}
    </div>
  );
};

export default RectangleForm;
