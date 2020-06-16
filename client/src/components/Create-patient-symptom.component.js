
import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoctorNotes from './ProviderNoteDisplay.component'
import { Card, Button, Row, Col } from 'reactstrap';
import { Progress } from "reactstrap";

const isFormValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length < 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};
export default class createSympotom extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.immediateAttentionSubmit = this.immediateAttentionSubmit.bind(this);
    this.state = {
      loaded: 0,
      symptom1: "",
      symptom2: "",
      symptom3: "",
      symptom4: "",
      temp: "",
      comment: "",
    updateNote:'none',
      immediateAttention: false,
      media: "",
      formErrors: {
        valid: "Please enter a valid number",
        highTemp:
          "This is a high temperature. We will create an alert for your doctor",
        tooHighTemp:
          "too high! the highest recorded temperature is 115F by 52yo Willie Jones, maybe typo?",
      },
    };
    this.baseState = this.state;
  }
  handleChangeTemp = (event) => {
    let num = event.target.value;
    this.setState({ temp: num });
  };

  handleChangeAdditionalNote = (event) => {
    this.setState({ comment: event.target.value });
  };
  isHighTemp(temp) {
    return temp > 99;
  }

  onFileChange = (event) => {
    var file = event.target.files[0];
    console.log(file);

    console.log(this.validateSize(event));
    if (this.validateSize(event) && this.validateMediaType(event)) {
      console.log(file);
      // if return true allow to setState
      this.setState({
        media: file,
      });
    }
  };
//Validate File type
validateMediaType = (event) => {
  //getting file object
  let files = event.target.files;
  //define message container
  let err = "";
  // list allow mime type
  const types = [
    "image/png",
    "image/jpeg",
    "image/gif",
    "video/mp4",
    "video/avi",
  ];
  // loop access array
  for (let num = 0; num < files.length; num++) {
    // compare file type find doesn't matach
    if (types.every((type) => files[num].type !== type)) {
      // create error message and assign to container
      err += files[num].type + " is not a supported format\n";
    }
  }

  if (err !== "") {
    // if message not same old that mean has error
    event.target.value = null; // discard selected file
    toast.error(err);
    return false;
  }
  return true;
};
//media Size validator
  
