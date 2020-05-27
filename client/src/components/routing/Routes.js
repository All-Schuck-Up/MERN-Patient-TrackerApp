import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import PrivateRoute from '../routing/PrivateRoute';
import RegisterPatient from '../auth/RegisterPatient.component';
import RegisterProvider from '../auth/RegisterProvider.component';
import LoginPatient from '../auth/LoginPatient.component';
import LoginProvider from '../auth/LoginProvider.component';
import Dashboard from '../dashboard/Dashboard';
import SymptomEntry from '../patient/SymptomEntry';
import Profile from '../profile/Profile';

const Routes = (props) => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register/patient' component={RegisterPatient} />
        <Route exact path='/register/provider' component={RegisterProvider} />
        <Route exact path='/login/patient' component={LoginPatient} />
        <Route exact path='/login/provider' component={LoginProvider} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/symptomEntry' component={SymptomEntry} />
        <PrivateRoute exact path='/profile/:id' component={Profile} />
      </Switch>
    </section>
  );
};

export default Routes;
