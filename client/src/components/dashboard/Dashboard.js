import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
//component
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Nbar.component';
import PatientDashboardLinks from './PatientDashboardLinks';
import ProviderDashboardLinks from './ProviderDashboardLinks';

const Dashboard = ({
  getCurrentProfile,
  auth: { user, loading },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <h1 className='text-primary'>Dashboard</h1>
      <p>
        <i>Welcome {user && user.name}!</i>
      </p>
      {profile !== null && user.accountType === 'patient' ? (
        <Fragment>
          <h4>I hope you are doing well, if not we are here to help</h4>
          <PatientDashboardLinks />
        </Fragment>
      ) : (
        <Fragment>
          <h4>Doc your patients await</h4>
          <ProviderDashboardLinks />
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.prototypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
