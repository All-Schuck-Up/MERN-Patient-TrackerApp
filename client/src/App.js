import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
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


// check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
              <CreateSymptom patientId="5ecaabd07dfcc538bce811fc"/>
            </Route>
          </div>
          <div className='container'>
            <Route exact path='/patient/:id/profile'>
              <Navbar name="Patient Name"/>
              <PatientProfile />
            </Route>
          </div>
          <div className='container'>
            <Route exact path='/provider/login/:id'>
              <Navbar name="Provider Name"/>
              <ProviderProfile />
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
