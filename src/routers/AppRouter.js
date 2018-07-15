import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import AppHeader from '../components/layout/AppHeader';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppHeader/>
      <Switch>
        <Route path='/' component={HomePage} exact={true}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
