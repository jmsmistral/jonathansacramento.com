import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faChartBar, faUserNinja, faGlasses, faCircle
} from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div>
    <div className="page-container">
      <div className="row-container banner">
        <img
          className="banner__image"
          src="/profile.png"
          alt="profile"
          width="150"
          height="150"
        />
        <div className="column-container banner__text">
          <h1 className="banner__text__title">
            Hi! I'm
            {' '}
            <strong className="banner__text__title__name">Jonathan</strong>
            .
          </h1>
          <h2 className="banner__text__subtitle">
                I love writing
            {' '}
            <span className="code-language-changer" />
            {' '}
                code.
          </h2>
        </div>
      </div>

      <div className="column-container about">
        <h2 className="section-title">About</h2>

        <p>
          {/* <FontAwesomeIcon icon={faCircle} size="1x" className="about__bullet__yellow" /> */}
          I work as an
          {' '}
          <span className="about__highlight">Lead Engineer</span>
          {' '}
          for Oliver Wyman Digital based in Barcelona.
        </p>

        <p>
          {/* <FontAwesomeIcon icon={faCircle} size="1x" className="about__bullet__red" /> */}
          I help clients make
          {' '}
          <span className="about__highlight">better business decisions</span>
          {' '}
          through
          {' '}
          <span className="about__highlight">data-driven applications</span>
          .
        </p>

        <p>
          {/* <FontAwesomeIcon icon={faCircle} size="1x" className="about__bullet__green" /> */}
          I bring
          {' '}
          <span className="skill-changer" />
          .
        </p>

        <p>
          {/* <FontAwesomeIcon icon={faCircle} size="1x" className="about__bullet__purple" /> */}
          Previously I have
          {' '}
          <span className="career-changer" />
          .
        </p>

        <p>
          {/* <FontAwesomeIcon icon={faCircle} size="1x" className="about__bullet__purple" /> */}
          When I'm not working, I like to
          {' '}
          <span className="hobby-changer" />
          .
        </p>

        <p>
          <NavLink to="/clients" className="about__link">These</NavLink>
          {' '}
          are some of the clients I've worked with.
        </p>
        <p>
          <a href="mailto:jmsmistral@gmail.com" className="about__link">Get in touch</a>
          {' '}
          if you want to chat!
        </p>
      </div>
    </div>
  </div>
);

export default Home;
