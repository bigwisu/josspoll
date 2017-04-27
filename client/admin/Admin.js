import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//Include layout
import Full from './layout/Full/';

ReactDOM.render(
  <HashRouter>
      <Full />
  </HashRouter>, 
  document.getElementById('root')
);
