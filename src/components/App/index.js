import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Dashboard from '../Dashboard';
import RouteListener from '../RouteListener';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import './index.css';

const App = () => (
  <Router>
    <div>
      <RouteListener />
      <Switch>
    	  <Redirect exact path="/" to={routes.DASHBOARD} />
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
      </Switch>
    </div>
  </Router>
)

export default withAuthentication(App);