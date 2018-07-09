import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './App.css';

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    titleMan: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    type: PropTypes.oneOf(['news','phones']),
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    }),
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
      })
    )
  };

  render() {
    //console.log('items',this.props.items);
    return (
      <div className="App">
        <h1>{this.props.titleMan}</h1>
        <ul>
        {this.props.items.map((item, index) =>
            <li key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>
        )}

        </ul>
      </div>
    );
  }
}

export default Header;
