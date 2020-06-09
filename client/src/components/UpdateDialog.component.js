import React,{ Component }from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



//const PatientEntry = props =>(
//    {props.patientEntry._id},
//    {props.patientEntry.updateNote},
//    {props.patientEntry.date}
//)

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
 // const [updatePatientEntry] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const handleClick = () => {
      //setOpen(false);
      updatePatientEntry(this.props.patientEntry._id);
      
  }  
  
  function updatePatientEntry(id){
    console.log("updating ")
   axios.put('http://localhost:5000/patientEntry/update/id')
        .then(res => {
            console.log(res.data);
        this.setState({
            //patientEntry: res.data.map(el=>el.doctorNote)});
            patientEntry: this.state.patientEntry.filter((el=>el._id === id) && (el=>el.date === this.state.date))
        });
        })
        .catch((error) => {
            console.log(error);
      })   
    }
    
  return (
    <div>
      <Button variant="outlined" class="pull-right" color="primary" size="sm" onClick={handleClickOpen}>
        Update Last Entry
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Due to legal obligations you can not change current data but you can enter a note here about it. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="updateNote"
            label="Update Note"
            type="input"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} >
            Cancel
          </Button>
          <Button color="primary" onClick={() =>{handleClick()}} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//<Button onClick={handleClose} color="primary">
//            Submit
//          </Button>
//
//<Button color="primary" onClick={() =>{props.updatePatientEntry(props.patientEntry._id)},{handleClose}} >
//            Submit
//          </Button>
//onClick={() =>{this.props.handleClick()}} >