validateSize = (event) => {
  let files = event.target.files
  let size = 200000000 
  let err = []; 
  for(var x = 0; x<files.length; x++) {
  if (files[x].size > size) {
   err[x] = files[x].type+'is too large, please pick a smaller file\n';
 }
};
for(var z = 0; z<err.length; z++) {
 toast.error(err[z])
 event.target.value = null
}
return true;
};

  onSubmit = async (e) => {
    //e.preventDefault();

    const symptom = new FormData();

    symptom.append("symptom1", this.state.symptom1);
    symptom.append("symptom2", this.state.symptom2);
    symptom.append("symptom3", this.state.symptom3);
    symptom.append("symptom4", this.state.symptom4);

    symptom.append("temp", this.state.temp);
    symptom.append("comment", this.state.comment);
    symptom.append("updateNote", this.state.updateNote);
    symptom.append("immediateAttention", this.state.immediateAttention);
    symptom.append("media", this.state.media);

    if (isFormValid(this.state)) 
    {
      axios
        .put(
          "http://localhost:5000/patientEntry/add/" + this.props.patientId,
          symptom,
          {
            onUploadProgress: (ProgressEvent) => {
              this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
              });
            },
          }
        )
        .then((res) => {
          toast.success("upload success");
        })
        .catch((err) => {
          toast.error("upload fail ");
        });
        setTimeout(function () {
          window.location.reload(1);
      }, 5000); 
     //high temperature alert sent to the alert cluster database
     if(this.isHighTemp(this.state.temp)) {
      axios.post('http://localhost:5000/alert/add', {
        patientId : this.props.patientId,
        lastName : this.props.lastName,
	      alertMessage: "High fever - " + this.state.temp + "F"
      }).then(res => console.log(res.data));
     }
     //symptoms alert sent to the alert cluster database
     if(this.state.symptom1 === 'yes' || this.state.symptom2 === 'yes' || this.state.symptom3 === 'yes' || this.state.symptom4 === 'yes') {
      axios.post('http://localhost:5000/alert/add', {
        patientId : this.props.patientId,
        lastName : this.props.lastName,
	      alertMessage: "One or more symptoms appeared"
      }).then(res => console.log(res.data));
     }
     //if the immediate attention is clicked post request will be sent to the immediate attention cluster
     if (this.state.immediateAttention) {
       axios.post('http://localhost:5000/immediateAttention/add', {
        patientId : this.props.patientId,
        lastName : this.props.lastName
       }).then(res => console.log(res.data));
     }

      window.location = '/patient/login/:id';
      

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");

    }
  };
     
  
  handleChangeAdditionalNote = (event) => {
    this.setState({comment: event.target.value});
  }

  immediateAttentionSubmit = () => {
    this.setState({ immediateAttention: true });
    this.notify()
  }
  
  notify = () => toast.warn('Marked as Immediate Attention!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  resetForm(e) {
    // e.preventDefault();
    this.props.resetForm();
  }
  resetForm = () => {
    this.setState(this.baseState);
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <ToastContainer />
        <Row>
          <Col sm="8">
            <Card body>
              <form className="form-horizontal" onSubmit={this.onSubmit}>
                {
                  <ToastContainer
                    position="top-right"
                    autoClose={10000000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    autoDismiss={true}
                  />
                }
                <h3 className="text-center">Patient Symptom Entry</h3>

                <div class="form-group">
                  <div class="form-group"></div>
                </div>
                <div className="form-group">
                  <label>Trouble breathing ? </label>
                  {"      "}
                  <input
                    className="spaceInput"
                    required="required"
                    type="radio"
                    value="yes"
                    name="symptom1"
                    onClick={() => this.setState({ symptom1: "yes" })}
                  />{" "}
                  Yes {"  "}
                  <input
                    className="spaceInput"
                    required="required"
                    type="radio"
                    value="no"
                    name="symptom1"
                    onClick={() => this.setState({ symptom1: "no" })}
                  />{" "}
                  No {"  "}
                </div>
                <div className="form-group">
                  <label>A dry cough ? </label>
                  {"      "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="yes"
                    name="symptom2"
                    onClick={() => this.setState({ symptom2: "yes" })}
                  />{" "}
                  Yes {"  "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="no"
                    name="symptom2"
                    onClick={() => this.setState({ symptom2: "no" })}
                  />{" "}
                  No {"  "}
                </div>

                <div className="form-group">
                  <label>Sore throat ? </label>
                  {"        "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="yes"
                    name="symptom3"
                    onClick={() => this.setState({ symptom3: "yes" })}
                  />{" "}
                  Yes {"  "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="no"
                    name="symptom3"
                    onClick={() => this.setState({ symptom3: "no" })}
                  />{" "}
                  No {"  "}
                </div>
                <div className="form-group">
                  <label>Heigh Fever ? </label>
                  {"        "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="yes"
                    name="symptom4"
                    onClick={() => this.setState({ symptom4: "yes" })}
                  />{" "}
                  Yes {"  "}
                  <input
                    className="spaceInput"
                    required
                    type="radio"
                    value="no"
                    name="symptom4"
                    onClick={() => this.setState({ symptom4: "no" })}
                  />{" "}
                  No {"  "}
                </div>
                <div className="form-group">
                  <label>Temperature:</label> {"    "}
                  <textarea
                    className="spaceInput"
                    onChange={this.handleChangeTemp}
                    rows={1}
                  />{" "}
                  {"    "}
                  {this.state.temp < 90 && this.state.temp > 0 && (
                    <span className="errorMessage">{formErrors.valid}</span>
                  )}
                  {this.isHighTemp(this.state.temp) && (
                    <span className="errorMessage">{formErrors.highTemp}</span>
                  )}
                  {this.state.temp > 114 && (
                    <span className="errorMessage">
                      {formErrors.tooHighTemp}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label>Additional Note : </label>
                  <textarea
                    className="spaceInputNote"
                    name="additionalNote"
                    rows={4}
                    onChange={this.handleChangeAdditionalNote}
                    placeholder={"Add additional note to the doctor"}
                  />
                </div>

                <div className="form-group">
                  <label>Select Media : </label>
                  {"      "}
                  <input type="file" onChange={this.onFileChange} />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <Progress
                      max="100"
                      color="success"
                      value={this.state.loaded}
                    >
                      {Math.round(this.state.loaded, 2)}%
                    </Progress>
                  </div>
                </div>
                <div className="form-group">


                  {" "}<Button className="btn btn-primary" onClick={this.immediateAttentionSubmit}>Mark as Immediate Attention</Button>
                  {" "}<Button className="btn btn-primary" type="submit" >Save Record</Button>
                  {" "}
  <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={() => this.resetForm()}
                  >
                    Cancel
                  </button>

                </div>
              </form>
            
            </Card>
          </Col>
          <Col sm="4">

            <DoctorNotes patientId={this.props.patientId}/>

          </Col>
        </Row>
      </div>
    );
  }
}
