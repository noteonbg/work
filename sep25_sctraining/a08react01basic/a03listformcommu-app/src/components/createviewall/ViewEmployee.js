import React, { useState } from 'react';

function ViewEmployee({ employees }) {
  const [searchId, setSearchId] = useState('');
  const [employee, setEmployee] = useState(null);

  const handleSearch = () => {
    const found = employees.find(emp => emp.id === parseInt(searchId));
    setEmployee(found || null);
  };

  return (
    <div>
      <h2>View Employee by ID</h2>
      <input
        type="number"
        placeholder="Enter ID"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {employee ? (
        <div>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
        </div>
      ) : (
        searchId && <p>Employee not found.</p>
      )}
    </div>
  );
}

export default ViewEmployee;
