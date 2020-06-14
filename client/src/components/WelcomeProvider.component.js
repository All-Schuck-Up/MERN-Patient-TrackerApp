import React from 'react';

class WelcomeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProvider: props.nameProvider
    };
    
  }
  handleClick(e) {
    e.preventDefault();
    console.log("Log Out Button Clicked");
  }
  render() {
    return (
      <div className="WelcomeProvider">
        <header className="WelcomeProviderString">
            Welcome {this.state.nameProvider}         
        </header>
        <button className="Log Out Button" onClick={this.handleClick}>Log Out</button>
      </div>
    );}
}

export default WelcomeProvider;