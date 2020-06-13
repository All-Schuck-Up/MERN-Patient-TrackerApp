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
        axios.get('http://localhost:5000/doctorNotes/' + this.props.patientID)
            .then(response => {
                console.log(response);
                this.setState({doctorNoteArray : response.data});
            });
    };
    addButton() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        axios.put('http://localhost:5000/patientEntry/addDoctorNote/5ecb471af1741b0a4e6b993a', {
            isDoctor: true,
            doctorNote: 'On ' + dateTime + ': ' + this.state.doctorNote
        });
        window.location.reload(false); //reloads the current window and displays the list again without the just-checked one
    }
    scheduleMeeting() {
        window.location.assign('https://zoom.us/signin');
    }
    render() {
        const notes = this.state.doctorNoteArray.map(elem => {
            return(
            <Card body key={elem}>
                {/* <CardTitle>Special Title Treatment</CardTitle> */}
                <CardText>{elem}</CardText>
             </Card>)
        })
        return(
            <div className="DoctorNote">
                <Alert color="success">Past Notes for {this.props.patientLastName}</Alert>
                {notes}
                <Form className="form-horizontal" onSubmit={this.addButton}>
                    <Col form>
                        <FormGroup>
                            <Row>
                                <Label>Add a note : </Label></Row>
                                <Row><Input className="spaceInputNote" name="doctorNote" onChange={(e) => this.setState({doctorNote: e.target.value})}
                                            placeholder={"Add additional note to the doctor"}/>
                            </Row>
                            <Row>
                                <Button className="btn btn-primary" type="submit">Add</Button>
                            </Row>
                            <Row>
                            <Button className="btn btn-primary" onClick={this.scheduleMeeting} >Schedule a Zoom Meeting</Button>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </div>
        )
    }
}

export default ProviderNote;