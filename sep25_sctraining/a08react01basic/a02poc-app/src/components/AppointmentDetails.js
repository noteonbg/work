import React from 'react';

// observe properteis being passed and destructured also..

function AppointmentDetails({ date, time }) {
  return (
    <p>
      Appointment Date: <strong>{date}</strong><br />
      Time: <strong>{time}</strong>
    </p>
  );
}

export default AppointmentDetails;
