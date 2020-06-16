import React, {Component} from 'react';
import axios from 'axios';
import CreateSymptoms from './CreateSymptoms.component';
import { Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import DoctorNotes from './ProviderNoteDisplay.component'

export default class PatientProfile extends Component{ 
   constructor(props){
    super(props);
    this.state = {
        assignedDoctor:'',
        age:'',
        email:'',
        patient:[],
        patientEntry:[],
        patientname:'',
        underlying:true,
        patientId:''
    }
   }
    
    
componentDidMount(){
     axios.get('http://localhost:5000/patient/5ecaabd07dfcc538bce811fc')
        .then(res => {
            console.log(res);
           
         this.setState({
                        patient: res.data.assignedDoctor,  
                        patientname:(res.data.firstName + " "+ res.data.lastName),
                        age: res.data.age,
                        underlying: res.data.underlying
         });
        })
        .catch((error) => {
            console.log(error);
      })
   
  axios.get('http://localhost:5000/patientEntry/5ecaabd07dfcc538bce811fc')
        .then(res => {
            console.log(res);
        this.setState({
            patientEntry: res.data.map(el=>el.updateNote)});
        })
        .catch((error) => {
            console.log(error);
      })   
}

render() {
    const patientP =
            <ol>{this.state.patient}</ol>

    return(
        <div className="patientProfile">
        <Row>
            <Col sm="8">
        <div className = "container">
           <h1>Profile:</h1>
           <h4>Patient name: <i>{this.state.patientname}</i>,
           Age: <i>{this.state.age}</i>,  Underline condition: <i>{this.state.underlying.toString()}</i></h4> 
           <h4>Assigned Doctor: <i>{patientP}</i></h4>    
           <h2>History:</h2>
               
          <CreateSymptoms patientId='5ecaabd07dfcc538bce811fc'/> 
             {this.props.isDoctor ? 
                <div >
                    <Link to="/patient/doctorNotes" className="nav-link">
                    <Button>Add a note to this patient's profile</Button>
                    </Link>
                    
                </div>
             : null }

        </div>
        </Col>
        <Col sm="4">
        <div>
                <DoctorNotes patientId="5ecaabd07dfcc538bce811fc"/>
        </div>
        </Col>
        </Row>
        </div>
    )
}
}