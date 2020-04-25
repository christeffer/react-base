import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  // include tag isClosed to set router as a not open to everyone
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
