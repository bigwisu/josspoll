import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './layout/Main';

import './Web.css';

import Intro from './views/Intro'
import About from './views/About'
import NotFound from './views/NotFound'

ReactDOM.render(
  <BrowserRouter>
      <Layout>
          <Route exact path="/" component={Intro}/>
          <Route exact path="/about" component={About}/>
      </Layout>
  </BrowserRouter>, 
  document.getElementById('root')
);
