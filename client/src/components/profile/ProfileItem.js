import React from 'react';
import PropTypes from 'prop-types';

const ProfileEntry = ({
  patientEntry: {
    date,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    temp,
    comment,
    doctorNote,
    immediateAttention,
  },
}) => (
  <div>
    <h3>Date: </h3>
    <p>{date}</p>
    <p>
      <strong>Trouble Breathing: </strong> {symptom1}
    </p>
    <p>
      <strong>Sore Throat: </strong> {symptom2}
    </p>
    <p>
      <strong>Dry Cough: </strong> {symptom3}
    </p>
    <p>
      <strong>Hieigh Fever: </strong> {symptom4}
    </p>
    <h5>Temp: </h5>
    <p>{temp}</p>
    <p>
      <strong>Addition Comments: </strong> {comment}
    </p>
    <p>
      <strong>Immediate Attention: </strong> {immediateAttention}
    </p>
  </div>
);

ProfileEntry.propTypes = {
  patientEntry: PropTypes.object.isRequired,
};

export default ProfileEntry;
