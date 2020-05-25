import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
     axios.get('http://localhost:5000/patient/:id')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
 /* 
    axios.get('http://localhost:5000/patient/')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
    ///this above goes well with this placed in render
    const patientP =
          <ol>{this.state.patient.map(patient =><li>{patient.name},
                 {patient.date},
                 {patient.firstName},
                {patient.assignedDoctor},
                {patient.lastName},
                age: {patient.age}, 
                    {patient.email},
                  patient id: {patient.patientId}             
              </li>
              )}
         </ol>  */
   /* 
    axios.get('http://localhost:5000/patientEntries/')
        .then(res => {
            console.log(res);
            this.setState({patientEntry: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
   */ 
    axios.get('http://localhost:5000/patientEntry/5ecb47c9f1741b0a4e6b993b')
        .then(res => {
            console.log(res);
            this.setState({patientEntry: res.data});
        //this.setState({patientEntry: res.data.form});
        })
        .catch((error) => {
            console.log(error);
      })   
}
    
render() {
    const patientS=
          <ol>{this.state.patientEntry.map((patientEntry) =>
              <li>
                 {patientEntry.date},
                 {patientEntry._id},
                  patient id: {patientEntry.patientId},
                 {patientEntry.doctorNote},
                 {patientEntry.immediateAttention}             
              </li>
              )}
         </ol>

    const patientP =
          <ol>{this.state.patient.map((patient) =><li>{patient.patientId},
                 {patient.date},
                 {patient.firstName},
                {patient.assignedDoctor},
                {patient.lastName},
                age: {patient.age}, 
                    {patient.email},
                  patient id: {patient.patientId}             
              </li>
              )}
         </ol>

    const patientAll=
          <ul>{this.state.patient.map(patient=><li>{patient.firstName}---{patient.age}</li>
            )}
          </ul>

    return(
        <div className = "container">
            <h1>Profile</h1> 
                <div>YES!{patientP}</div>
            <h3>Assigned Doctor:</h3> 
                <div>{this.state.patient.assignedDoctor}</div>
                <div>{this.state.patient.assignedDoctor}</div>
            <h2>History:</h2>
                <ul>
                   {this.state.patientEntry.map(patientEntry =><li>{patientEntry._id} --
        On {patientEntry.date},{patientEntry.firstName},{patientEntry.lastName}, patient id:
                   {patientEntry.patientId},
                       
                   {patientEntry.doctorNote},
                   immediate Attention needed?:
                   {patientEntry.immediateAttention}
                        </li>
                    )}
                </ul>  
            <h2>History:</h2>
                <div>Entries:{patientS}</div>
                 <div>
                    <ul>{this.state.patient.map((patient) =><li>{patient.patientId}{patient.firstName} {patient.lastName}, age: {patient.age}, 
                    {patient.email} 
                    </li>
                    )}
                    </ul>
                </div>
                <div>Patient {this.state.patient.email}</div>  
                 <div>Patient {this.state.patient.age}</div>  
                 <div>Patient {this.props.name}</div>
                <div>Patient {this.props.patientFullName}</div>
                <div>name {this.props.patientName}</div>
                <div>id {this.props.patientId}</div> 
                <div>Patient age {this.state.patient.generalInfo}</div> 
               
        </div>
    )
}
}     
                                          