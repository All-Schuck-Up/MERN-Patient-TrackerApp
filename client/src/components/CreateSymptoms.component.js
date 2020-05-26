import React, { Component } from 'react';
import axios from 'axios';

export default class createSympotom extends Component {
    constructor() {
        super();
        this.state = {formArray:[]
//            _id : "",
//            date: '',
//            symptom1:'',
//            symptom2:'',
//            symptom3:'',
//            symptom4:'',
//            additionalNote: '',
//            media: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patientEntry/' + this.props.patientId)
        .then(res => {
            console.log(res);
            this.setState({formArray:res.data.form
//                _id : res.data.map(el => el.symptom1),
//               // _id : res.data.form.map(el => el.symptom1),
//                date : res.data.map(el => el.date),
//                symptom1 : res.data.map(el => el.symptom1),
//                symptom2 : res.data.map(el => el.symptom2),
//                symptom3 : res.data.map(el => el.symptom3),
//                symptom4 : res.data.map(el => el.symptom4),
//                additionalNote : res.data.map(el => el.additionalNote),
//                media : res.data.map(el => el.media)
            });
        });
    }
    render() {
        
        return(
            <div className='patientEntryForm'>
                <ol>
                    <li>Patient Id: {this.state.formArray[0]}</li>
                    
                </ol>
            </div>
        )
    }
}
//<li>Entry Date: {this.state.form.date}</li>
//                    <li>Symptom  1: {this.state.form.symptom1}</li>
//                    <li>Symptom  2: {this.state.form.symptom2}</li>
//                    <li>Symptom  3: {this.state.form.symptom3}</li>
//                    <li>Symptom  4: {this.state.form.symptom4}</li>
//                    <li>Additional Note: {this.state.form.additionalNote}</li>
//                    <li>Media: {this.state.form.media}</li>