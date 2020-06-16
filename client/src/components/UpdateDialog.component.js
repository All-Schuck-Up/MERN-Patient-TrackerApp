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

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';	


toast.configure()


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
        toast.error('Ups! There was no update note submitted.', {position:toast.POSITION.TOP_CENTER});
    };
    
   handleCloseS = () => {
       this.setState({ open: false})
       toast.success('Success!', {position:toast.POSITION.TOP_CENTER})
    };

    handleS = () => {
       toast.success('Success!', {position:toast.POSITION.TOP_LEFT})
        this.notify(toast.success)
       toast.success('Success!', {position:toast.POSITION.TOP_CENTER,autoClose:8000000}) 
        
    };
//   handleCloseS = () => {
//       this.notify()
//       toast.success('Success!', {position:toast.POSITION.TOP_RIGHT,autoClose:8000000})
//       setTimeout(function () {
//                window.location.reload(1);
//            }, 5000);  // the window reloads after 5 secs
//       this.setState({ open: false})
//       setTimeout(function () {
//                window.location.reload(1);
//            }, 5000);  // the
//       toast.success('Success!', {position:toast.POSITION.TOP_RIGHT,autoClose:8000000})
//                       
//    };


   notify =() => {
       toast('Basic notification!',{position:toast.POSITION.TOP_RIGHT})
       toast.success('Success!', {position:toast.POSITION.TOP_CENTER})
       toast.error('Error!', {position:toast.POSITION.TOP_LEFT})
};


   handleChange= (e) => {
        this.setState({updateNote: e.target.value});
      };

 
   //this updates the state of TextFieldor textarea(each symbol)
   handleChangeUpdateNote = (e) => {
    this.setState({
           updateNote: e.target.value})
           console.log(this.res);
    };

   isToday(date){
       var d1 = new Date().toISOString().substring(0,10);
       return date === d1;
   }
    

    handleSubmit(event) { 

//      toast.success('Success!', {position:toast.POSITION.TOP_CENTER})
//        setTimeout(function () {
//                window.location.reload(1);
//            }, 8000);  // the window reloads after 5 secs
                     

//      FOR TESTING:
//        alert('You have submitted following to this entry date: ' + this.state.updateNote + " "+ this.props.patientEntry[this.props.patientEntry.length-1].date.substring(0,10));
         
        if(this.isToday(this.props.patientEntry[this.props.patientEntry.length-1].date.substring(0,10))){
      axios.put('http://localhost:5000/patientEntry/update/'+this.props.patientId,
             {updateNote: this.state.updateNote
             }) 

        .then((res) => {
                 toast.success('Success!', {position:toast.POSITION.TOP_CENTER})
                //toast.notify(res.message)
                //this.notify(toast.success)
          console.log(res.res.data);
         
      })
                       
//        .catch((error) => {
//            console.log(error);
//        }) 


    }
    }
       
 render() {
  return (
        <> 
          <Button variant="outlined" className="pull-right" color="primary" size="sm" border="5em" onClick={this.handleClickOpen}>
            Update Last Entry
          </Button>

          <Dialog open={this.state.open} onClose={this.handleS} aria-labelledby="form-dialog-title">
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
                  <Button color="primary" value="Submit" type="submit"    onClick={this.handleCloseS} >
                    Submit
                  </Button>
      <Button color="primary" onClick={this.notify} >
                    Notify
                  </Button>{'  '}
                </form>     
            </DialogContent>      
          </Dialog>
       </> 
  );
}
}