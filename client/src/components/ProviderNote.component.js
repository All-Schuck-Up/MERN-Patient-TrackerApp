import React from 'react';
import axios from 'axios';
import { Card, CardText, Alert, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProviderNote extends React.Component {
    constructor() {
        super();
        this.state = {
            doctorNoteArray: [],
            doctorNote: ''
        }
        this.addButton = this.addButton.bind(this)
    }
    async componentDidMount() {
        axios.get('http://localhost:5000/doctorNotes/' + this.props.patientID)
            .then(response => {
                console.log(response);
                this.setState({doctorNoteArray : response.data});
            });
    };
    addButton() {
        axios.put('http://localhost:5000/patientEntry/addDoctorNote/5ecb471af1741b0a4e6b993a', {
            isDoctor: true,
            doctorNote: this.state.doctorNote + ' ' + Date.now()
        });
        window.location.reload(false); //reloads the current window and displays the list again without the just-checked one
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
                <form className="form-horizontal" onSubmit={this.addButton}>
                <div className="form-group" >
                <label>Add a note : </label>
                  <textarea className="spaceInputNote"
                    name="doctorNote"
                    onChange={(e) => this.setState({doctorNote: e.target.value})}
                    placeholder={"Add additional note to the doctor"}
                  />
                  <Button className="btn btn-primary" type="submit">Add</Button>
                </div>
                </form>
            </div>
        )
    }
}

export default ProviderNote;