import React, {Component} from 'react';
import '../App.css';

class Landing extends Component{   
    render(){   
        return(
            <div>
                <div className="container p-3 my-3 bg-primary text-white">
                    <h2>Hello, welcome to the COVID-19 symptom tracking application.</h2>   
                </div>
            <br/>   
            <div className="d-flex justify-content-center">
                       <form action= "/patient/login" method="get">
                            <div className="col-auto">
                                <button type="submit" className="btn bg-dark btn-primary btn-lg text-white">Login as Patient
                                </button>
                            </div>
                       </form>
                        <form action= "/provider/login" method="get">
                            <div className="col-auto">
                                <button type="submit" className="btn bg-dark  btn-primary btn-lg text-white">Login as Provider
                                </button>
                            </div>
                        </form>
                    </div> 
            </div>
    )}
}                
export default Landing;