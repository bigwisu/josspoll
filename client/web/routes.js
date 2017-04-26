import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './containers/Main'

import Intro from './views/Intro'
import About from './views/About'
import NotFound from './views/NotFound'

export default (
  <Router history={browserHistory}>
    <Route path="/" name="Home" component={Main} >
      <IndexRoute component={Intro}/>
      <Route path="intro" name="Intro" component={Intro}/>
      <Route path="about" name="About" component={About}/>
      <Route path="*" name="NotFound" component={NotFound}/>
    </Route>
  </Router>
);