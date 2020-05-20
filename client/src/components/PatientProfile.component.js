import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class PatientProfile extends Component{ 
   constructor(props){
    super(props);
    this.state = {
        symptom1:'',
        patientFullName:'',
        patient:[],
        patientEntry: [],
        patientName:'',
        patientId:'',
        generalInfo:[],
        form:[],
        date:''
    }
   }
    
componentDidMount(){
    /* axios.get('http://localhost:5000/patient/:id')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
   */ axios.get('http://localhost:5000/patient/5ebb9acd08efd022b83d1c4b')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data.generalInfo});
        })
        .catch((error) => {
            console.log(error);
      })
  
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
    axios.get('http://localhost:5000/patientEntry/5ebb9acd08efd022b83d1c4b')
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
    const patientE=
          <ol>{this.state.patientEntry.map((patientEntry) =>
              <li>
                 {patientEntry.date},
                 {patientEntry.date},
                 {patientEntry._id},
                  patient id: {patientEntry.patientId},
                 {patientEntry.doctorNote},
                 {patientEntry.immediateAttention}             
              </li>
              )}
         </ol>
    
    return(
        <div className = "container">
            <h1>Profile</h1> 
                {this.state.patient.map(patient => <li>Patient name: {patient.firstName} {patient.lastName}, age: {patient.age}, 
                    _id: {patient._id},{patient.email}{this.state.patient.email}{patient.name} 
                        </li>
                    )}
             
            <h3>Assigned Doctor:</h3>
            <h2>History:</h2>
              <ul>
                   {this.state.patientEntry.map(patientEntry =>         <li>{patientEntry._id} --   {patientEntry.patientName},patient id:
                   {patientEntry.patientId},
                   {patientEntry.patientFullName},
                   {patientEntry.name},
                       {patientEntry.date},
                   {patientEntry.doctorNote},
                   immediate Attention needed?:
                   {patientEntry.immediateAttention}
                        </li>
                    )}
             </ul>    
           <div>Entries:{patientE}</div>
        </div>
    )
}
}
   /* tests
          <div>Patient {this.state.patient.email}</div>  
         <div>Patient {this.state.patient.age}</div>  
         <div>Patient {this.props.name}</div>
        <div>Patient {this.props.patientFullName}</div>
        <div>name {this.props.patientName}</div>
        <div>id {this.props.patientId}</div> 
        <div>Patient age {this.state.patient.generalInfo}</div> */
                                          