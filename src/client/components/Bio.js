import React from 'react';

const Bio = () => (
  <div className="bio-page-container">

    <div className="bio-page-container__section-one bio-section-one section-padding">

      <h1 className="bio__section-one__title">
        Welcome to
        {' '}
        <strong className="bio__section-one__highlight">my journey</strong>
        ...
      </h1>

      <p className="bio__section__row">
        I work as an
        {' '}
        <span className="bio__section-one__highlight">Lead Engineer</span>
        {' '}
        for Oliver Wyman Digital based in
        {' '}
        <span className="bio__section-one__highlight">Barcelona</span>
      </p>

      <p className="bio__section__row">
        I help clients make
        {' '}
        <span className="bio__section-one__highlight">better business decisions</span>
        {' '}
        through
        {' '}
        <span className="bio__section-one__highlight">data-driven applications</span>
      </p>

    </div>


    <div className="bio-page-container__section-two bio-section-two section-padding">

      <h2 className="bio__section-two__title">
        <strong className="bio__section-two__highlight">I bring</strong>
      </h2>

      <p className="bio__section__row">
        <strong className="bio__section-two__highlight">strong delivery focus</strong>
        {' '}
          and attention to detail
      </p>

      <p className="bio__section__row">
          a
        {' '}
        <strong className="bio__section-two__highlight">track-record</strong>
        {' '}
          of
        {' '}
        <strong className="bio__section-two__highlight">implementing complex software</strong>
        {' '}
          projects
      </p>

      <p className="bio__section__row">
          deep
        {' '}
        <strong className="bio__section-two__highlight">business understanding</strong>
      </p>

      <p className="bio__section__row">
        <strong className="bio__section-two__highlight">experience managing</strong>
        {' '}
          multi-disciplinary teams
      </p>

      <p className="bio__section__row">
          commitment to
        {' '}
        <strong className="bio__section-two__highlight">best practices</strong>
      </p>

    </div>


    <div className="bio-page-container__section-three bio-section-three section-padding">

      <h2 className="bio__section-three__title">
        <strong className="bio__section-three__highlight">Previously I have</strong>
      </h2>

      <p className="bio__section__row">
        worked as a
        {' '}
        <strong className="bio__section-three__highlight">consultant</strong>
        {' '}
        for Oliver Wyman
      </p>

      <p className="bio__section__row">
        {' '}
        <strong className="bio__section-three__highlight">co-founded</strong>
        {' '}
        a telco
        {' '}
        <strong className="bio__section-three__highlight">analytics startup</strong>
      </p>

      <p className="bio__section__row">
        <strong className="bio__section-three__highlight">developed</strong>
        {' '}
        a
        {' '}
        <strong className="bio__section-three__highlight">templating language</strong>
        {' '}
        from scratch
      </p>

      <p className="bio__section__row">
        <strong className="bio__section-three__highlight">taught</strong>
        {' '}
        consultants how to
        {' '}
        <strong className="bio__section-three__highlight">code in python</strong>
      </p>

      <p className="bio__section__row">
        <strong className="bio__section-three__highlight">authored a thesis</strong>
        {' '}
        on real-time snow rendering
        {' '}
        <strong className="bio__section-three__highlight">(wat)</strong>
      </p>

    </div>


    <div className="bio-page-container__section-four bio-section-four section-padding">

      <h2 className="bio__section-four__title">
        <strong className="bio__section-four__highlight">When I am not working, I</strong>
      </h2>

      <p className="bio__section__row">
        spend time
        {' '}
        <strong className="bio__section-four__highlight">outdoors</strong>
      </p>

      <p className="bio__section__row">
        practice
        {' '}
        <strong className="bio__section-four__highlight">medidation</strong>
      </p>

      <p className="bio__section__row">
        <strong className="bio__section-four__highlight">code</strong>
        {' '}
        pet
        {' '}
        <strong className="bio__section-four__highlight">open source</strong>
        {' '}
        projects
      </p>

      <p className="bio__section__row">
        sometimes
        {' '}
        <strong className="bio__section-four__highlight">garden</strong>
      </p>

      <p className="bio__section__row">
        watch
        {' '}
        <strong className="bio__section-four__highlight">football</strong>
      </p>

    </div>

  </div>
);

export default Bio;
