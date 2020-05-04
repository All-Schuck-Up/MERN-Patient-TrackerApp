import React from 'react';

class PatientImmediateAtt extends React.Component {
    constructor(props) {
        super(props);
    }
    checkButton(e) {
        console.log("redirecting to patient " + this.props.patientID);
    }
    render() {
        return(
            <div className="PatientImmediateAtt">
                <p>Patient {this.props.patientID} requested an immediate attention</p>
                <button onClick="{this.checkButton}">Check</button>
            </div>
        )
    }
}

export default PatientImmediateAtt;