import React, { useState } from 'react';

const initialPatients = [
  { id: 'P001', name: 'Alice Smith', age: 45, heartRate: 78, bloodPressure: '120/80', spo2: '98%' },
  { id: 'P002', name: 'Bob Johnson', age: 59, heartRate: 85, bloodPressure: '135/85', spo2: '96%' },
  { id: 'P003', name: 'Charlie Rose', age: 38, heartRate: 72, bloodPressure: '118/75', spo2: '99%' },
  { id: 'P004', name: 'Dana White', age: 50, heartRate: 95, bloodPressure: '140/90', spo2: '94%' },
];

function PatientTableWithSortFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
//searchTerm stores what the user types into the search box.
//sortConfig keeps track of which column is currently sorted and in which direction (asc or desc).



  // Filtering
  const filteredPatients = initialPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  



  // Sorting
  const sortedPatients = [...filteredPatients].sort((a, b) => {
    const { key, direction } = sortConfig;

    if (!key) return 0;

    let aValue = a[key];
    let bValue = b[key];

    // Convert age and heartRate to numbers if needed
    if (key === 'age' || key === 'heartRate') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mt-4">
      <h4>🩺 Patient Vitals Overview</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-hover table-bordered table-sm">
        <thead className="table-light">
          <tr>
            <th onClick={() => requestSort('id')} style={{ cursor: 'pointer' }}>Patient ID</th>
            <th onClick={() => requestSort('name')} style={{ cursor: 'pointer' }}>Name</th>
            <th onClick={() => requestSort('age')} style={{ cursor: 'pointer' }}>Age</th>
            <th onClick={() => requestSort('heartRate')} style={{ cursor: 'pointer' }}>Heart Rate (bpm)</th>
            <th>Blood Pressure</th>
            <th>SpO₂</th>
          </tr>
        </thead>
        <tbody>
          {sortedPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.heartRate}</td>
              <td>{patient.bloodPressure}</td>
              <td>{patient.spo2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTableWithSortFilter;
