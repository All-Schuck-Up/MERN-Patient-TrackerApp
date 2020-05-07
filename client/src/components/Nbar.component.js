import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      
      
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Welcome {this.props.name}</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/patient/:id" className="nav-link">Go to Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/logout" className="nav-link">Log Out</Link>
          </li>
         
        </ul>
        </div>
      </nav>
    );
  }
}