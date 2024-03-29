import React from 'react';
import {
  BrowserRouter, Route, Switch, HashRouter
} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Client from '../components/Client';
import Code from '../components/Code';
import Blog from '../components/Blog';
import BlogPost from '../components/BlogPost';
import NotFound from '../components/NotFound';


const AppRouter = () => (
  // Note: using HashRouter for deploying on GitHub Pages
  // as it doesn't support Single Page Applications.
  // <BrowserRouter>
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bio" component={Bio} exact />
        <Route path="/clients" component={Client} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blogpost/:route" component={BlogPost} exact/>
        <Route path="/code" component={Code} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
  // </BrowserRouter>
);

export default AppRouter;
