import React from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PatientImmediateAtt extends React.Component {
    checkButton(objectID) {
        console.log("redirecting to patient ");
        axios.put('http://localhost:5000/immediateAttention/checked/' + objectID)
        .then(() => {
            this.notify();
        }); //notifies when the put request is successful
        setTimeout(function () {
            window.location.reload(1);
        }, 5000);  // the window reloads after 5 secs
    }
    notify = () => toast.success('Marked As Checked!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    render() {
        let patientPageURL = "/patient/" + this.props.patientID + '/profile';
        return(
            <div className="PatientImmediateAtt">
                <ToastContainer />

                <Row className="rowWarnings">
                <Col xs="1.5"><li>On: {this.props.date.substring(0,10)}</li></Col>
                <Col xs="7"><p className="PatientImmediateAttComponent">Patient {this.props.lastName} requested an immediate attention</p></Col>
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