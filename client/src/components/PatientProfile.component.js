import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateSymptoms from './CreateSymptoms.component';

export default class PatientProfile extends Component{ 
   constructor(props){
    super(props);
    this.state = {
        symptom1:'',
        patientFullName:'',
        firstName:'',
        lastName:'',
        assignedDoctor:'',
        age:'',
        email:'',
        patient:[],
        patientEntry: [],
        patientname:'',
        patientId:'',
        form:[],
        date:''
    }
   }
    
componentDidMount(){
     axios.get('http://localhost:5000/patient/5ebb9acb08efd022b83d1c43')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data.assignedDoctor});
         //this.setState({patient: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
   
  axios.get('http://localhost:5000/patientEntry/5ebb9acb08efd022b83d1c43')
        .then(res => {
            console.log(res);
            //this.setState({patientEntry: res.data});
        this.setState({
            patientEntry: res.data.map(el=>el.doctorNote)});
        //res.data.map(el=>el.form.map(ele=>ele.symptom1))});
        })
        .catch((error) => {
            console.log(error);
      })   
}
    
render() {
    const patientS=
          <ol>{this.state.patientEntry.map((patientEntry) =>
              <li>{patientEntry}
              </li>
              )}
         </ol>

    const patientP =
            <ol>{this.state.patient}</ol>
   

    return(
        <div className = "container">
            <h1>Profile</h1>
        
            <h2>Assigned Doctor:{patientP}</h2>    
            <h2>History:</h2>
                <div>Entries:{patientS}</div>
                <CreateSymptoms/>
                 
               
    
        </div>
    )
}
}   
                