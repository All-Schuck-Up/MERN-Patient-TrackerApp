//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios'; 
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class FormDialog extends Component {
    constructor(props) {
        super(props);
        this.handleChangeUpdateNote=this.handleChangeUpdateNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            patientEntry:[],
            updateNote:'',
            //date:date.today(),
            date: '',
            value:'',
            _id:'',
            open:false
        };
    };
    
    handleClickOpen = () => {
       this.setState({ open: true })
    };

   handleClose = () => {
        this.setState({ open: false})
    };
   
   handleChange= (e) => {
        this.setState({updateNote: e.target.value});
      };

   //this updates the state of TextFieldor textarea(each symbol)
   handleChangeUpdateNote = (e) => {
      // alert('from handleChangeUpdateNote  was submitted:' + this.state.updateNote);
       this.setState({
           updateNote: e.target.value})
           //updateNote: this.state.updateNote})
         console.log(this.res);
    };
   
    
    //this works with form
    handleSubmit(event) {      
    alert('A word was submitted: ' + this.state.updateNote);
          const D=(Date.now).substring(0,10);
               
//        //if(this.state.patientEntry.date === this.state.date){
       //if(this.state.date === this.state.patientEntry.date){
        
        
          if(this.props.patientEntry.date === D){ 
        axios.put('http://localhost:5000/patientEntry/update/'+this.props.patientId,
              //this.props.match.params.id,this.updateNote) 
             {updateNote: 
             this.state.updateNote,
             alertMessage:"Adding to the last entry..." +this.state.updateNote+this.props.updateNote
             }) 
        .then(res => {
            console.log(res.res.data);
        })
        .catch((error) => {
            console.log(error);
        })   
//    } else {
//      console.error("It is too late to add ");
    }
    }
  

    onSubmit(e){
        alert('A note was submitted')
           e.preventDefault();
           console.log(this.res.data);
        if(this.state.date === this.state.patientEntry.date){ axios.put('http://localhost:5000/patientEntry/update/' + this.props.patientId,
             {updateNote: this.state.updateNote
             //alertMessage:"Adding to the last entry..."
             })
        .then(res => {
            console.log(res.res.data);

        })
        .catch((error) => {
            console.log(error);
        })   
    }
   }
       
 render() {
  return (
       <> 
      <Button variant="outlined" className="pull-right" color="primary" size="sm" onClick={this.handleClickOpen}>
        Update Last Entry
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Due to legal obligations you can not change current data but you can enter a note here about it. 
          </DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <TextField
                autoFocus
                multiline
                rows="3"
                margin="dense"
                name="updateNote"
                label="Update Note"
                id="updateNote"
                type="text"
                fullWidth
                value={this.updateNote}
                onChange={this.handleChangeUpdateNote}
              />
           <input type="submit" value="Submit" />
            </form>
                  <form onSubmit={this.handleSubmit}>
                      <textarea 
                        id="updateNote" 
                        name="updateNote"
                        value={this.updateNote}
                        onChange={this.handleChangeUpdateNote}
                        rows="3" cols="33">
                      </textarea>
                    <input type="submit" value="Submit" />
                   </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleClose} >
            Cancel
          </Button>
          <Button color="primary" value="Submit" type="submit" onClick={this.handleClose} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
       </> 
  );
}
}
///use left submit inside dialog 