import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboardLinks = () => {
  return (
    <div className='buttons'>
      <Link to='/symptomEntry' className='btn btn-light'>
        <i className='text-primary' /> Complete Symptom Entry
      </Link>{' '}
      <Link to='/edit-entry' className='btn btn-light'>
        <i className='text-primary' /> Edit Todays Entry
      </Link>{' '}
      <Link to='/view-entry' className='btn btn-light'>
        <i className='text-primary' /> View Entries
      </Link>
    </div>
  );
};

export default PatientDashboardLinks;
