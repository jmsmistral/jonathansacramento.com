import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col
} from 'react-bootstrap';


const Bio = () => (
  <div className="content">

    <Container>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="text-left">
          <p className="bio__sub-banner__title">
            I work as an
            {' '}
            <span className="banner__highlight">Engineer</span>
            {' '}
            based in
            {' '}
            <span className="banner__strikethrough">London</span>
            {' '}
            <span className="banner__strikethrough">Barcelona</span>
            {' '}
            <span className="banner__highlight">Abu Dhabi</span>
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={2}></Col>
        <Col xs={8} className="text-left">
          <p className="bio__sub-banner__title">
            <Link to="/clients" className="bio__link">These</Link>
            {' '}
            are some of the clients I have worked with
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={2}></Col>
        <Col xs={8} className="bio__section text-left">
          <h2 className="bio__section__title">
            <span className="bio__section__title__highlight">I bring</span>
          </h2>

          <p className="bio__section__row">
            strong
            {' '}
            <span className="bio__section__highlight">delivery focus</span>
            {' '}
              and attention to detail
          </p>

          <p className="bio__section__row">
              a
            {' '}
            <span className="bio__section__highlight">track-record</span>
            {' '}
              of
            {' '}
            <span className="bio__section__highlight">implementing complex</span>
            {' '}
              projects
          </p>

          <p className="bio__section__row">
              deep
            {' '}
            <span className="bio__section__highlight">business understanding</span>
          </p>

          <p className="bio__section__row">
            <span className="bio__section__highlight">experience managing</span>
            {' '}
              multi-disciplinary teams
          </p>

          <p className="bio__section__row">
              commitment to
            {' '}
            <span className="bio__section__highlight">best practices</span>
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={2}></Col>
        <Col xs={8} className="bio__section text-left">
          {/* sample */}
          <h2 className="bio__section__title">
            <span className="bio__section__title__highlight">Previously I have</span>
          </h2>

          <p className="bio__section__row">
            worked as a
            {' '}
            <span className="bio__section__highlight">consultant</span>
            {' '}
            for Oliver Wyman
          </p>

          <p className="bio__section__row">
            {' '}
            <span className="bio__section__highlight">co-founded</span>
            {' '}
            a telco
            {' '}
            <span className="bio__section__highlight">analytics startup</span>
          </p>

          <p className="bio__section__row">
            <span className="bio__section__highlight">developed</span>
            {' '}
            a
            {' '}
            <span className="bio__section__highlight">templating language</span>
            {' '}
            from scratch
          </p>

          <p className="bio__section__row">
            <span className="bio__section__highlight">taught</span>
            {' '}
            consultants
            {' '}
            <span className="bio__section__highlight">how to code in python</span>
          </p>

          <p className="bio__section__row">
            <span className="bio__section__highlight">authored a thesis</span>
            {' '}
            on real-time
            {' '}
            <span className="bio__section__highlight">snow rendering (wat)</span>
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={2}></Col>
        <Col xs={8} className="bio__section text-left">
          <h2 className="bio__section__title">
            <span className="bio__section__title__highlight">When I am not working, I</span>
          </h2>

          <p className="bio__section__row">
            spend time
            {' '}
            <span className="bio__section__highlight">outdoors</span>
            {' '}
            and visit
            {' '}
            <span className="bio__section__highlight">specialty coffee</span>
            {' '}
            shops
          </p>

          <p className="bio__section__row">
            practice
            {' '}
            <span className="bio__section__highlight">medidation</span>
          </p>

          <p className="bio__section__row">
            <span className="bio__section__highlight">code</span>
            {' '}
            pet
            {' '}
            <span className="bio__section__highlight">open source</span>
            {' '}
            projects
          </p>

          <p className="bio__section__row">
            sometimes get my hands dirty with some
            {' '}
            <span className="bio__section__highlight">gardening</span>
          </p>

          <p className="bio__section__row">
            watch
            {' '}
            <span className="bio__section__highlight">football</span>
            ...
            {' '}
            I am an avid
            {' '}
            <span className="bio__section__highlight">FC Barcelona</span>
            {' '}
            fan
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={12} className="bio__section text-center">
          {/* sample */}
        </Col>

      </Row>
    </Container>

  </div>
);

export default Bio;
