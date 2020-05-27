import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import { Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='container p-3 my-3 bg-primary text-white'>
        <h2>Hello, welcome to the COVID-19 symptom tracking application.</h2>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <form action='/login/patient' method='get'>
          <div className='col-auto'>
            <button
              type='submit'
              className='btn bg-dark btn-primary btn-lg text-white'
            >
              Login as Patient
            </button>
          </div>
        </form>
        <form action='/login/provider' method='get'>
          <div className='col-auto'>
            <button
              type='submit'
              className='btn bg-dark  btn-primary btn-lg text-white'
            >
              Login as Provider
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
