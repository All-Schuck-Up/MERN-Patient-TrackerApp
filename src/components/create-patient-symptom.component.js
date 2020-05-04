import React, { Component } from 'react';

export default class createSympotom extends Component 
{
  constructor(props)
  {
    super(props);
    
      this.onCheckedSymptom1=this.onCheckedSymptom1.bind(this);
     this.onCheckedSymptom2=this.onCheckedSymptom2.bind(this);
     this.onCheckedSymptom3=this.onCheckedSymptom3.bind(this);
     this.onCheckedSymptom4=this.onCheckedSymptom4.bind(this);
     this.onChangeMedia=this.onChangeMedia.bind(this);
     this.onChangeadditionalNote=this.onChangeadditionalNote.bind(this);
    // this.onChangeDate=this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      date: Date().toLocaleString(),
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      additionalNote: '',
      media: ''
      // patientName
      //patientID


    
     // this.fileInput = React.createRef();
   
    }
 
  }

 /* onChangeDate(e)
  {
    this.setState ({
      date:e.target.value
      
    });
  } */
  onCheckedSymptom1(e) 
  {
    this.setState({
      sympetom1:e.target.value
      
    });
  }
  onCheckedSymptom2(e)
  {
    this.setState({
      symptom2:e.target.value
      
    });
  }
  onCheckedSymptom3(e)
  {
    this.setState({
      symptom3:e.target.checked
      
    });
  }
  onCheckedSymptom4(e)
  {
    this.setState({
      symptom4:e.target.checked
      
    });
  }
  onChangeadditionalNote(e)
  {
    this.setState({
      additionalNote:e.target.value
      
    });
  }
  onChangeMedia(e)
  {
    this.setState({
      media:e.target.value
      
    });
  }

  onSubmit(e)
  {
    e.preventDefault();
 const symptom  ={
date:this.state.date,
symptom1:this.state.symptom1,
symptom2:this.state.symptom2,
symptom3:this.state.symptom3,
symptom4:this.state.symptom4,
additionalNote:this.state.additionalNote,
media:this.state.media
    }

console.log(symptom);
window.location ='/';
  }
 

  render() {
    return (
      <div>
     
        <form className="symptomEntry" onSubmit={this.onSubmit}>
        <h2 className="text-center">Patient Symptom Entery</h2>
        <p>Date : {this.state.date.substring(0,21)}</p>
        
    <div className="form-group" > 
        <div> <label>Symptome 1 Question  </label> 
        
          
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
        <div> <label>Symptome 2 Question </label>
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
        <div> <label>Symptome 3 Question </label> 
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
        <div> <label >Symptome 4 Question </label>
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
          <div>  <label>Additional Note : </label></div>
            <textarea
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
            <input type="submit" value="Mark entry as immediate attention" className="btn btn-secondary" />
         
          {" "}
            <input type="submit" value="Cancle" className="btn btn-primary" />
         </div>


        </form>
      </div>
    )
  }
}

