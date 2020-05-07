import React, { Component } from "react";



export default class login extends Component 
{
    constructor(props)
    {
      super(props);
      

 // this.onChangeEmail=this.onChangeEmail.bind(this);
  //this.onChangePassword=this.onChangePassword.bind(this);
 // this.onSubmit = this.onSubmit.bind(this);
 
  this.state ={
   
    email: '',
    password: '',
    
}
}

onChangeEmail(e)
{
    this.setState ({
        email:e.target.value
    });
   
}
onChangeEmail(e)
{
    this.setState ({
       password: e.target.value
    });
   
}
onSubmit(e)
{
  e.preventDefault();
  const login  ={
date:this.state.date,
email:this.state.email,
password:this.state.password

  }

console.log(login);
window.location ='/';
}
  
render() {
        return (
            <form className="loginForm" onSubmit>
                <h3 className="text-center">WELCOME Patient</h3>
              
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" 
                     placeholder="Enter email" 
                     value={this.state.email}
                     value={this.state.onChangeEmail}
                     
                     />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                     placeholder="Enter password" 
                     value={this.state.password}
                     value={this.state.onChangePassword}
                     
                     />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}