import React, { Component } from 'react';
import axios from 'axios';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const isFormValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length < 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

export default class createSympotom extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
//    this.handleChangeTemp = this.handleChangeTemp.bind(this);
    
    this.state = {
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      temp: '',
      comment: '',
      doctorNote:'none',
      immediateAttention: false,
      updateNote: 'none',
      formErrors: { 
        valid : "Please enter a valid number",
        highTemp : "This is a high temperature. We will create an alert for your doctor",
        tooHighTemp: "too high! the highest recorded temperature is 115F by 52yo Willie Jones, maybe typo?"
      }
    };
    this.baseState = this.state
  }

  resetForm = () => {
    this.setState(this.baseState)
  }


  onSubmit(e) {
    if (isFormValid(this.state)) {
     axios.put('http://localhost:5000/patientEntry/add/' + this.props.patientId, 
      {symptom1: this.state.symptom1,
      symptom2: this.state.symptom2,
      symptom3: this.state.symptom3,
      symptom4: this.state.symptom4,
      temp: this.state.temp,
      comment: this.state.comment,
      doctorNote:this.state.doctorNote,
      immediateAttention: this.state.immediateAttention,
      updateNote: this.state.updateNote})   
     .then(res => console.log(res.data));
    
     //high temperature alert sent to the alert cluster database
     if(this.isHighTemp(this.state.temp)) {
      axios.post('http://localhost:5000/alert/add', {
        patientID : this.props.patientId,
        lastName : this.props.lastName,
	      alertMessage: "High fever - " + this.state.temp + "F"
      }).then(res => console.log(res.data));
     }
     //symptoms alert sent to the alert cluster database
     if(this.state.symptom1 === 'yes' || this.state.symptom2 === 'yes' || this.state.symptom3 === 'yes' || this.state.symptom4 === 'yes') {
      axios.post('http://localhost:5000/alert/add', {
        patientID : this.props.patientId,
        lastName : this.props.lastName,
	      alertMessage: "One or more symptoms appeared"
      }).then(res => console.log(res.data));
     }

      window.location = '/';
      

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

  };

  // handleChange(e) {
    
  //   const { name, value } = e.target;
  //   let formErrors = { ...this.state.formErrors };

  //   switch (name) {
  //     case "temperature":

  //       formErrors.temperature =

  //         value.length < 2 ? " Please Enter valid Number" : "";

  //       break;

  //     case "additionalNote":

  //       formErrors.additionalNote =

  //         value.length < 5 ? " Please Enter detailed note" : "";

  //       break;
  //     default:

  //       break;

  //   }


  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  // };

  handleChangeTemp = (event) => {
    let num = event.target.value;
    this.setState({temp: num});
  }

  handleChangeAdditionalNote = (event) => {
    this.setState({comment: event.target.value});
  }
  
  //on file select 
  // onMediaChange = event => {
  //   // Update the state 
  //   this.setState({ media: event.target.files[0] });
  // };
  // //On file upload (click upload button)
  // onFileUpload(e) {
  //   //create an object of form data
  //   const patientMedia = new FormData();
  //   //update the formData object
  //   patientMedia.append(
  //     "myFile",
  //     this.state.media,
  //     this.state.media.name
  //   );
  //   //file upload info
  //   //console.log(this.state.media);
  //   //axios.post("http://localhost:5000/uploadfile", patientMedia);

  // };
  isHighTemp(temp) {
    return temp > 99
  }

  render() {
    const { formErrors } = this.state;
    return (

      <div>
        <Row>
          <Col sm="8">
            <Card body>
              <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h3 className="text-center">Patient Symptom Entry</h3>
                <div className="form-group" >
                  <label>Trouble breathing ?  </label>{"      "}

                   <input className="spaceInput" type="radio" value="yes" name="symptom1"   onClick={() => this.setState({symptom1 : 'yes'})} /> Yes  {"  "}

                    <input className="spaceInput" type="radio" value="no" name="symptom1" onClick={() => this.setState({symptom1 : 'no'})}  /> No  {"  "}
                </div>

                <div className="form-group" >

                  <label>A dry cough ? </label>{"      "}

                    <input className="spaceInput" type="radio" value="yes" name="symptom2" onClick={() => this.setState({symptom2 : 'yes'})} /> Yes  {"  "}

                    <input className="spaceInput" type="radio" value="no" name="symptom2" onClick={() => this.setState({symptom2 : 'no'})} /> No  {"  "}
                </div>
                   
                   <div className="form-group" >

                     <label>Sore throat ?  </label>{"        "}

                      <input className="spaceInput" type="radio" value="yes" name="symptom3" onClick={() => this.setState({symptom3 : 'yes'})} /> Yes  {"  "}

                      <input className="spaceInput" type="radio" value="no" name="symptom3"  onClick={() => this.setState({symptom3 : 'no'})} /> No  {"  "}

                  </div>
                  <div className="form-group" >

                     <label>Heigh Fever ?  </label>{"        "}

                      <input className="spaceInput" type="radio" value="yes" name="symptom4" onClick={() => this.setState({symptom4 : 'yes'})} /> Yes  {"  "}

                      <input className="spaceInput" type="radio" value="no" name="symptom4" onClick={() => this.setState({symptom4 : 'no'})}  /> No  {"  "}

                </div>
                <div className="form-group" >
                <label>Temperature:</label> {"    "} 
                     <textarea className="spaceInput" onChange={this.handleChangeTemp} rows={1} /> {"    "}
                     {this.state.temp < 90 && this.state.temp > 0 && (<span className="errorMessage" >{formErrors.valid}</span>
                                                                     )}
                     {this.isHighTemp(this.state.temp) && (<span className="errorMessage" >{formErrors.highTemp}</span>
                                                          )}
                     {this.state.temp > 114 && (<span className="errorMessage" >{formErrors.tooHighTemp}</span>
                                                          )}
                  
                </div>

{/* 
                <div className="form-group">
                  <div>  <label  >Media  : </label></div>
                  <div>
                    <input className="spaceInput"
                      type="file"
                      onChange={this.onMediaChange} />
                    <button onClick={this.onFileUpload}>
                    </button>
                  </div>
                </div> */}

                <div className="form-group" >
                <label>Additional Note : </label>
                  <textarea className="spaceInputNote"
                    name="additionalNote"
                    rows={4}
                    onChange={this.handleChangeAdditionalNote}
                    placeholder={"Add additional note to the doctor"}
                  />

                </div>
                <div className="form-group">
                  {" "}<Button className="btn btn-primary" onClick={() => this.setState({ immediateAttention: true })}>Mark as Immediate Attention</Button>
                  {" "}<Button className="btn btn-primary" type="submit" >Save Record</Button>
                  {" "}<Button className="btn btn-primary" type="button" name="cancel" onClick={this.resetForm}>Cancel</Button>

                </div>
              </form>
            </Card>
          </Col>
          <Col sm="4">
            <Card >
              <CardTitle > <h3 className="text-center">Latest Doctor Note</h3></CardTitle>
              <CardText> On click doctors note from patient profile will be displayed
              On click doctors note from patient profile
              </CardText>
              <Button >View</Button>

            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}