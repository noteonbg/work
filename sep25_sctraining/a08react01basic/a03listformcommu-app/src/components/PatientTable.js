import React from 'react';

const patients = [
  {
    id: 'P001',
    name: 'Ramesh',
    age: 45,
    heartRate: 78,
    bloodPressure: '120/80',
    spo2: '98%',
  },
  {
    id: 'P002',
    name: 'Suresh',
    age: 59,
    heartRate: 85,
    bloodPressure: '135/85',
    spo2: '96%',
  },
  {
    id: 'P003',
    name: 'Mahesh',
    age: 38,
    heartRate: 72,
    bloodPressure: '118/75',
    spo2: '99%',
  },
];

function PatientTable() {
  return (
    <div className="container mt-4">
      <h4>🩺 Patient Vitals Overview</h4>
      <table className="table table-hover table-bordered table-sm mt-3">
        <thead className="table-light">
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Heart Rate (bpm)</th>
            <th>Blood Pressure</th>
            <th>SpO₂</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
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

export default PatientTable;


/*

Compact (table-sm)
Hoverable rows (table-hover)
Bordered on all cells (table-bordered)
Styled with Bootstrap out of the box

*/