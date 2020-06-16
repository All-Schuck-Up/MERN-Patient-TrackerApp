import React, { Fragment, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { getCurrentProfile } from './actions/profile';
import setAuthToken from './utils/setAuthToken';

// Components
import Landing from './components/Landing.component';
import Routes from './components/routing/Routes';
import LoginPatient from './components/auth/LoginPatient.component';
import RegisterPatient from './components/auth/RegisterPatient.component';
import LoginProvider from './components/auth/LoginProvider.component';
import RegisterProvider from './components/auth/RegisterProvider.component';
import Navbar from './components/Nbar.component';
import CreateSymptom from './components/Create-patient-symptom.component';
import PatientProfile from './components/PatientProfile.component';
import ProviderProfile from './components/ProviderProfile';
import ProviderNote from './components/ProviderNote.component';

// check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch(getCurrentProfile());
  }, [getCurrentProfile]);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className='container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
