import React, { useState } from 'react';

function PatientVitals() {

  //welcome to javascript.
  const [heartRate, setHeartRate] = useState(72); // Initial heart rate
/*
useSTate function is called .. with  value
useState function returns an array which contains the value 72
in the first element..
second element of the array is a function which can be used
to chagne the first element.. 
we are giving a name called heartRate to the firstelement of the array
we are calling the function setHeartRate for second element
of the array.
obviously setHeart will chang ethe heart..

practically..
there is a vairable heart rate in component we should
not change it directly we should change it via setheartrate
function only.. becuase react tells when you want changes
let me know.





*/


 

  //observe if you want to change the state based on earlier state please pass function and dont change directly
  //byheart this..
  const increaseRate = () => {
  

    setHeartRate(prev => prev + 5);
// if you define the function at time of calling the function
// it means you are assinging the function.


  };

  //when the function increaseRate is called..
  //SetHeartRate is also called.
// what is input argument to setHeartRate..

  /*
we are defining an anonmous function and assigning it
to variable


  */

  const decreaseRate = () => {
    setHeartRate(prev => Math.max(30, prev - 5)); // prevent dangerously low rate
  };





  return (
    <div className="card p-3 mt-4">
      <h3>Patient Vitals</h3>
      <p>Current Heart Rate: <strong>{heartRate} bpm</strong></p>
      <button className="btn btn-success me-2" onClick={increaseRate}>Increase</button>
      <button className="btn btn-danger" onClick={decreaseRate}>Decrease</button>
    </div>
  );
}

export default PatientVitals;
