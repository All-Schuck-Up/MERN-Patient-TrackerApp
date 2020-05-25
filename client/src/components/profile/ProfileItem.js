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
  <div className='container'>
    <table>
      <thead className='thead-light'>
        <tr>
          <th>Entry Date</th>
          <th>Trouble Breathing:</th>
          <th>Sore Throat:</th>
          <th>Dry Cough:</th>
          <th>Hieigh Fever:</th>
          <th>Temp:</th>
          <th>Addition Note:</th>
          <th>Doctor Note:</th>
        </tr>
      </thead>
      <tbody>
        <td>{date}</td>
        <td>{symptom1}</td>
        <td>{symptom2}</td>
        <td>{symptom3}</td>
        <td>{symptom4}</td>
        <td>{temp}</td>
        <td>{comment}</td>
        <td>{doctorNote}</td>
      </tbody>
    </table>
  </div>
);

ProfileEntry.propTypes = {
  patientEntry: PropTypes.object.isRequired,
};

export default ProfileEntry;
