import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
