import React from 'react';
import axios from 'axios';
import { Card, CardText, Alert, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProviderNote extends React.Component {
    constructor() {
        super();
        this.state = {
            doctorNoteArray: [],
            doctorNote: ''
        }
        this.addButton = this.addButton.bind(this)
        this.scheduleMeeting = this.scheduleMeeting.bind(this)
    }
    async componentDidMount() {
        //retrieves all the doctor notes
        axios.get('http://localhost:5000/doctorNotes/' + this.props.patientID)
            .then(response => {
                console.log(response);
                this.setState({doctorNoteArray : response.data});
            });
    };
    addButton() { //adds doctor note to the database when button is clicked
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        axios.put('http://localhost:5000/patientEntry/addDoctorNote/5ecb471af1741b0a4e6b993a', {
            isDoctor: true,
            doctorNote: 'On ' + dateTime + ' :  ' + this.state.doctorNote
        });
        window.location.reload(false); //reloads the current window and displays the list again without the just-checked one
    }
    scheduleMeeting() { //redirects to the Zoom home page for meetings
        window.location.assign('https://zoom.us/signin');
    }
    render() {
        const notes = this.state.doctorNoteArray.map(elem => {
            return(
            <Card body key={elem}>
                <CardText>{elem}</CardText>
             </Card>)
        })
        return(
            <div className="DoctorNote">
                <Form className="form-horizontal" onSubmit={this.addButton}>
                    <FormGroup>
                        <Label>Add a note : </Label>
                        <Input className="spaceInputNote" name="doctorNote" onChange={(e) => this.setState({doctorNote: e.target.value})}
                                            placeholder={"Add a note to the patient"}/>
                        <Button className="btn btn-primary" type="submit">Add</Button>
                        </FormGroup>
                   
                    <Button className="btn btn-primary" onClick={this.scheduleMeeting} style={{ marginBottom: '1rem' }}>Schedule a Zoom Meeting</Button>
                </Form>
                <Alert color="success">Past Notes for {this.props.patientLastName}</Alert>
                {notes}
            </div>
        )
    }
}

export default ProviderNote;