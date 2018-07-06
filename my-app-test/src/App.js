import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from '../src/Header'
import DropDown from '../src/DropDown';
import RegistrationForm from '../src/RegistrationForm';
import StoreForm from '../src/StoreForm';


const menu =[
  {
    link: '/about',
    label: 'About'
  },
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }

];

const titleMan = 'ALLO';
const App = ({ownProps}) => {
  console.log('ownProps', ownProps);
    return (
      <div className="App">
        <Header items={menu} titleMan={titleMan}/>
         Hello world
        <DropDown />
        <RegistrationForm/>
        <StoreForm  />
      </div>
    );

}

export default connect(
  //mapStateToProps мапит стейт изстора в пропсы компонента. Подписка на стор
  //Если меняется пропсы, то мы перерендериваем компонент
  (state, ownProps) => ({
    ownProps
  }),
  dispatch => ({})
)(App);
