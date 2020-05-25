import React from 'react';

class PatientAlert extends React.Component {
    render() {
        return(
            <div className="PatientAlert">
                <p>{this.props.alertMessage}</p>
            </div>
        )
    }
}

export default PatientAlert;