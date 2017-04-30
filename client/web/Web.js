import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './layout/Main';

import './Web.css';

import Intro from './views/Intro'
import About from './views/About'
import Post from './views/Post'
import NotFound from './views/NotFound'

ReactDOM.render(
  <BrowserRouter>
      <Layout>
          <Route exact path="/" name="Intro" component={Intro}/>
          <Route exact path="/about" name="About" component={About}/>
          <Route exact path="/post" name="New Post" component={Post}/>
      </Layout>
  </BrowserRouter>, 
  document.getElementById('root')
);
