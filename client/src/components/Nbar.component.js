import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      
      
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Welcome PATIENT NAME</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/patient/:id" className="nav-link">Create Patient Symptom</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login in</Link>
          </li>
         
        </ul>
        </div>
      </nav>
    );
  }
}