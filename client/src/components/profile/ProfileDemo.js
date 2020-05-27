import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({ profile: { firstName, lastName, age } }) => {
  return (
    <div>
      <h1>{lastName}</h1>
      <h2>{firstName}</h2>
      <h5>AGE: {age}</h5>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
