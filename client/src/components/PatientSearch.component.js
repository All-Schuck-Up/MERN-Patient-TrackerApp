import React from 'react';

class PatientSearch extends React.Component {
  constructor() {
    super();
    this.state = {
        searchEntry : [""]
    }
}
  handleChange(e) {
    this.setState({
        searchEntry: [e.target.value]
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Patient Searching");
  }
  render() {
    return (
      <div className="PatientSearch">
        
        <form onSubmit={this.handleSubmit}>
            <label className="PatientSearchText">
                Patient Search         
            <input className="PatientSearchInput" type="text" name="Patient Last Name" onChange={this.handleChange}/>
            </label>
            <input className="PatientSearchButton" type="submit" value="Search"/>
        </form>
      </div>
    );}
}

export default PatientSearch;