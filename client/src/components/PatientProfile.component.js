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
     axios.get('http://localhost:5000/patient/')
        .then(res => {
            console.log(res);
            this.setState({patient: res.data});
        })
        .catch((error) => {
            console.log(error);
      })
    axios.get('http://localhost:5000/patientEntries/')
        .then(res => {
            console.log(res);
            this.setState({patientEntry: res.data});
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
                 {patientEntry._id},
                 {patientEntry.doctorNote},
                 {patientEntry.immediateAttention}             
              </li>
              )}
         </ol>
    
    return(
        <div>
            <ul>
                {this.state.patient.map(patient => <li>{patient.name} --{patient.date},{patient.email} 
                    </li>

                )}
            </ul>
            <ul>
                {this.state.patientEntry.map(patientEntry => <li>{patientEntry._id} --{patientEntry.patientName},
                    {patientEntry.patientFullName},{patientEntry.doctorNote},
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
/* test:
        <div>Patient {this.props.name}</div>
        <div>Patient {this.props.patientFullName}</div>
        <div>name {this.props.patientName}</div>
        <div>id {this.props.patientId}</div> 
*/
                                          