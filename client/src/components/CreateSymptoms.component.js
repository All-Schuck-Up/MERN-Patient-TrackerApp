import React, { Component } from 'react';
import axios from 'axios';

export default class createSympotom extends Component {
    constructor() {
        super();
        this.state = {
            //  formArray:[]
            _id : '',
            date: '',
            symptom1:'',
            symptom10:'',
            symptom2:'',
            symptom3:'',
            symptom4:'',
            temp:0,
            comment:'',
            doctorNote:'',         
            immediateAttention:true,
            entry:'',
            patientEntry:[],
            patient:[]
//            media: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patient/' + this.props.patientId)
        .then(res => {
            console.log(res);
            this.setState({
               entry: res.data,
               //patientEntry: res.data.map(el=>el.patientEntry.map(el=>el.symptom1))  
                date: res.data.patientEntry.map(el=>el.date), 
                symptom1: res.data.patientEntry.map(el=>el.symptom1),
                symptom2: res.data.patientEntry.map(el=>el.symptom2),
                symptom3: res.data.patientEntry.map(el=>el.symptom3),
                symptom4: res.data.patientEntry.map(el=>el.symptom4),
                temp: res.data.patientEntry.map(el=>el.temp),
                comment: res.data.patientEntry.map(el=>el.comment),
                doctorNote: res.data.patientEntry.map(el=>el.doctorNote),
                immediateAttention: res.data.patientEntry.map(el=>el.immediateAttention),
          //      symptom10: res.data.patientEntry.map(el=>el.symptom1.map(el=>el.symptom1))

               // patientEntry: res.data.map(el=>el.symptom1)
                //res.data.map(el=>el.patientEntry.map(ele=>ele.symptom1))
 //               patientEntry:res.data
               // res.data.map(el=>el.doctorNote)
                
 //j:                         formArray:res.data.form
//ja:                     formArray:res.data.patientEntry
        //        _id : res.data.patientEntry.map(el => el.symptom1),
//               // _id : res.data.form.map(el => el.symptom1),
            });
        })
        .catch((error) => {
            console.log(error);
         }) 
    }
    render() {
        const patientP =
            <ol>
                <li>Date: {this.state.date}</li>
                <li>symptom1: {this.state.symptom1}</li> 
                <li>symptom2: {this.state.symptom2}</li> 
                <li>symptom3: {this.state.symptom3}</li> 
                <li>symptom4: {this.state.symptom4}</li> 
                <li>temp: {this.state.temp}</li> 
                <li>comment: {this.state.comment}</li>
                <li>doctorNote: {this.state.doctorNote}</li> 
                <li>immediateAttention: {this.state.immediateAttention.toString()}</li> 
                
            </ol>
        const entry1=<ol>
            <li>{this.state.entry}</li>
            </ol>
        const patientE =
            <ol><li>{this.state.patientEntry.symptom1}</li>
                <li>{this.state.symptom10}</li>
            </ol>
        //const {data} = this.state;
//        const symptoms = this.state.patientEntry.map(patientEntry =>{
//            return (<ol>
//                <li key={patientEntry._id}>Entry Date:{patientEntry.data}</li>  
//                <li key={patientEntry._id}>Entry Date:{patientEntry.symptom1}</li>
//                <li key={patientEntry._id}>Entry Date:{patientEntry.comment}</li>
//                    </ol>
//            )          
//        })
//        const PED=
//          <ol>{this.state.patientEntry.map((patientEntry) =>
//             // <li>{patientEntry}</li>
//                <li>{this.state.patientEntry.symptom1}</li>
//              )}
//          </ol>
        
        return(
            <div className='patientEntryForm'>
                <ol>
                  <li>patientP:{patientP}</li> 
                  <li>patientE:{patientE}</li>                  
                  <li>Entry Date:{this.state.date}</li>  
                  <li>Entry Date:{this.state.patient.date}</li>
                  <li>Entry Date:{this.state.patient.patientEntry}</li>
                  <li>Symptom  1:{this.state.symptom1}</li> 
                  <li>doctorNote:{this.state.doctorNote}</li> 
                  <li>Comment:{this.state.comment}</li> 
                </ol>
           
            </div>
        )
    }
}

//<li>Patient Id: {this.state.formArray[0]}</li>



/*this 
                patient: res.data.firstName  ==Eve
goes with this:const patientP = <ol>{this.state.patient}</ol>
        return(
            <div className='patientEntryForm'>
                <ol>
            <li>{patientP}</li> */

/*  this.setState({
                date:res.data.date
                            
                 <li>Entry Date:{this.state.date}</li> receives 1st level date */

