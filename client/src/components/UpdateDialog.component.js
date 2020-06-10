import React from 'react';
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




export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeUpdateNote=this.handleChangeUpdateNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            patientEntry:[],
            updateNote:'',
            //date:date.today(),
            date: '',
            _id:'',
            open:false
        };
    }
    
    

    handleClickOpen = () => {
       this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false})
    };
     
    handleChangeUpdateNote = (e) => {
       this.setState({updateNote: e.target.value})
    };
  
   onSubmit(){
//           //e.preventDefault();
//           this.updateNote = {
//              updateNote: this.state.updateNote 
//           }
//    console.log(this.updateNote);
   axios.put('http://localhost:5000/patientEntry/update/'+ //this.props.match.params.id,this.updateNote) 
    this.props.patientId,
             {updateNote: //this.state.handleChangeUpdateNote()})
             this.state.updateNote}) //this.handleChangeUpdateNote(this.state.updateNote)})
        .then(res => {
            console.log(res.data);
            this.setState({
                patientEntry:
                this.state.patientEntry.date === this.state.date})
//            this.state.patientEntry.filter((el=>el._id === this.state._id) && (el=>el.date === this.state.date))
        })
        .catch((error) => {
            console.log(error);
        })   
    };
       
 render() {
  return (
       <> 
      <Button variant="outlined" className="pull-right" color="primary" size="sm" onClick={this.handleClickOpen}>
        Update Last Entry
      </Button>
      <Dialog open={this.state.open} onSubmit={this.onSubmit}  onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Due to legal obligations you can not change current data but you can enter a note here about it. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="updateNote"
            label="Update Note"
            type="text"
            fullWidth
            onChange={this.handleChangeUpdateNote}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleClose} >
            Cancel
          </Button>
          <Button color="primary" type="submit" onClick={this.handleClose} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
       </> 
  );
}
}