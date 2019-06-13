import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <header>
      <h1>React Web App Template</h1>
      <NavLink to="/" activeClassName="is-active">Home</NavLink>
      <NavLink to="/about" activeClassName="is-active">About</NavLink>
    </header>
  </div>
);

export default Header;
