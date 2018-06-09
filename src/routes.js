import React from 'react';
import { Route, Switch } from 'react-router-dom'

import routes from './routesConfig';
import PrivateRoute from './PrivateRoute';
import PageNotFound from './components/404';

export default (
  <Switch>
    {
      routes.map((route, index) => (
        route.isRequireAuthenticated
        ?
        <PrivateRoute exact={route.exact} key={index} path={route.path} component={route.component} />
        :
        <Route key={index} path={route.path} component={route.component} exact={route.exact} />
      ))
    }
    <Route path="*" component={PageNotFound} />
  </Switch>
);
