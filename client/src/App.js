import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Redux
import { connect } from 'react-redux';
import store from './store';
import PropTypes from 'prop-types';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
import Landing from './components/Landing.component';
import LoginPatient from './components/auth/LoginPatient.component';
import RegisterPatient from './components/auth/RegisterPatient.component';
import LoginProvider from './components/auth/LoginProvider.component';
import RegisterProvider from './components/auth/RegisterProvider.component';
import Navbar from './components/Nbar.component';
import CreateSymptom from './components/Create-patient-symptom.component';
import PatientProfile from './components/PatientProfile.component';
import ProviderProfile from './components/ProviderProfile';
import ProviderNote from './components/ProviderNote.component';
import { getCurrentProfile } from './actions/profile';

// check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ user, profile }) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch(getCurrentProfile());
  }, [getCurrentProfile]);

  console.log(user);
  console.log(profile);

  return (
    <Router>
      <div className='mainBody'>
        <div className='container'>
          <br />
          <Route exact path='/'>
            <Landing />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/patient/login'>
            <LoginPatient />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/patient/register'>
            <RegisterPatient />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/provider/login'>
            <LoginProvider />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/provider/register'>
            <RegisterProvider />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/patient/login/:id'>
            <Navbar />
            <CreateSymptom
              patientId={profile && profile._id}
              lastName='temp user name'
            />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/patient/:id/profile'>
            <Navbar name={profile && profile.firstName} />
            <PatientProfile isDoctor={true} />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/patient/doctorNotes'>
            <Navbar name='Provider Name' />
            <ProviderNote
              patientID={profile && profile._id}
              patientLastName={profile && profile.lastName}
            />
          </Route>
        </div>
        <div className='container'>
          <Route exact path='/provider/login/:id'>
            <Navbar name='Provider Name' />
            <ProviderProfile />
          </Route>
        </div>
      </div>
    </Router>
  );
}

App.prototypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getCurrentProfile })(App);
