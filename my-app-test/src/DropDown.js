import React, { Component } from 'react';
import './App.css';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = { isOpened: false };
  }
  toggleState () {
    this.setState({ isOpened: !this.state.isOpened})
  }

  render() {
    //console.log('isOpened',this.state.isOpened);
    let dropDownText = <div>228</div>;

    return (
      <div className="App">
        <p onMouseOut={this.toggleState.bind(this)}
           onMouseOver={this.toggleState.bind(this)}>
           DropDown</p>
        {this.state.isOpened ? dropDownText : ''}
      </div>
    );
  }
}

export default DropDown;
