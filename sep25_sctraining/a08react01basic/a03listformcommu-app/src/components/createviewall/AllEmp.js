import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import AllEmployees from './AllEmployees';

function AllEmp() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice", position: "Developer" },
    { id: 2, name: "Bob", position: "Designer" }
  ]);

  return (
    <div>
      <h1>Employee Manager</h1>
      <AddEmployee setEmployees={setEmployees} employees={employees} />
      <ViewEmployee employees={employees} />
      <AllEmployees employees={employees} />
    </div>
  );
}

export default AllEmp;
