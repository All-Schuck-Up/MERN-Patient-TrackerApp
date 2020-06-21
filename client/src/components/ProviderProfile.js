import React from 'react';
import PatientSearch from './PatientSearch.component';
import PatientAlertList from './PatientAlertList.component';
import PatientImmediateAttList from './PatientImmediateAttList.component';



export default function ProviderProfile() {
  return (<div className="patientProfile">
              <PatientSearch />
              <PatientAlertList />
              <PatientImmediateAttList />
          </div>
  );
}
