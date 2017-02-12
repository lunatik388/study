 import ReactDOM   from 'react-dom';
 import React      from 'react';
 import { browserHistory, Router } from 'react-router';
 import routes from './routes';
 const component = (
  <Router history={browserHistory}>
    {routes}
  </Router>
 );
 ReactDOM.render(component, document.getElementById('react-view'));