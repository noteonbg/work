import React, { useState, useEffect } from 'react';

function VdPatientVitals() {
  const [heartRate, setHeartRate] = useState(72);

  // Simulate heart rate update every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate a random heart rate between 60 and 100
      const newRate = Math.floor(Math.random() * 40) + 60;
      setHeartRate(newRate);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>🫀 Patient Vitals</h2>
      <p>Heart Rate: <strong>{heartRate} bpm</strong></p>
    </div>
  );
}

export default VdPatientVitals;


/*

Initial Render:

React renders the component with initial heartRate = 72.
It creates a virtual DOM representation.

On Update (every 3s):
setHeartRate(newRate) triggers an update.
React compares the new virtual DOM to the previous one
 (this is called diffing).

React sees that only the heart rate number has changed.

It tells the real DOM: “Just update that text inside the
 <strong> tag — nothing else.”

*/