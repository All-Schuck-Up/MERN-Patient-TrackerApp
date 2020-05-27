import React, { Fragment, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
// import PrivateRoute from './components/routing/PrivateRoute';
import Routes from './components/routing/Routes';
import Landing from './components/layout/Landing.component';
// import LoginPatient from './components/auth/LoginPatient.component';
// import RegisterPatient from './components/auth/RegisterPatient.component';
// import LoginProvider from './components/auth/LoginProvider.component';
// import RegisterProvider from './components/auth/RegisterProvider.component';
// import Dashboard from './components/dashboard/Dashboard';
// import Navbar from './components/Nbar.component';
// import CreateSymptom from './components/patient/Patient.SyptomEntry';
// import PatientProfile from './components/PatientProfile.component';
// import WelcomeProvider from './components/WelcomeProvider.component';
// import PatientSearch from './components/PatientSearch.component';
// import PatientAlertList from './components/PatientAlertList.component';
// import PatientImmediateAttList from './components/PatientImmediateAttList.component';

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
        <Fragment>
          <section className='container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
          </section>
        </Fragment>
      </Router>
      {/* <Router>
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
            <PrivateRoute exact path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
          </div>
          <div className='container'>
            <Route exact path='/patient/login/:id'>
              <Navbar />
              <CreateSymptom />
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
              <PatientSearch />
              <PatientAlertList />
              <PatientImmediateAttList />
            </Route>
          </div>
        </div>
      </Router> */}
    </Provider>
  );
}
export default App;
