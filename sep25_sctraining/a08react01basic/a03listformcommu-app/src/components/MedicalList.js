import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const medicalData = [
  { id: 1, name: 'Aspirin', type: 'Medication', description: 'Pain reliever' },
  { id: 2, name: 'Amoxicillin', type: 'Antibiotic', description: 'Treats infections' },
  { id: 3, name: 'Blood Test', type: 'Procedure', description: 'Diagnostic test' },
  { id: 4, name: 'John Doe', type: 'Patient', description: 'Age 45, diabetic' },
];

//below line is an exmple of function assignment.
const MedicalList = () => {
  return (
    <div className="container" style={{ maxWidth: '700px' }}>
      <h2 className="my-4 text-center">Medical Records</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {medicalData.map(({ id, name, type, description }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{type}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalList;
