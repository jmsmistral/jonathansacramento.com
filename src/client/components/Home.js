import React from 'react';

const Home = () => (
  <div className="home-page-container">

    <div className="home-page-container__banner all-padding">

      <h1 className="banner__title fadein-banner">
        {"Hi! I'm"}
        {' '}
        <strong className="banner__highlight">Jonathan</strong>
        {'.'}
      </h1>
      <h2 className="banner__subtitle fadein-banner">
        {'I love writing'}
        {' '}
        <span className="code-language-changer" />
        {' '}
        {'code.'}
      </h2>

    </div>


    <div className="home-page-container__sub-banner all-padding">

      <h2 className="sub-banner__title fadein-subbanner">
            I help clients make
        {' '}
        <strong className="sub-banner__highlight">better business decisions</strong>
      </h2>

      <h2 className="sub-banner__title fadein-subbanner">
            through
        {' '}
        <strong className="sub-banner__highlight">data-driven applications</strong>
            .
      </h2>

    </div>

  </div>
);

export default Home;
