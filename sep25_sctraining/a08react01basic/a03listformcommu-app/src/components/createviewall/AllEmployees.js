import React from 'react';

function AllEmployees({ employees }) {
  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            ID: {emp.id} - {emp.name} ({emp.position})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEmployees;
