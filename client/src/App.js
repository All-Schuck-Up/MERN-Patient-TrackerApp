import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./Components/Nbar.component";
import createSympotom from "./Components/Create-patient-symptom.component";
import login from "./Components/Login.component";
import Landing from './Components/Landing';
//"title" easy sample to be deleted
import Title from './Components/Title';

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
