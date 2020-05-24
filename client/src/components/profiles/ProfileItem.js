import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, email },
    firstName,
    lastName,
    age,
    underlying,
    patientEntry,
  },
}) => {
  return (
    <div>
      <img src='' alt='' className='round-img' />
      <div>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <p>
          Email: {email} Age: {age} Underlying Issues: {underlying}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
