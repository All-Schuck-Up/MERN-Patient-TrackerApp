import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./components/Nbar.component";
import createSympotom from "./components/Create-patient-symptom.component";
import login from "./components/Login.component";
import Landing from './components/Landing.component';
//"title" easy sample to be deleted
import Title from './components/Title.component';

function App() {
  return (
    <Router>
        <div className="container">
          <br/>
          <Title />
          <Landing />
            
        </div>
    </Router>
  );
}

export default App;
