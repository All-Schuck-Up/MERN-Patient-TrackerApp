import React, { Component } from 'react';
import axios from 'axios';

export default class createSympotom extends Component {
    constructor() {
        super();
        this.state = {
            _id : "",
            date: '',
            symptom1:'',
            symptom2:'',
            symptom3:'',
            symptom4:'',
            additionalNote: '',
            media: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patientEntry/' + this.props.patientId)
        .then(res => {
            console.log(res);
            this.setState({
                _id : res.data.map(el => el.symptom1),
               // _id : res.data.form.map(el => el.symptom1),
                date : res.data.map(el => el.date),
                symptom1 : res.data.map(el => el.symptom1),
                symptom2 : res.data.map(el => el.symptom2),
                symptom3 : res.data.map(el => el.symptom3),
                symptom4 : res.data.map(el => el.symptom4),
                additionalNote : res.data.map(el => el.additionalNote),
                media : res.data.map(el => el.media)
            });
        });
    }
    render() {
        return(
            <div className='patientEntryForm'>
                <ol>
                    <li>Patient Id: {this.state._id}</li>
                    <li>Entry Date: {this.state.date}</li>
                    <li>Symptom  1: {this.state.symptom1}</li>
                    <li>Symptom  2: {this.state.symptom2}</li>
                    <li>Symptom  3: {this.state.symptom3}</li>
                    <li>Symptom  4: {this.state.symptom4}</li>
                    <li>Additional Note: {this.state.additionalNote}</li>
                    <li>Media: {this.state.media}</li>
                </ol>
            </div>
        )
    }
}