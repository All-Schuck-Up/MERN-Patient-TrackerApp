import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, UncontrolledCollapse, CardBody } from 'reactstrap';


export default class ProviderNoteDisplay extends Component {
  constructor() {
    super();
    this.state = {
      doctorNoteArray: []
    };
  }

  async componentDidMount() {
    //retrieves all the doctor notes
    axios.get('http://localhost:5000/doctorNotes/' + this.props.patientId)
        .then(response => {
            console.log(response);
            this.setState({doctorNoteArray : response.data});
        });
  };

  render() {
    const doctorNotes = this.state.doctorNoteArray.map(elem => {
      return(
        <div key={elem}>
      <Card body key={elem}>
          <CardText key={elem}>{elem}</CardText>
       </Card>
       </div>)
  })
    return (

      <div>
       
            <Card >
              <CardTitle > <h3 className="text-center">Latest Doctor Notes</h3></CardTitle>
               <Button className="viewAllDoctorNotesButton" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>View All Doctor Notes</Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        {doctorNotes}
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                   <p>Latest Note: {this.state.doctorNoteArray[this.state.doctorNoteArray.length - 1]}</p>
              </Card>
      </div>
    )
  }
}