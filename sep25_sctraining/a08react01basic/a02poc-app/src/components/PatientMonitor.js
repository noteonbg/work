import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PatientMonitor(props) {
  
  const [temperature, setTemperature] = useState(99.9); 


  //in our component there is a dynamic part called temparature
  // to change it we need to use a function setTemporatur
  // default value of setTemperature is 98.6 

  const increaseTemp = () => setTemperature(prev => parseFloat((prev + 0.5).toFixed(1)));
  const decreaseTemp = () => setTemperature(prev => parseFloat((prev - 0.5).toFixed(1)));
// we are assinging function to increaseTemp and we are assingin to decreaet temp


  return (
    <div className="card p-3 mt-4">
      <h3>Monitoring: {props.name}</h3>
      <p>Temperature: <strong>{temperature} °F</strong></p>
      <button className="btn btn-danger me-2" onClick={increaseTemp}>Increase</button>
      <button className="btn btn-primary" onClick={decreaseTemp}>Decrease</button>
    </div>
  );
}

// ✅ Prop validation
PatientMonitor.propTypes = {
  name: PropTypes.string.isRequired,
};

// ✅ Default prop value
PatientMonitor.defaultProps = {
  name: 'Unknown Patient',
};

export default PatientMonitor;
