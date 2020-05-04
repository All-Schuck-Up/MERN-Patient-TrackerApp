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
                <div>
                    <button type="button" class="btn bg-dark btn-primary btn-lg text-white">Login as Patient
                    </button>
                </div>
                <div>
                    <button type="button" class="btn bg-dark  btn-primary btn-lg text-white">Login as Provider
                    </button>
                </div>
                </div>
            </div>
              )
    }
}                
export default Landing;
//<Button href="#">Link</Button> 
