import React from 'react';
//passing multiple properties 

function PatientInfo({ name, age, condition }) {
  return (
    <div>
      <h3>Patient Info:</h3>
      <ol>
        <li>Name: {name}</li>  
        <li>Age: {age}</li>
        <li>Condition: {condition}</li>
      </ol>
    </div>
  );
}

export default PatientInfo;
