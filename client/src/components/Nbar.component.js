import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { user }, logout }) => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>Welcome {user && user.name}</div>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/patient/:id/profile' className='nav-link'>
              Profile
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/' className='nav-link' onClick={logout} href='#!'>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.prototypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
