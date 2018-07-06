import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props){
      super(props);
      this.state = {
         background: 'red'
      };
      this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(event){
    event.preventDefault();
    console.log('submitted', this.state.background);
  };


  handleBackgroundChange(event){
    console.log('background was changed', event.target.value);
    this.setState({background:  event.target.value});
  };

  submit(){
    console.log('submit', this.testInput.value);
  }
  render() {
    return (
      <div className="App" style={{'backgroundColor' : '' + this.state.background + ''}}>
       <form onSubmit={this.handleSubmit}>
         <input
           type="text"
           placeholder="text"
           value={this.state.background}
           onChange={this.handleBackgroundChange}
         />
         <input
            type="text"
            placeholder="test"
            ref={(input) => this.testInput = input}
         />
         <button onClick={this.submit.bind(this)}>Save</button>
       </form>
      </div>
    );
  }
}

export default RegistrationForm;
