import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';
// Components
import Navbar from '../layout/Nbar.component';
import ProfileDemo from './ProfileDemo';
import ProfileEntry from './ProfileItem';

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      <Navbar />
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='profile'>
            <ProfileDemo profile={profile} />
          </div>
          <div>
            <h2>Past Entries</h2>
            {profile.patientEntry.length > 0 ? (
              <Fragment>
                {profile.patientEntry.map((patientEntry) => (
                  <ProfileEntry
                    key={patientEntry.id}
                    patientEntry={patientEntry}
                  />
                ))}
              </Fragment>
            ) : (
              <h4>No Entries in Record</h4>
            )}
          </div>
          <Link to='/dashboard' className='btn-light'>
            Back To Dashboard
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
