import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MedicalListFromJson() {
  const [medicalData, setMedicalData] = useState([]);

  useEffect(() => {
    fetch('/medicalData.json')  
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then(data => setMedicalData(data))
      .catch(error => console.error('Error loading medical data:', error));
  }, []);

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
}

export default MedicalListFromJson;