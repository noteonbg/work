import React from 'react';

//reading props and ensuring that we are not destructuring reading things from values...

function PatientGreeting(crops) {
  return <h3>Welcome, {crops.name}!</h3>;
}

export default PatientGreeting;
