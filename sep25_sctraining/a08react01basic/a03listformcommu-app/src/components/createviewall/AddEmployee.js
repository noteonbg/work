import React, { useState } from 'react';

function AddEmployee({ employees, setEmployees }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleAdd = () => {
    const newEmployee = {
      id: employees.length + 1,
      name,
      position
    };
    setEmployees([...employees, newEmployee]);
    setName('');
    setPosition('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={e => setPosition(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddEmployee;
