import React from 'react';
import AlertComponent from './PatientAlert.component';
import axios from 'axios';
import { Alert } from 'reactstrap';

class AlertList extends React.Component {
    constructor() {
        super();
        this.state = {
            alertArray: []
        }
    }
    async componentDidMount() {
        axios.get('http://localhost:5000/alerts')
            .then(response => {
                console.log(response);
                this.setState({alertArray : response.data});
            });
    };
    render() {
        const alert = this.state.alertArray.map((elem) => {
            return(<AlertComponent key={elem.date} objectID={elem._id} patientId={elem.patientId} alertMessage={elem.alertMessage} date={elem.date} lastName={elem.lastName}/>)
        });
        return(
            
            <div className="alertList">
                <Alert color="danger">{this.state.alertArray.length === 0 ? 'No Alert' : 'Alerts!!!'}</Alert>
                <ol>
                {alert}
                </ol>
            </div>
        )
    }
}

export default AlertList