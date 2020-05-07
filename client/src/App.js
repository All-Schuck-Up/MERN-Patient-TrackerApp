import React, { useState }from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Landing from './components/Landing.component';
import Login from "./components/Login.component";
import LoginProvider from "./components/LoginProvider.component";
import Navbar from "./components/Nbar.component";
import CreateSymptom from "./components/Create-patient-symptom.component";
import PatientProfile from "./components/PatientProfile.component";
import WelcomeProvider from './components/WelcomeProvider.component';
import PatientSearch from './components/PatientSearch.component';
import PatientAlertList from './components/PatientAlertList.component';
import PatientImmediateAttList from './components/PatientImmediateAttList.component';


function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <br/>
          <Route path="/">
              <Landing />
          </Route>
        </div>
      <div className="container">
          <Route path="/patient/login">
              <Login />
          </Route>
       </div>
          <Route path="/provider/login">
              <LoginProvider />
          </Route>
         <Route path="/patient/:id">
              <Navbar />
              <CreateSymptom />
          </Route>
        <Route path="/patient/:id/profile">
              <Navbar />
              <PatientProfile />
          </Route>
         <Route path="/provider/:id">
              <Navbar />
              <WelcomeProvider />
              <PatientSearch />
              <PatientAlertList />
              <PatientImmediateAttList />
          </Route>
            
        </div>
     
    </Router>
  );
}
export default App;