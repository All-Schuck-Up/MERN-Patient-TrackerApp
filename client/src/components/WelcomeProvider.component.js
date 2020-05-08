import React, { Fragment } from 'react';
import Navbar from './layout/Nbar.component';

class WelcomeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProvider: props.nameProvider,
    };
  }
  handleClick(e) {
    e.preventDefault();
    console.log('Log Out Button Clicked');
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='WelcomeProvider'>
          <header className='WelcomeProviderString'>
            Welcome {this.state.nameProvider}
          </header>
          <button className='Log Out Button' onClick={this.handleClick}>
            Log Out
          </button>
        </div>
      </Fragment>
    );
  }
}

export default WelcomeProvider;
