import React, { Component } from 'react';
import axios from 'axios';

//const PatientEntry = props => (
//  <tr>
//                <td> {props.patientEntry.date.substring(0,10)}</td>
//                <td> {props.patientEntry.symptom1}</td>
//                <td> {props.patientEntry.symptom2}</td>
//                <td> {props.patientEntry.symptom3}</td>
//                <td> {props.patientEntry.symptom4}</td>
//                <td> {props.patientEntry.temp}</td>
//                <td> {props.patientEntry.comment}</td>
//                <td> {props.patientEntry.doctorNote}</td>
//                <td> {props.patientEntry.immediateAttention.toString()}</td>  
//            
//  </tr>
//)
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
            doctorNote:'',         
            immediateAttention:true,
            entry:'',
            patientEntry:[],
            patient:[],
            object:[]       
//            media: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patient/' + this.props.patientId)
        .then(res => {
            console.log(res);
            this.setState({     
         // patientEntry:res.data,  
          patientEntry: res.data.patientEntry,
         // patientEntry: res.data.patientEntry.data,   
         
                _id : res.data.patientEntry.map(el => el._id),
                date:res.data.patientEntry.map(el=>el.date),
                symptom1: res.data.patientEntry.map(el=>el.symptom1),
                symptom2: res.data.patientEntry.map(el=>el.symptom2),
                symptom3: res.data.patientEntry.map(el=>el.symptom3),
                symptom4: res.data.patientEntry.map(el=>el.symptom4),
                temp: res.data.patientEntry.map(el=>el.temp),
                comment: res.data.patientEntry.map(el=>el.comment),
                doctorNote: res.data.patientEntry.map(el=>el.doctorNote),
                immediateAttention: res.data.patientEntry.map(el=>el.immediateAttention.toString())
         
//j:                         formArray:res.data.form
//ja:                     formArray:res.data.patientEntry     
                            

            });
        })
        .catch((error) => {
            console.log(error);
         }) 
    }
//    psList(){
//        return this.state.patientEntry.map(hi => {
//         return <PatientEntry patientEntry={hi} key={hi._id}/>;
//    })
 // }  
    render(){
       
        
        const F= 
              <tr>
                <td> {this.state.date[0]}</td>
                <td> {this.state.symptom1[0]}</td>
                <td> {this.state.symptom2[0]}</td>
                <td> {this.state.symptom3[0]}</td>
                <td> {this.state.symptom4[0]}</td>
                <td> {this.state.temp[0]}</td>
                <td> {this.state.comment[0]}</td>
                <td> {this.state.doctorNote[0]}</td>
                <td> {this.state.immediateAttention[0]}</td>  
              </tr>
       
        const W =  Object.values(F)
        const line = <tr>
                  <td>    {this.state.date[1]} </td> 
                  <td>    {this.state.symptom1[1]} </td> 
                  <td>    {this.state.symptom2[1]} </td> 
                  <td>    {this.state.symptom3[1]} </td> 
                  <td>    {this.state.symptom4[1]} </td> 
                  <td>    {this.state.temp[1]} </td> 
                  <td>    {(this.state.comment[1])} </td> 
                  <td>    {this.state.doctorNote[1]}</td>
                  <td> {this.state.immediateAttention[1]}</td> 
                   </tr>
        const patientP =
            <ol>
                <li>Date: {(this.state.date)[0]}</li>
                <li>symptom1: {this.state.symptom1[0]}</li> 
                <li>symptom2: {this.state.symptom2[0]}</li> 
                <li>symptom3: {this.state.symptom3[0]}</li> 
                <li>symptom4: {this.state.symptom4[0]}</li> 
                <li>temp: {this.state.temp[0]}</li> 
                <li>comment: {(this.state.comment)[0]}</li>
                <li>doctorNote: {(this.state.doctorNote)[0]}</li> 
                <li>immediateAttention: {this.state.immediateAttention.toString()[0]}</li>      
            </ol>                          
        
//        const patientE =
//            <ol><li key={this.state.patientEntry._id}>    {this.state.comment[0]}</li>
//                <li key={this.state.patientEntry._id}>{this.state.immediateAttention.toString()}</li>
//            </ol>
        
//        const entry1=<ol>
//            <li>Object.values({this.state._id[0]})</li>
//            <li>Object.values({this.state.patientEntry[0]})</li>
//            </ol>
//                                            
      
//      const S = {this.state.patientEntry.map(el=> el.date)[0]}
        
//      const patientT=
//          <ul>
//              {this.state.patientEntry.map((patientEntry) =>
//              <li key={patientEntry._id}>{patientEntry}
//              </li>
//              )}
//         </ul>        
        
        
        //const {data} = this.state;
        //const dat = this.state;
//        const symptoms =
//              <ul>{this.state.patientEntry.map((patientEntry)=>
//                return(<li key={this.state.patientEntry.id}>{this.state.patientEntry[0]}</li>
//                )
////            return (<ol>
////                <li key={this.state.patientEntry._id[0]}>Entry Date:{this.state.date[0]}</li>  
////                <li key={this.state.patientEntry._id[0]}>Entry Date:{this.state.symptom1[0]}</li>
////                <li key={this.state.patientEntry._id[0]}>Entry Date:{this.state.temp}</li>
////                    </ol>
//            ) }         </ul>
//     //   }
                
//        const PED=
//          <ol>{this.state.patientEntry.map((patientEntry) =>
//             // <li>{patientEntry}</li>
//                <li>{this.state.patientEntry.symptom1}</li>
//              )}
//          </ol>
        
        return(     
             <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Entry Date</th>
                  <th>Dry Cough</th>
                  <th>Sore Throat</th>
                  <th>Trouble Breathing</th>
                  <th>Heigh Fever</th>
                  <th>Temp</th>
                  <th>Additional Note</th>
                  <th>Doctor Note</th>
                  <th>Immediate Attention</th>
                  <th>Updates</th>
                </tr>
              </thead>
              <tbody>
            {F}{line}
              </tbody>                   
           
        </table>  
            
        
        )
    }
}


/*this 
                patient: res.data.firstName  ==Eve
goes with this:const patientP = <ol>{this.state.patient}</ol>
        return(
            <div className='patientEntryForm'>
                <ol>
            <li>{patientP}</li> */
