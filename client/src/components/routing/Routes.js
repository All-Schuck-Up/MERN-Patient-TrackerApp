import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import PrivateRoute from '../routing/PrivateRoute';
import RegisterPatient from '../auth/RegisterPatient.component';
import RegisterProvider from '../auth/RegisterProvider.component';
import LoginPatient from '../auth/LoginPatient.component';
import LoginProvider from '../auth/LoginProvider.component';
import Navbar from '../Nbar.component';
import CreateSymptom from '../Create-patient-symptom.component';
import PatientProfile from '../PatientProfile.component';
import ProviderProfile from '../ProviderProfile';
import ProviderNote from '../ProviderNote.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

const Routes = ({ user }) => {
  console.log(user);

  return (
    <section className='container'>
      <Switch>
        <Route exact path='/patient/register' component={RegisterPatient} />
        <Route exact path='/provider/register' component={RegisterProvider} />
        <Route exact path='/patient/login' component={LoginPatient} />
        <Route exact path='/provider/login' component={LoginProvider} />
        <PrivateRoute exact path='/patient/login/:id'>
          <Navbar />
          <CreateSymptom patientId='' />
        </PrivateRoute>
        <PrivateRoute exact path='/patient/:id/profile'>
          <Navbar name='Patient Name' />
          <PatientProfile isDoctor={true} />
        </PrivateRoute>
        <PrivateRoute exact path='/patient/doctorNotes'>
          <Navbar name='Provider Name' />
          <ProviderNote patientId='' patientLastName='temp patient name' />
        </PrivateRoute>
        <PrivateRoute exact path='/provider/login/:id'>
          <Navbar name='Provider Name' />
          <ProviderProfile />
        </PrivateRoute>
      </Switch>
    </section>
  );
};

Routes.prototypes = {
  id: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Routes);
