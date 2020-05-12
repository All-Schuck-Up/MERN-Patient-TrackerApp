import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { registerPatient } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RegisterPatient = ({ registerPatient, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match', 'danger');
    } else {
      registerPatient({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/patient/login' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Register</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <h3 className='text-center'>WELCOME Future Patient</h3>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Email Address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='4'
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='ReEnter password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='4'
          />
        </div>
        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
          </div>
        </div>

        <button type='submit' className='btn btn-primary btn-block btn-lg'>
          Create Account
        </button>
        <p className='forgot-password text-right'>
          {/* Forgot <a href='#'>password?</a> */}
          Already have Account <Link to='/patient/login'>Login</Link>
        </p>
      </form>
    </Fragment>
  );
};

RegisterPatient.propTypes = {
  registerPatient: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerPatient })(RegisterPatient);
