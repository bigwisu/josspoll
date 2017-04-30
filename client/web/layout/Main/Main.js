// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header';
import classnames from 'classnames';

import './style.css';

class Main extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className="App">
          <Header name="Welcome to React"/>
          {/*Question? how do i pass variables in react-router@4*/}
          {this.props.name}
          {this.props.children}
      </div>
    );
  }
}

export default Main;