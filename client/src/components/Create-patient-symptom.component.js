import React, { Component } from 'react';
import axios from 'axios';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
//import PatientProfile from "./PatientProfile.component";


const isFormValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
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

    this.onChangeAttention = this.onChangeAttention.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: Date().toLocaleString(),
      firstName: '',
      lastName: '',
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      temperature: '',
      //media:'',
      // mediaDescription: '',
      // media: null,
      immediateAttention: false,
      additionalNote: '',

      formErrors: {
        firstName: "",
        lastName:"",
        temperature: "",
        additionalNote: ""


      }

    };
    this.baseState = this.state
  }

  resetForm = () => {
    this.setState(this.baseState)
  }


  onSubmit(e) {
    const symptom = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      date: this.state.date,
      symptom1: this.state.symptom1,
      symptom2: this.state.symptom2,
      symptom3: this.state.symptom3,
      symptom4: this.state.symptom4,
      additionalNote: this.state.additionalNote,
      temperature: this.state.temperature,
      //  media: this.state.media,
      immediateAttention: this.state.immediateAttention,
    }
    if (isFormValid(this.state)) {
      console.log(symptom);
     axios.post('http://localhost:5000/patientEntry/add', symptom)
 
   //axios.post('http://localhost:5000/PatientSymptomEntrys/add', symptom)

     .then(res => console.log(res.data));

   window.location = '/';
      

    }


    else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

  };

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {

      case "firstName":

        formErrors.firstName =

          value.length < 1 ? " Please Enter your First Name" : "";

        break;
        
        case "lastName":

        formErrors.lastName =

          value.length < 1 ? " Please Enter your last Name" : "";

        break;
        

      case "temperature":

        formErrors.temperature =

          value.length < 2 ? " Please Enter valid Number" : "";

        break;

      case "additionalNote":

        formErrors.additionalNote =

          value.length < 5 ? " Please Enter detailed note" : "";

        break;
      default:

        break;

    }


    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  };

  onChangeDate(e) {
    this.setState({
      date: e.target.value

    });
  };


  onChangeAttention(e) {
    this.setState({
      immediateAttention: e.target.value

    });
  };

  //on file select 
  onMediaChange = event => {
    // Update the state 
    this.setState({ media: event.target.files[0] });
  };
  //On file upload (click upload button)
  onFileUpload(e) {
    //create an object of form data
    const patientMedia = new FormData();
    //update the formData object
    patientMedia.append(
      "myFile",
      this.state.media,
      this.state.media.name
    );
    //file upload info
    //console.log(this.state.media);
    //axios.post("http://localhost:5000/uploadfile", patientMedia);

  };



  render() {
    const { formErrors } = this.state;
    return (

      <div>
        <Row>
          <Col sm="8">
            <Card body>

              <form class="form-horizontal" onSubmit={this.onSubmit}>
                <h3 className="text-center">Patient Symptom Entery</h3>
                <input type="hidden"
                  className="form-control"
                  value={this.state.immediateAttention}
                  onChange={this.onChangeAttention}
                />
                <p>Date : <input type="text" name="date"
                  className="form-control"
                  value={this.state.date.substring(0, 21)}
                  onChange={this.handleChange.bind(this)}
                /></p>

                <div className="form-group" >

                  <label class="control-label col-sm-2" >First Name: </label>
                  <input class="spaceInput" type="text"
                    name="firstName"
                    required
                    className="form-control"
                    value={this.state.firstName}
                      placeholder={"First Name "}
                      onChange={this.handleChange.bind(this)}
                  />
                </div>

                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage" >{formErrors.firstName}</span>
                )}


<div className="form-group" >

<label class="control-label col-sm-2" >LastName: </label>
<input class="spaceInput" type="text"
  name="lastName"
  required
  className="form-control"
  value={this.state.lastName}
    placeholder={"Last Name "}
    onChange={this.handleChange.bind(this)}
/>
</div>

{formErrors.lastName.length > 0 && (
<span className="errorMessage" >{formErrors.lastName}</span>
)}

                <div className="form-group" >
                  <div> <label>Trouble breathing ?  </label>{"      "}

                   <input class="spaceInput" type="radio" value="yes" name="symptom1"   required/> Yes  {"  "}

                    <input class="spaceInput" type="radio" value="no" name="symptom1" required /> No  {"  "}

                    <div onChange={this.handleChange.bind(this)}>

                    </div>
                  </div>
                </div>

                <div className="form-group" >

                  <div> <label>A dry cough ? </label>{"      "}

                    <input class="spaceInput" type="radio" value="yes" name="symptom2" required /> Yes  {"  "}

                    <input class="spaceInput" type="radio" value="no" name="symptom2" required/> No  {"  "}
                    <div onChange={this.handleChange.bind(this)}>
                    </div>

                  </div>

                  <div className="form-group" >

                    <div> <label>Sore throat ?  </label>{"        "}

                      <input class="spaceInput" type="radio" value="yes" name="symptom3" required/> Yes  {"  "}

                      <input class="spaceInput" type="radio" value="no" name="symptom3"  required/> No  {"  "}

                      <div onChange={this.handleChange.bind(this)}>
                      </div>

                    </div>
                  </div>
                  <div className="form-group" >

                    <div> <label>Heigh Fever ?  </label>{"        "}

                      <input class="spaceInput" type="radio" value="yes" name="symptom4" required/> Yes  {"  "}

                      <input class="spaceInput" type="radio" value="no" name="symptom4" required /> No  {"  "}


                      <div onChange={this.handleChange.bind(this)}>
                      </div>
                       </div>
                  </div>
                </div>
                <div className="form-group" >


                  <label class="control-label col-sm-2" >Temerature: </label>

                  <input class="spaceInput" type="text"
                    name="temperature"
                    required
                    className="form-control"
                    value={this.state.temperature}
                    onChange={this.handleChange.bind(this)}

                    placeholder={"body temperature "}
                  />
                </div>

                {formErrors.temperature.length > 0 && (
                  <span className="errorMessage" >{formErrors.temperature}</span>
                )}

                <div class="form-group">

                  <div>  <label  >Media  : </label></div>

                  <div>
                    <input class="spaceInput"
                      type="file"
                      onChange={this.onMediaChange} />
                    <button onClick={this.onFileUpload}>
                    </button>
                  </div>

                </div>

                <div className="form-group" >
                  <div>  <label>Additional Note : </label></div>
                  <textarea class="spaceInput"
                    name="additionalNote"
                    required
                    rows={4}

                    className="form-control"
                    value={this.state.additionalNote}
                    onChange={this.handleChange.bind(this)}
                    placeholder={"Add additional Note to the doctor"}
                  />

                </div>
                {formErrors.additionalNote.length > 0 && (

                  <span className="errorMessage" >{formErrors.additionalNote}</span>
                )}
                <div className="form-group">
                  {" "}
                  <input type="button" value="Mark as Immediate Attention" onClick={() => this.setState({ immediateAttention: true })} className="btn btn-primary" />
                  {" "}

                  {" "}
                  <input type="submit" value="Save Record" className="btn btn-primary" />
                  {" "}


                  <button className="btn btn-primary"
                    type="button" name="cancle" onClick={this.resetForm}>Cancel</button>

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