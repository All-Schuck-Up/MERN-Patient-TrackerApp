import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ logout }) => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <Link to='/' className='navbar-brand'>
        Welcome PATIENT NAME
      </Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/patient/:id/profile' className='nav-link'>
              Profile
            </Link>
          </li>
          <a onClick={logout} href='#!'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                Logout
              </Link>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navbar);
