import React, { Component } from "react";
//import { Link } from 'react-router-dom';

import axios from 'axios';
import UpdateDialog from './UpdateDialog.component';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';	

toast.configure()


//implemented as a function React component
const PatientEntry = (props) => (
  <tr>

    <td> {props.patientEntry.date.substring(0, 10)}</td>
    <td> {props.patientEntry.symptom1}</td>
    <td> {props.patientEntry.symptom2}</td>
    <td> {props.patientEntry.symptom3}</td>
    <td> {props.patientEntry.symptom4}</td>
    <td> {props.patientEntry.temp}</td>
    <td>
      {" "}
      <a
        style={{ cursor: "pointer" }}
        href={props.patientEntry.media}
        onClick={() => this.toggleModal("Media")}
      >
        Media...
      </a>
    </td>
    <td> {props.patientEntry.comment}</td>
      <td> {props.patientEntry.updateNote}</td>
     <td> {props.patientEntry.immediateAttention.toString()}</td>

  </tr>

);

  
    


//implemented as class component
export default class createSympotom extends Component {
    constructor() {
        super();

        this.state = {
            _id : '',
            date: '',
            symptom1:'',
            symptom2:'',
            symptom3:'',
            symptom4:'',
            temp:0,
            comment:'',
            updateNote:'',         
            immediateAttention:true,
            entry:'',
            patientEntry:[],
            patient:[],
            object:[],       
            media: '',
            visible:true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patient/' + this.props.patientId)
        
        .then(res => {
            console.log(res);
            this.setState({     
         
             patientEntry: res.data.patientEntry,
                _id : res.data.patientEntry.map(el => el._id),
                date:res.data.patientEntry.map(el=>el.date),
                symptom1: res.data.patientEntry.map(el=>el.symptom1),
                symptom2: res.data.patientEntry.map(el=>el.symptom2),
                symptom3: res.data.patientEntry.map(el=>el.symptom3),
                symptom4: res.data.patientEntry.map(el=>el.symptom4),
                temp: res.data.patientEntry.map(el=>el.temp),
                comment: res.data.patientEntry.map(el=>el.comment),
                immediateAttention: res.data.patientEntry.map(el=>el.immediateAttention.toString()),
                updateNote: res.data.patientEntry.map(el=>el.updateNote),
                media:res.data.patientEntry.map(el=>el.media)

              });
            })
      .catch((error) => {
        console.log(error);
      });
  }
  psList() {
    return this.state.patientEntry.map((hi) => {
      return (
        <PatientEntry
          patientEntry={hi}
          //updatePatientEntry={this.updatePatientEntry}
          key={hi._id}
        />
      );
    });
  }

  onDismiss = () => {
    this.setstate({ visible: false });
  };

  render(){
        return(   
            <div>
             <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Entry Date</th>
                  <th>Dry Cough</th>
                  <th>Sore Throat</th>
                  <th>Trouble Breathing</th>
                  <th>Heigh Fever</th>
                  <th>Temp</th>
                  <th>Media</th>
                  <th>Additional Note</th>
                  <th>Update Note</th>
                  <th>Immediate Attention</th>
                </tr>
              </thead>
              <tbody>
                {this.psList()}
              </tbody>
            </table>  
       <UpdateDialog patientEntry={this.state.patientEntry} patientId={this.props.patientId} accountType={this.props.accountType} />
           
          
       </div>

        )
    }
}


