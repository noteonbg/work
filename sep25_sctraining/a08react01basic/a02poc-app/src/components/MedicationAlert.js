// using state example

import React, { useState } from 'react';

function MedicationAlert() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Medication has been administered.');
  };

  return (
    <div className="card p-3 mt-4">
      <h3>Medication Alert</h3>
      <button className="btn btn-warning" onClick={handleClick}>
        Give Medication
      </button>
      {message && <p className="mt-3 text-success">{message}</p>}
    </div>
  );
}

export default MedicationAlert;
