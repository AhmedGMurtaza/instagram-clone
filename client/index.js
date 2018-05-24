import React from 'react';
import { render } from 'react-dom';

// import react router deps
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// import css
import css from './styles.css';

// import components
import Main from './components/Main';

import { Provider } from 'react-redux'; 
import store from './store';

const router = ( 
  <BrowserRouter>
    <Route path="/" component={Main}>
    </Route>
  </BrowserRouter>
);


render(router, document.getElementById('root'));
