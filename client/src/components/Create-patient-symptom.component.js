import React, { Component } from 'react';
import axios from 'axios'; 

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PatientProfile from "./PatientProfile.component";
export default class createSympotom extends Component 
{
  constructor(props)
  {
    super(props);
    this.onChangeDate=this.onChangeDate.bind(this);
     this.onCheckedSymptom1=this.onCheckedSymptom1.bind(this);
     this.onCheckedSymptom2=this.onCheckedSymptom2.bind(this);
     this.onCheckedSymptom3=this.onCheckedSymptom3.bind(this);
     this.onCheckedSymptom4=this.onCheckedSymptom4.bind(this);
     this.onChangeTemperature=this.onChangeTemperature.bind(this);
     this.onMediaChange=this.onMediaChange.bind(this);
     this.onChangeadditionalNote=this.onChangeadditionalNote.bind(this);
 
    this.onChangeAttention=this.onChangeAttention.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
 // preserve the initial state in a new object
    this.baseState = this.state 
    this.state ={
      date: Date().toLocaleString(),
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      temperature:'',
      mediaDescription:'',
      media:null,
      attention:false,// onclick enable alert lable 
      additionalNote: ''
          
      // patientName
      //patientID
   
    }
    
 
  }
  
  onChangeDate(e)
  {
    this.setState ({ 
      date:e.target.value
      
    });
  };
  componentDidMount() {

    this.setState({ 

      provider: ['test test'],

      doctorNote: 'test Note'

    });

  }
  /*
  formReset(e) { 
    this.setState({
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      temperature:'',
      mediaDescription:'',
      media:null,
      attention:false,// onclick enable alert lable 
      additionalNote: ''
    });
  };
  */
  onChangeAttention(e)
  {
    this.setState ({ 
      attention:e.target.value
      
    });
  };
//on file select 

onMediaChange = event => { 
	
	// Update the state 
	this.setState({ media: event.target.files[0] }); 
	
	}; 
	
  //On file upload (click upload button)
  onFileUpload(e)
  {
    //create an object of form data
    const patientMedia= new FormData();
    //update the formData object
    patientMedia.append(
      "myFile", 
      this.state.media,
      this.state.media.name
      );
      //file upload info
//console.log(this.state.media);
axios.post("http://localhost:3000/uploadfile", patientMedia); 
 
  };
  onCheckedSymptom1(e) 
  {
    this.setState({
      sympetom1:e.target.value
      
    });
  };

  onCheckedSymptom2(e)
  {
    this.setState({
      symptom2:e.target.value
      
    });
  };
  onCheckedSymptom3(e)
  {
    this.setState({
      symptom3:e.target.checked
      
    });
  };
  onCheckedSymptom4(e)
  {
    this.setState({
      symptom4:e.target.checked
      
    });
  };
  onChangeadditionalNote(e)
  {
    this.setState({
      additionalNote:e.target.value
      
    });
  };
 /* onChangeMedia(e)
  {
    this.setState({
      media:e.target.value
      
    });
  }; */
  
  onChangeTemperature(e)
  {
    this.setState({
      temperature:e.target.value
      
    });
  };

  onSubmit(e)
  {
    e.preventDefault();
const symptom  ={
date:this.state.date,
symptom1:this.state.symptom1,
symptom2:this.state.symptom2,
symptom3:this.state.symptom3,
symptom4:this.state.symptom4,
temperature:this.state.temperature,
media:this.state.media,
additionalNote:this.state.additionalNote

    }
  
console.log(symptom);
window.location ='/';
  }
  // reset
  

  render() {
    return (
      <div>
     
     <Row>
      <Col sm="6">
        <Card body>
        
          
        <form className="symptomEntry" class="form-horizontal" onSubmit={this.onSubmit}>
        <h3 className="text-center">Patient Symptom Entery</h3>
        
        <input  type ="hidden"
                className="form-control"
                value={this.state.attention}
                onChange={this.onChangeAttention}
                            />
        <p>Date : {this.state.date.substring(0,21)}</p>
    
           
            
    <div className="form-group" > 
        <div> <label>Trouble breathing ?  </label>{"      "} 
        
          
        <input class ="spaceInput" type="radio"
       
        value="yes"
        checked ={this.state.symptom1==="yes"} 
        onChange={this.onCheckedSymptom1 } />
        Yes  {"  "}
      
      <input class ="spaceInput" type="radio"
        
        value="no"
        checked ={this.state.symptom1==="no"} 
        onChange={this.onCheckedSymptom1 } />
        No 
      
    
     
    </div>
    </div>
    <div className="form-group" > 
        <div> <label>Sore throat  ? </label> {"        "} 
        <label class="radio-inline">
          
        <input class ="spaceInput" type="radio" 
        value="yes"
        checked={this.state.symptom2==="yes"} 
        onChange={this.state.onCheckedSymptom2} />
        Yes
      </label>
    
    
      <label class="radio-inline">
        <input class ="spaceInput"  type="radio"
        value="no"
        checked={this.state.symptom2==="no"}
        onChange={this.state.onCheckedSymptom2} />
    
      No
      </label>
    </div>
   </div>
    <div className="form-group"> 
        <div> <label>A dry cough ? </label> {"        "} 
        <label>
          
        <input class ="spaceInput" type="radio" 
        value="yes"
        checked={this.state.symptom3==="yes"} 
        onChange={this.state.onCheckedSymptom2} />
        Yes 
      </label>
       
      <label>
        <input class ="spaceInput" type="radio"
        value="no"
        checked={this.state.symptom3==="no"}
        onChange={this.state.onCheckedSymptom3} />
    
      No
      </label>
    </div> </div>
    <div className="formm-group">
        <div> <label >Heigh Fever ? </label>{"        "} 
        <label>
          
        <input  class ="spaceInput" type="radio" 
        value="yes"
        checked={this.state.symptom4==="yes"} 
        onChange={this.state.onCheckedSymptom4} />
        Yes 
       
      </label>
    
    
      <label>
        <input class ="spaceInput"  type="radio"
        value="no"
        checked={this.state.symptom4==="no"}
        onChange={this.state.onCheckedSymptom4} />
    
      No
      </label>
      </div>
    </div>
    
    <div className="form-group" > 
        
    <label class="control-label col-sm-2" >Temerature: </label>
    
             <input class ="spaceInput"  type ="text"
                required
                className="form-control"
                value={this.state.temperature}
                onChange={this.onChangeTemperature}
                placeholder ={"body temperature "}
                />
          </div>
       
      
      <div class="form-group">
             
     <div>  <label  >Media  : </label></div>
      
            <div> 
                <input class ="spaceInput" 
                 type="file"
                 onChange={this.onMediaChange} /> 
                <button onClick={this.onFileUpload}> 
                  </button> 
            </div> 
         
        </div> 

    <div className="form-group" > 
          <div>  <label>Additional Note : </label></div>
            <textarea class ="spaceInput" 
                required
                rows ={6}

                className="form-control"
                value={this.state.additionalNote}
                onChange={this.onChangeadditionalNote}
                placeholder ={"Add additional Note to the doctor"}
                />
          </div>
          
          <div className="form-group">
       
            <input type="submit" value="Save Record" className="btn btn-primary" />
          {" "}
            
            <button className="btn btn-secondary" onClick={() => this.setState({ attention: true})}>Mark entry as immediate attention</button>
         
          {" "}
          <button   className="btn btn-primary" 
          type="button">Cancel</button>
          
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
          <Button >View  </Button>
          
        </Card>
      </Col>
    </Row>
      </div>
    )
  }
}


