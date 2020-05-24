import React from 'react';
import { Link } from 'react-router-dom';

const ProviderDashboardLinks = () => {
  return (
    <div className='buttons'>
      <Link to='/viewPatients' className='btn btn-light'>
        <i className='text-primary' /> View Patients
      </Link>{' '}
      <Link to='/immediateAttention' className='btn btn-light'>
        <i className='text-primary' /> Attention Required
      </Link>{' '}
    </div>
  );
};

export default ProviderDashboardLinks;
