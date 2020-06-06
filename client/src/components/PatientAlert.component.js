import React from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';

class Alert extends React.Component {
    checkButton(objectID) {
        console.log("redirecting to patient ");
        axios.put('http://localhost:5000/alert/checked/' + objectID);
        window.location.reload(false); //reloads the current window and displays the list again without the just-checked one
    }
    render() {
        let patientPageURL = "/patient/" + this.props.patientID + '/profile';
        return(
            <div className="PatientAlert">
                <Row className="rowAlert">
                <Col xs={6}><p className="PatientAlertComponent">Alert: {this.props.patientID} has: {this.props.alertMessage}</p></Col>
                <Col><form action={patientPageURL} method="get" label="hello">
                <Button className="PatientAlertComponent" color="primary">Check</Button>
                </form></Col>
                <Col><Button className="PatientAlertComponent" color="primary" onClick={() => {this.checkButton(this.props.objectID)}}>Mark as checked</Button></Col>
                
                </Row>
            </div>
        )
    }
}

export default Alert;