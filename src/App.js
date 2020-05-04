import React from 'react';
import './App.css';
import WelcomeProvider from './components/WelcomeProvider.component';
import PatientSearch from './components/PatientSearch.component';
import PatientAlertList from './components/PatientAlertList.component';
import PatientImmediateAttList from './components/PatientImmediateAttList.component';

function App() {
  return (
    <div className="App">
      <header className="AD410 Patient Symptom Tracking App"></header>
      <WelcomeProvider/>
      <PatientSearch/>
      <PatientAlertList/>
      <PatientImmediateAttList/>
    </div>
  );
}

export default App;
