import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPatient = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCSESS');
  };

  return (
    <Fragment>
      <form className='loginForm' onSubmit={(e) => onSubmit(e)}>
        <h3 className='text-center'>WELCOME Patient</h3>
        <h4 className='text-center'>Sign Into Your Account</h4>
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
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <button type='submit' className='btn btn-primary btn-block btn-lg'>
          Submit
        </button>
        <p className='forgot-password text-right'>
          {/* Forgot <a href='#'>password?</a> */}
          Dont have Account <Link to='/patient/register'>Register</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default LoginPatient;
