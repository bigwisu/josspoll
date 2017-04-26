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
          <Header />
          {this.props.children}
      </div>
    );
  }
}

export default Main;