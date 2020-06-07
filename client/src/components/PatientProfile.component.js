import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateSymptoms from './CreateSymptoms.component';

const PatientEntry = props => (
  <tr>
    <td>{props.patientEntry.form}</td>
    <td>{props.patientEntry.additionalNote}</td>
    <td>{props.patientEntry.doctorNote}</td>
    <td>{props.patientEntry.immediateAttention}</td>
    <td>{props.patientEntry.entryDate}</td>
    <td>
      <Link to={"/edit/"+props.patientEntry._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatientEntry(props.patientEntry._id) }}>delete</a>
    </td>
  </tr>
)

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
            patientEntry: res.data.map(el=>el.doctorNote)});
        })
        .catch((error) => {
            console.log(error);
      })   
}

render() {
    const patientS=
          <ul>{this.state.patientEntry.map((patientEntry) =>
              <li key={patientEntry._id}>{patientEntry}
              </li>
              )}
         </ul>

    const patientP =
            <ol>{this.state.patient}</ol>

   
    return(
        <div className = "container">
           <h1>Profile:</h1>
           <h4>Patient name: <i>{this.state.patientname}</i>,
           Age: <i>{this.state.age}</i>,  Underline condition: <i>{this.state.underlying.toString()}</i></h4> 
           <h4>Assigned Doctor: <i>{patientP}</i></h4>    
           <h2>History:</h2>
               
          <CreateSymptoms patientId='5ecaabd07dfcc538bce811fc'/> 
             <div>Last Patient Note from old schema: {patientS}</div>
        
        </div>
    )
}
}