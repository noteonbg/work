// to show default properties for props

import React from 'react';


// we are destructuring an oject, we are picking up a property
//called name from the object, in case name is not given
// we assume the value for name as Dr unknown.
function DoctorGreeting({ name = "Dr. Unknown" }) {
  return <h3>Welcome, {name}!</h3>;
}

export default DoctorGreeting;
