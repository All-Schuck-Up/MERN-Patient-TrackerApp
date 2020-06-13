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
                <Row className="rowWarnings">
                <Col xs="1.5"><li>On: {this.props.date.substring(0,10)}</li></Col>
                <Col xs="7"><p className="PatientAlertComponent">Alert: {this.props.patientID} has: {this.props.alertMessage}</p></Col>
                <Col xs="1"><form action={patientPageURL} method="get" >
                <Button className="PatientAlertComponent" color="primary">Check</Button>
                </form></Col>
                <Col xs="2.5"><Button className="PatientAlertComponent" color="primary" onClick={() => {this.checkButton(this.props.objectID)}}>Mark as checked</Button></Col>
                
                </Row>
            </div>
        )
    }
}

export default Alert;