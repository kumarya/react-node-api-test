import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './components/Home';
import Todos from './components/todos'
import Login from './components/login'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Todos} />
        <Route path='login' component={Login} />
        
      </Route>
    </Router>
  );
};

export default Routes;