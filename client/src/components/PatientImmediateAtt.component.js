import React from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';

class PatientImmediateAtt extends React.Component {
    checkButton(objectID) {
        console.log("redirecting to patient ");
        axios.put('http://localhost:5000/immediateAttention/checked/' + objectID);
        window.location.reload(false); //reloads the current window and displays the list again without the just-checked one
    }
    render() {
        let patientPageURL = "/patient/" + this.props.patientID + '/profile';
        return(
            <div className="PatientImmediateAtt">
                <Row className="rowWarnings">
                <Col xs="1.5"><li>On: {this.props.date.substring(0,10)}</li></Col>
                <Col xs="7"><p className="PatientImmediateAttComponent">Patient {this.props.patientID} requested an immediate attention</p></Col>
                <Col xs="1"><form action={patientPageURL} method="get">
                <Button className="PatientImmediateAttComponent" color="primary">Check</Button>
                </form></Col>
                <Col xs="2.5"><Button className="PatientImmediateAttComponent" color="primary" onClick={() => {this.checkButton(this.props.objectID)}}>Mark as checked</Button></Col>
                
                </Row>
            </div>
        )
    }
}

export default PatientImmediateAtt;