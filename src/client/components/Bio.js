import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';


const Bio = () => (
  <div className="content">
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h1 className="bio__banner__title">
            Welcome to
            {' '}
            <strong className="banner__highlight">my journey</strong>
            ...
          </h1>
        </Col>

        <Col xs={12} className="bio__sub-banner text-center">
          <p className="bio__sub-banner__title">
            I work as an
            {' '}
            <span className="banner__highlight">Lead Engineer</span>
            {' '}
            for Oliver Wyman Digital based in
            {' '}
            <span className="banner__highlight">Barcelona</span>
          </p>
        </Col>
        <Col xs={12} className="text-center">
          <p className="bio__sub-banner__title">
            I help clients make
            {' '}
            <span className="banner__highlight">better business decisions</span>
            {' '}
            through
            {' '}
            <span className="banner__highlight">data-driven applications</span>
          </p>
        </Col>

        <Col xs={12} className="bio__section text-center">
          <h2 className="bio__section__title">
            <strong className="bio__section__title__highlight">I bring</strong>
          </h2>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">strong delivery focus</strong>
            {' '}
              and attention to detail
          </p>

          <p className="bio__section__row">
              a
            {' '}
            <strong className="bio__section__highlight">track-record</strong>
            {' '}
              of
            {' '}
            <strong className="bio__section__highlight">implementing complex</strong>
            {' '}
              projects
          </p>

          <p className="bio__section__row">
              deep
            {' '}
            <strong className="bio__section__highlight">business understanding</strong>
          </p>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">experience managing</strong>
            {' '}
              multi-disciplinary teams
          </p>

          <p className="bio__section__row">
              commitment to
            {' '}
            <strong className="bio__section__highlight">best practices</strong>
          </p>
        </Col>

        <Col xs={12} className="bio__section text-center">
          {/* sample */}
          <h2 className="bio__section__title">
            <strong className="bio__section__title__highlight">Previously I have</strong>
          </h2>

          <p className="bio__section__row">
            worked as a
            {' '}
            <strong className="bio__section__highlight">consultant</strong>
            {' '}
            for Oliver Wyman
          </p>

          <p className="bio__section__row">
            {' '}
            <strong className="bio__section__highlight">co-founded</strong>
            {' '}
            a telco
            {' '}
            <strong className="bio__section__highlight">analytics startup</strong>
          </p>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">developed</strong>
            {' '}
            a
            {' '}
            <strong className="bio__section__highlight">templating language</strong>
            {' '}
            from scratch
          </p>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">taught</strong>
            {' '}
            consultants
            {' '}
            <strong className="bio__section__highlight">how to code in python</strong>
          </p>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">authored a thesis</strong>
            {' '}
            on real-time
            {' '}
            <strong className="bio__section__highlight">snow rendering (wat)</strong>
          </p>
        </Col>

        <Col xs={12} className="bio__section text-center">
          <h2 className="bio__section__title">
            <strong className="bio__section__title__highlight">When I am not working, I</strong>
          </h2>

          <p className="bio__section__row">
            spend time
            {' '}
            <strong className="bio__section__highlight">outdoors</strong>
          </p>

          <p className="bio__section__row">
            practice
            {' '}
            <strong className="bio__section__highlight">medidation</strong>
          </p>

          <p className="bio__section__row">
            <strong className="bio__section__highlight">code</strong>
            {' '}
            pet
            {' '}
            <strong className="bio__section__highlight">open source</strong>
            {' '}
            projects
          </p>

          <p className="bio__section__row">
            sometimes
            {' '}
            <strong className="bio__section__highlight">garden</strong>
          </p>

          <p className="bio__section__row">
            watch
            {' '}
            <strong className="bio__section__highlight">football</strong>
          </p>
        </Col>

        <Col xs={12} className="bio__section text-center">
          {/* sample */}
        </Col>
      </Row>
    </Container>
  </div>


  // <div className="bio-page-container">

  //   {/* Banner */}
  //   <div className="bio-page-container__banner all-padding">


  //   </div>


  //   {/* Sub-Banner */}
  //   <div className="bio-page-container__sub-banner all-padding">


  //     {/* Section one */}
  //     <div className="bio-page-container__sub-banner__section all-margin">

  //     </div>

  //     {/* Section two */}
  //     <div className="bio-page-container__sub-banner__section all-margin">
  //     </div>

  //     {/* Section three */}
  //     <div className="bio-page-container__sub-banner__section all-margin">

  //     </div>

  //   </div>

  // </div>
);

export default Bio;
