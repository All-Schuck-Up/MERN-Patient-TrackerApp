import React from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';

class PatientImmediateAtt extends React.Component {
    // state = {id : this.props.patientID}
    checkButton(objectID) {
        console.log("redirecting to patient ");
        axios.put('http://localhost:5000/immediateAttention/checked/' + objectID);
        window.location.reload(false);
    }
    render() {
        let patientPageURL = "/patient/" + this.props.patientID + '/profile';
        return(
            <div className="PatientImmediateAtt">
                <Row className="rowImmediateAtt">
                <Col xs="auto"><p className="PatientImmediateAttComponent">Patient {this.props.patientID} requested an immediate attention</p></Col>
                <Col xs="auto"><form action={patientPageURL} method="get" label="hello">
                <Button className="PatientImmediateAttComponent" color="primary">Check</Button>
                </form></Col>
                <Col xs="auto"><Button className="PatientImmediateAttComponent" color="primary" onClick={() => {this.checkButton(this.props.objectID)}}>Mark as checked</Button></Col>
                
                </Row>
            </div>
        )
    }
}

export default PatientImmediateAtt;