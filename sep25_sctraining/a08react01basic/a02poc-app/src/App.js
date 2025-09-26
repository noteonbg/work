import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import DoctorName from './components/DoctorName';
import AppointmentDetails from './components/AppointmentDetails';
import PatientInfo from './components/PatientInfo';
import PatientVitals from './components/PatientVitals'
import MedicationAlert from './components/MedicationAlert'
import DoctorGreeting from './components/DoctorGreeting';
import PatientGreeting from './components/PatientGreeting';
import PatientMonitor from './components/PatientMonitor';
import VdPatientVitals from './components/VdPatientVitals';



function App() {
  return (
    <div className="App">
      <HelloWorld />
      <DoctorName name="Dr. ABC" freak="pqr" junk="abc"/>
      <AppointmentDetails date="2025-08-05" time="10:30 AM" />
      <PatientInfo name="Def" age={45} condition="terminology Attack" />
      <PatientVitals />
      <MedicationAlert />
      <DoctorGreeting name="Dr. Ramesh" />
      <DoctorGreeting /> {/* No name passed — will use default */}
      <PatientGreeting name="Suresh" />
      <PatientMonitor name="mahesh" />
      <PatientMonitor /> {/* Uses default name */}
      <VdPatientVitals/>
      <DoctorName name="Dr. PQR" freak="pqr" junk="abc"/>


    </div>
  );
}

export default App;

