import React, { Component } from 'react';
import {connect} from "react-redux";
class About extends Component {

  render() {
    return (
      <div className="App">
        About
      </div>
    );
  }
}

export default connect(
  //mapStateToProps мапит стейт изстора в пропсы компонента. Подписка на стор
  //Если меняется пропсы, то мы перерендериваем компонент
  state => ({

  }),
  dispatch => ({

  })
)(About);