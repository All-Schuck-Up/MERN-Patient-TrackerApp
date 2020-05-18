import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//assigned doctor
//symptoms delete to be change for update
const PatientEntry = props => (
  <tr>
    <td>{props.patientEntry.patientName}</td>
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

class PatientProfile extends Component{  
    constructor(props) {
    super(props);
        this.state = {patientEntries: []};
    }
     componentDidMount() {
    axios.get('http://localhost:5000/patient/:id/profile')
      .then(response => {
        this.setState({ patientEntries: response.data })
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
    render(){   
       
        return(
             <div className = "container">
            <h1>Profile</h1> 
            <h3>Assigned Doctor:</h3>
            <h2>History</h2>
            <table className="table">
          <thead className="thead-light">
            <tr>
              <th>patientName</th>
              <th>entryDate</th>
              <th>form</th>
              <th>additionalNote</th>
              <th>doctorNote</th>
              <th>doctorNoteDate</th>
            </tr>
          </thead>
          <tbody>
            { this.patientEntryList() }
          </tbody>
        </table>
               </div>
              )
    }
}                
export default PatientProfile;