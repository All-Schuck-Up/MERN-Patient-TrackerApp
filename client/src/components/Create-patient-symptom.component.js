import React, { Component } from 'react';
import axios from 'axios';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Progress} from 'reactstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

// const ValidateTemp =() => {
//   let errors = {}
//   let formIsValid = true
// if (!this.state.temp || this.state.temp.length < 2) {
//     errors.name = "Please Enter a valid number..."
//     toast.error(`${errors.name}`, {
//       position: toast.POSITION.TOP_LEFT      });
//     formIsValid = false
//   }

// this.setState({
//     errors: errors
//   })
// }
export default class createSympotom extends Component {
  constructor(props) {
    super(props);
    this.onFileChange=this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      loaded:0,
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      temp: '',
      comment: '',
      doctorNote:'none',
      immediateAttention: false,
      media:'',
      formErrors: "Please enter a valid number"
    };
    this.baseState = this.state
  }

  resetForm = () => {
    
    this.setState(this.baseState)
  }
  

   onFileChange(e) {
     this.setState({ media: e.target.files[0] })
 }
  
  
onSubmit(e) {
  e.preventDefault();
 
      
  const symptom = new FormData()

  symptom.append('symptom1', this.state.symptom1);
  symptom.append('symptom2', this.state.symptom2);
  symptom.append('symptom3', this.state.symptom3);
  symptom.append('symptom4', this.state.symptom4);
  
  symptom.append('temp', this.state.temp);
  symptom.append('comment', this.state.comment);
  symptom.append('doctorNote', this.state.doctorNote);
  symptom.append('immediateAttention', this.state.immediateAttention);
   symptom.append('media', this.state.media);  
  

   if (isFormValid(this.state)) {
   axios.put('http://localhost:5000/patientEntry/add/'+ this.props.patientId, symptom,{
   //progress bar for image upload 
   onUploadProgress: ProgressEvent => {
      this.setState({
        loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
    })
},
})
 .then(res => { 
  toast.success('Symptom Entered successfully')
  //window.location = '/';
})
.catch(err => { 
  toast.error('upload fail ')
}) 

};
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
                { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> }
               
               <div class="form-group">
   <ToastContainer />
</div>
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
                     <textarea name ="temp" className="spaceInput" onChange={this.handleChangeTemp} rows={1} /> {"    "}
                     {this.state.temp < 90 && this.state.temp > 0 && (<span className="errorMessage" >{formErrors}</span>
                )}
                  
                </div>



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
                <label>Select Media : </label>
                            <input type="file"  onChange={this.onFileChange} />
                        </div>
                        <div class="form-group">

<Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>

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