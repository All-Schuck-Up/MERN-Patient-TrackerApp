import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: { firstName, lastName, age, assignedDoctor },
}) => {
  return (
    <div className='container'>
      <h1>Patient Profile</h1>
      <br></br>
      <h3>Last Name: {lastName}</h3>
      <h3>First Name: {firstName}</h3>
      <h5>AGE: {age}</h5>
      <h5>Doctor: {assignedDoctor}</h5>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
