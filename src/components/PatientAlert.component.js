import React from 'react';

class PatientAlert extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="PatientAlert">
                <p>{this.props.alertMessage}</p>
            </div>
        )
    }
}

export default PatientAlert;