import React, { Component } from 'react';
import axios from 'axios';

export default class PatientEntryList extends Component {
    constructor() {
        super();
        this.state = { 
            entriesArray: [{
                symptom1: '',
                symptom2: ''
            }]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/patientEntry/5ecb471af1741b0a4e6b993a')
            // .then(res => res.data.patientEntry.map(eachEntry => {
            //     this.setState({entriesArray.map()})
            // }))
        .then(res => {
            res.data.patientEntry.map( entry => {
                let symtopm1 = entry.symptom1
                let symptom2 = entry.symptom2
                const newEntry = {symtopm1, symptom2}
                this.setState({entriesArray: [...this.state.entriesArray, newEntry]})
            })
        })
    }
            
    
    render() {
        return(
            <div className="hell">
                {this.state.entriesArray[1].symptom1}
            </div>
        )
    }
}
