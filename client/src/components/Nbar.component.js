import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
    super(props);
    this.state = {
      //firstName:props.firstName,
        name:props.firstName  //name is in user db while the rest has firstName
    };
    
  }
    
  render() {
    return (
      
      
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Welcome {this.props.lastName}</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/patient/:id/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Logout</Link>
          </li>
         
        </ul>
        </div>
      </nav>
    );
  }
}