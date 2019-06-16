import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <Navbar fixed="top" className="justify-content-between">
      <Navbar.Brand>
        <img
          className="header__image"
          src="/profile.png"
          alt="profile"
          width="50"
          height="50"
        />
      </Navbar.Brand>
      <Nav>
        <NavLink to="/" exact className="header__link" activeClassName="is-active">home</NavLink>
        <NavLink to="/blog" exact className="header__link" activeClassName="is-active">blog</NavLink>
        <NavLink to="/code" exact className="header__link" activeClassName="is-active">code</NavLink>
      </Nav>
      <div className="hidden" />
    </Navbar>
  </div>
);

export default Header;
