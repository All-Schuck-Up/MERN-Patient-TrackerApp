import React, { Component } from 'react';
import axios from 'axios'; 
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class FormDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       
        this.state = {
            patientEntry:[],
            updateNote:'',
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
       //USE FOR TESTING:
 //     alert('from handleChangeUpdateNote  was submitted:' + this.state.updateNote);
//       var today = new Date().toISOString().substring(0,10);
//       alert('from handleChangeUpdateNote  was submitted:' + 
//            today)
             
       this.setState({
           updateNote: e.target.value})
           //updateNote: this.state.updateNote})
         console.log(this.res);
    };

   isToday(date){
       var d1 = new Date().toISOString().substring(0,10);
       return date === d1;
   }
    

    handleSubmit(event) { 
        alert('You have submitted following to this entry date: ' + this.state.updateNote + " "+ this.props.patientEntry[this.props.patientEntry.length-1].date.substring(0,10));
        if(this.isToday(this.props.patientEntry[this.props.patientEntry.length-1].date.substring(0,10))){
     axios.put('http://localhost:5000/patientEntry/update/'+this.props.patientId,
             {
         updateNote: this.state.updateNote
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
          <Button variant="outlined" className="pull-right" color="primary" size="sm" bordered onClick={this.handleClickOpen}>
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
                    rows="2"
                    margin="dense"
                    name="updateNote"
                    label="Update Note"
                    id="updateNote"
                    type="text"
                    fullWidth
                    value={this.updateNote}
                    onChange={this.handleChangeUpdateNote}
                  />        
                  <Button color="primary" onClick={this.handleClose} >
                    Cancel
                  </Button>{'  '}
                  <Button color="primary" value="Submit" type="submit"    onClick={this.handleClose} >
                    Submit
                  </Button>
                </form>     
            </DialogContent>      
          </Dialog>
       </> 
  );
}
}