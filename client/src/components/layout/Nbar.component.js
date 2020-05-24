import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { user }, logout }) => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <Link to='/' className='navbar-brand'>
        Welcome {user && user.name}!
      </Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/profile/:id' className='nav-link'>
              Profile
            </Link>
          </li>
          <li>
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
