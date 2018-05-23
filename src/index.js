import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles.css';

// import components
import Main from './Main';
import Single from './Single';
import Photogrid from './Photogrid';

// import react router deps
import { 
  Route, 
  IndexRoute, 
  Router } from 'react-router';

const router = ( 
  <Router>
    <Route path="/" component={Main}>
      <Route exact path="/" component={Photogrid} /> 
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);


render(router, document.getElementById('root'));
