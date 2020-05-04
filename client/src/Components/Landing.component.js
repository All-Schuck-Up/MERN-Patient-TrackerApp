import React, {Component} from 'react';
import '../App.css';

class Landing extends Component{   
    render(){   
        return(
            <div>
                <div class="container p-3 my-3 bg-primary text-white">
                    <h2>Hello, welcome to the COVID-19 symptom tracking application.</h2>   
            
                </div>
                <div class="container">
                    
                       <form action= "/patient/login" method="get">
                        <button type="submit" class="btn bg-dark btn-primary btn-lg text-white">Login as Patient
                        </button>
                       </form>
                
                        <form action= "/provider/login" method="get">
                        <button type="submit" class="btn bg-dark  btn-primary btn-lg text-white">Login as Provider
                        </button>
                        </form>
                
                </div>
            </div>
    )}
}                
export default Landing;
