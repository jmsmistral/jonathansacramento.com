import React from 'react';

const Bio = () => (
  <div className="bio-page-container">

    {/* Banner */}
    <div className="bio-page-container__banner all-padding">

      <h1 className="banner__title">
        Welcome to
        {' '}
        <strong className="banner__highlight">my journey</strong>
        ...
      </h1>

      <p className="banner__subtitle top-padding">
        I work as an
        {' '}
        <span className="banner__highlight">Lead Engineer</span>
        {' '}
        for Oliver Wyman Digital based in
        {' '}
        <span className="banner__highlight">Barcelona</span>
      </p>

      <p className="banner__subtitle">
        I help clients make
        {' '}
        <span className="banner__highlight">better business decisions</span>
        {' '}
        through
        {' '}
        <span className="banner__highlight">data-driven applications</span>
      </p>

    </div>


    {/* Sub-Banner */}
    <div className="bio-page-container__sub-banner all-padding">

      {/* Section one */}
      <div className="bio-page-container__sub-banner__section all-margin">
        <h2 className="sub-banner__title">
          <strong className="sub-banner__highlight">I bring</strong>
        </h2>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">strong delivery focus</strong>
          {' '}
            and attention to detail
        </p>

        <p className="bio__section__row">
            a
          {' '}
          <strong className="sub-banner__highlight">track-record</strong>
          {' '}
            of
          {' '}
          <strong className="sub-banner__highlight">implementing complex</strong>
          {' '}
            projects
        </p>

        <p className="bio__section__row">
            deep
          {' '}
          <strong className="sub-banner__highlight">business understanding</strong>
        </p>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">experience managing</strong>
          {' '}
            multi-disciplinary teams
        </p>

        <p className="bio__section__row">
            commitment to
          {' '}
          <strong className="sub-banner__highlight">best practices</strong>
        </p>
      </div>

      {/* Section two */}
      <div className="bio-page-container__sub-banner__section all-margin">
        <h2 className="sub-banner__title">
          <strong className="sub-banner__highlight">Previously I have</strong>
        </h2>

        <p className="bio__section__row">
          worked as a
          {' '}
          <strong className="sub-banner__highlight">consultant</strong>
          {' '}
          for Oliver Wyman
        </p>

        <p className="bio__section__row">
          {' '}
          <strong className="sub-banner__highlight">co-founded</strong>
          {' '}
          a telco
          {' '}
          <strong className="sub-banner__highlight">analytics startup</strong>
        </p>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">developed</strong>
          {' '}
          a
          {' '}
          <strong className="sub-banner__highlight">templating language</strong>
          {' '}
          from scratch
        </p>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">taught</strong>
          {' '}
          consultants
          {' '}
          <strong className="sub-banner__highlight">how to code in python</strong>
        </p>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">authored a thesis</strong>
          {' '}
          on real-time
          {' '}
          <strong className="sub-banner__highlight">snow rendering (wat)</strong>
        </p>
      </div>

      {/* Section three */}
      <div className="bio-page-container__sub-banner__section all-margin">
        <h2 className="sub-banner__title">
          <strong className="sub-banner__highlight">When I am not working, I</strong>
        </h2>

        <p className="bio__section__row">
          spend time
          {' '}
          <strong className="sub-banner__highlight">outdoors</strong>
        </p>

        <p className="bio__section__row">
          practice
          {' '}
          <strong className="sub-banner__highlight">medidation</strong>
        </p>

        <p className="bio__section__row">
          <strong className="sub-banner__highlight">code</strong>
          {' '}
          pet
          {' '}
          <strong className="sub-banner__highlight">open source</strong>
          {' '}
          projects
        </p>

        <p className="bio__section__row">
          sometimes
          {' '}
          <strong className="sub-banner__highlight">garden</strong>
        </p>

        <p className="bio__section__row">
          watch
          {' '}
          <strong className="sub-banner__highlight">football</strong>
        </p>
      </div>

    </div>

  </div>
);

export default Bio;
