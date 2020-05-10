import React, { Component } from 'react';
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

      <div className="mainBody">
        <div className="container">
          <br/>
          <Route exact path="/">
              <Landing />
          </Route> 
      </div>
      <div className="container">
          <Route exact path="/patient/login">
              <Login />
          </Route>
       </div>
      <div className="container">
          <Route exact path="/provider/login">
              <LoginProvider />
          </Route>
      </div>
      <div className="container">
         <Route exact path="/patient/login/:id">
              <Navbar />
              <CreateSymptom />
          </Route>
      </div>
      <div className="container">
        <Route exact path="/patient/:id/profile">
              <Navbar />
              <PatientProfile />
          </Route>
      </div>
      <div className="container">
         <Route exact path="/provider/login/:id">
              <Navbar />
              <WelcomeProvider />
              <PatientSearch />
              <PatientAlertList />
              <PatientImmediateAttList />
          </Route>
      </div>      
     </div>  
    </Router>
  );
}
export default App;
