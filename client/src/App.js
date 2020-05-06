import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Landing from './components/Landing.component';
import Navbar from "./components/Nbar.component";
import CreateSymptom from "./components/Create-patient-symptom.component";
import Login from "./components/Login.component";
import WelcomeProvider from './components/WelcomeProvider.component';
import PatientSearch from './components/PatientSearch.component';
import PatientAlertList from './components/PatientAlertList.component';
import PatientImmediateAttList from './components/PatientImmediateAttList.component';


function App() {
  return (
    <Router>
        <div className="container">
          <br/>
          <Landing />
      
          <CreateSymptom/>
          <WelcomeProvider/>
          <PatientSearch/>
          <PatientAlertList/>
          <PatientImmediateAttList/>
      
          
            
        </div>
    </Router>
  );
}

export default App;