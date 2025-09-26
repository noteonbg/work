import React from 'react';

function PatientCard({ id, name, status, onStatusChange }) {
  const handleDischarge = () => {
    // Call the parent's function to update status
    onStatusChange('Discharged');
  };

  return (
    <div className="card mt-3 p-3 border">
      <h5>🧍 Patient Info</h5>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Status:</strong> {status}</p>

      {status !== 'Discharged' && (
        <button className="btn btn-sm btn-danger" onClick={handleDischarge}>
          Mark as Discharged
        </button>
      )}
    </div>
  );
}

export default PatientCard;
