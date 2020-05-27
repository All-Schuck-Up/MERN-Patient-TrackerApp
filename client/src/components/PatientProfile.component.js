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
        symptom1:'',
        patientFullName:'',
        firstName:'',
        lastName:'',
        assignedDoctor:'',
        age:'',
        email:'',
        patient:[],
        patientEntry:[],
        patientname:'',
        underlying:true,
        patientId:'',
        form:[],
        date:''
    }
   }
    
    
componentDidMount(){
     axios.get('http://localhost:5000/patient/5ebb9acb08efd022b83d1c43')
        .then(res => {
            console.log(res);
           
         this.setState({
                        patient: res.data.assignedDoctor,  
                        patientname:(res.data.firstName + " "+ res.data.lastName),
                        age: res.data.age,
                        underlying: res.data.underlying});
         
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

 patientEntryList() {
    return this.state.patientEntries.map(currententry => {
      return <PatientEntry patientEntry={currententry} key={currententry._id}/>;
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
// const patientEntryList= {
//     this.state.patientEntry.map(currententry => {
//       <PatientEntry patientEntry={currententry} key={currententry._id}/>;
//    })
//  }
   
    return(
        <div className = "container">
           <h1>Profile:</h1>
           <h4>Patient name: {this.state.patientname}, Age: {this.state.age},  Underline condition: {this.state.underlying.toString()}</h4> 
           <h4>Assigned Doctor:{patientP}</h4>    
           <h2>History:</h2>
                <div>Last Doctor Note:{patientS}</div>
        
         <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Entry Date</th>
              <th>form, media?</th>
              <th>Additional Note</th>
              <th>Doctor Note</th>
              <th>Doctor Note Date</th>
            </tr>
          </thead>
          <tbody>
            {patientS}  {}    
          </tbody>
        </table>
           
                 
            
        </div>
    )
}
}
// <CreateSymptoms patientId='5ebb9acb08efd022b83d1c43'/>
                