import React from 'react';
import {
  Navbar, Nav, Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// Manually collapse the navbar because react-bootstap sucks
function collapseNavbar(event) {
  document.querySelector('#app > div > div > nav > button').click();
}

const Header = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav className="ml-auto mr-auto justify-content-md-center">
            <Nav.Item><NavLink to="/" exact className="header__link" activeClassName="is-active" onClick={collapseNavbar}>home</NavLink></Nav.Item>
            <Nav.Item><NavLink to="/bio" exact className="header__link" activeClassName="is-active" onClick={collapseNavbar}>bio</NavLink></Nav.Item>
            <Nav.Item><NavLink to="/blog" exact className="header__link" activeClassName="is-active" onClick={collapseNavbar}>blog</NavLink></Nav.Item>
            <Nav.Item><NavLink to="/code" exact className="header__link" activeClassName="is-active" onClick={collapseNavbar}>code</NavLink></Nav.Item>
            <Nav.Item><a href="https://github.com/jmsmistral" className="header__link"><FontAwesomeIcon icon={faGithub} size="lg" /></a></Nav.Item>
            <Nav.Item><a href="https://twitter.com/jmsmistral" className="header__link"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></Nav.Item>
            <Nav.Item><a href="https://www.linkedin.com/pub/jonathan-sacramento/65/920/584" className="header__link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></Nav.Item>
            <Nav.Item><a href="mailto:jmsmistral@gmail.com" className="header__link"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
