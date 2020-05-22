import React, { Component, useEffect } from 'react';
import Navbar from './Nbar.component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

//assigned doctor
//symptoms delete to be change for update
const PatientEntry = (props) => (
  <tr>
    <td>{props.patientEntry.patientName}</td>
    <td>{props.patientEntry.form}</td>
    <td>{props.patientEntry.additionalNote}</td>
    <td>{props.patientEntry.doctorNote}</td>
    <td>{props.patientEntry.immediateAttention}</td>
    <td>{props.patientEntry.entryDate}</td>
    <td>
      <Link to={'/edit/' + props.patientEntry._id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deletePatientEntry(props.patientEntry._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const PatientProfile = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = { patientEntries: [] };
  // }
  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5000/patient/:id/profile')
  //     .then((response) => {
  //       this.setState({ patientEntries: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // patientEntryList() {
  //   return this.state.patientEntries.map((currententry) => {
  //     return (
  //       <PatientEntry patientEntry={currententry} key={currententry._id} />
  //     );
  //   });
  // }

  return (
    <div class='container'>
      <h1>Profile</h1>
      <h3>Assigned Doctor:</h3>
      <h2>History</h2>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>patientName</th>
            <th>entryDate</th>
            <th>form</th>
            <th>additionalNote</th>
            <th>doctorNote</th>
            <th>doctorNoteDate</th>
          </tr>
        </thead>
        {/* <tbody>{this.patientEntryList()}</tbody> */}
      </table>
    </div>
  );
};

PatientProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(PatientProfile);
