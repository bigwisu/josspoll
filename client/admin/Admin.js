import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

//Include layout
import Layout from './layout/Full/';

import Dashboard from './views/Dashboard';

ReactDOM.render(
  <HashRouter>
      <Layout>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
      </Layout>
  </HashRouter>, 
  document.getElementById('root')
);
