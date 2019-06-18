import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Header = () => (
  <div>
    <Navbar fixed="top" className="justify-content-between">
      <div className="hidden" />
      <Nav>
        <NavLink to="/" exact className="header__link" activeClassName="is-active">home</NavLink>
        <NavLink to="/blog" exact className="header__link" activeClassName="is-active">blog</NavLink>
        <NavLink to="/code" exact className="header__link" activeClassName="is-active">code</NavLink>
        <a href="https://github.com/jmsmistral" className="header__link"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
        <a href="https://twitter.com/jmsmistral" className="header__link"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="https://www.linkedin.com/pub/jonathan-sacramento/65/920/584" className="header__link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
        <a href="mailto:jmsmistral@gmail.com" className="header__link"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
      </Nav>
      <div className="hidden" />
    </Navbar>
  </div>
);

export default Header;
