import React, { useState } from 'react';

function PatientStatus() {
  const [status, setStatus] = useState("Stable");

  const toggleStatus = () => {
    setStatus(prevStatus => (prevStatus === "Stable" ? "Critical" : "Stable"));
  };

  return (
    <div className="card p-3 mt-4">
      <h3>Patient Status</h3>
      <p>Status: <strong>{status}</strong></p>
      <button className="btn btn-primary" onClick={toggleStatus}>
        Toggle Status
      </button>
    </div>
  );
}

export default PatientStatus;
