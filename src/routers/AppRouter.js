import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import HomePage from '../components/pages/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomePage} exact={true}/>
      <Redirect to="/"/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
