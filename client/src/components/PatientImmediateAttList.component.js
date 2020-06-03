import React from 'react';
import PatientImmediateAtt from './PatientImmediateAtt.component';
import axios from 'axios';
import { Alert } from 'reactstrap';

class PatientImmediateAttList extends React.Component {
    constructor() {
        super();
        this.state = {
            immediateAttArray: []
        }
    }
    async componentDidMount() {
        axios.get('http://localhost:5000/immediateAttentions')
            .then(response => {
                console.log(response);
                this.setState({immediateAttArray : response.data});
            });
    };
    render() {
        const immediateAtt = this.state.immediateAttArray.map((elem) => {
            return(<PatientImmediateAtt key={elem} objectID={elem._id} patientID={elem.patientID}/>)
        });
        return(
            
            <div className="immediateAttList">
                <Alert color="danger">{this.state.immediateAttArray.length === 0 ? 'No Immediate Attention Requested' : 'Immediate Attention Requested'}</Alert>
                {immediateAtt}
            </div>
        )
    }
}

export default PatientImmediateAttList