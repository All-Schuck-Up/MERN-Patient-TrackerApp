import React from 'react';
import PatientAlert from './PatientAlert.component';

class PatientAlertList extends React.Component {
    constructor() {
        super();
        this.state = {
            alertArray: ["Patient 1 alert", "Patient 2 alert", "Patient 3 alert", "Patient 4 alert"]
        }
    }
    render() {
        const alert = this.state.alertArray.map((elem) => {
            return(<PatientAlert alertMessage={elem} />)
        });
        return(
            <div className="PatientAlertList">
                {alert}
            </div>
        )
    }
}

export default PatientAlertList