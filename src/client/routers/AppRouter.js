import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Code from '../components/Code';
import Blog from '../components/Blog';
import NotFound from '../components/NotFound';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bio" component={Bio} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/code" component={Code} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
