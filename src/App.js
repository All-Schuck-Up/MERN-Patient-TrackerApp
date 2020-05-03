import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./components/nbar.component";

import createSympotom from "./components/create-patient-symptom.component";

import login from "./components/login.component";

import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
        <Route path="/login" component={login} />
        <Route path="/patient/:id" component={createSympotom} />
             </div>
    </Router>
  );
}

export default App;
