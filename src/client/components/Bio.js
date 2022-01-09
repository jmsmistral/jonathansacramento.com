import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col
} from 'react-bootstrap';


const Bio = () => (
  <div className="content">

    <Container>
      <Row>

        {/* Header text */}
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



        {/* Bio Section One */}
        <Col xs={2}></Col>
        <Col xs={8} className="bio__section bio__section-one text-left">
          <h2 className="bio__section-one__title">
            <span className="bio__section-one__title__highlight">I bring</span>
          </h2>

          <p className="bio__section-one__row">
            strong
            {' '}
            <span className="bio__section-one__highlight">delivery focus</span>
            {' '}
              and attention to detail
          </p>

          <p className="bio__section-one__row">
              a track-record
            {' '}
              of implementing
            {' '}
            <span className="bio__section-one__highlight">complex projects</span>
          </p>

          <p className="bio__section-one__row">
              deep
            {' '}
            <span className="bio__section-one__highlight">business understanding</span>
          </p>

          <p className="bio__section-one__row">
            <span className="bio__section-one__highlight">experience managing</span>
            {' '}
              multi-disciplinary teams
          </p>

          <p className="bio__section-one__row">
              commitment to
            {' '}
            <span className="bio__section-one__highlight">best practices</span>
          </p>
        </Col>
        <Col xs={2}></Col>


        {/* Bio Section Two */}
        <Col xs={2}></Col>
        <Col xs={8} className="bio__section bio__section-two text-left">
          {/* sample */}
          <h2 className="bio__section-two__title">
            <span className="bio__section-two__title__highlight">Previously I have</span>
          </h2>

          <p className="bio__section-two__row">
            worked as a
            {' '}
            <span className="bio__section-two__highlight">consultant</span>
            {' '}
            for Oliver Wyman
          </p>

          <p className="bio__section-two__row">
            {' '}
            <span className="bio__section-two__highlight">co-founded</span>
            {' '}
            a telco
            {' '}
            <span className="bio__section-two__highlight">analytics startup</span>
          </p>

          <p className="bio__section-two__row">
            <span className="bio__section-two__highlight">developed</span>
            {' '}
            a
            {' '}
            <span className="bio__section-two__highlight">templating language</span>
            {' '}
            from scratch
          </p>

          <p className="bio__section-two__row">
            <span className="bio__section-two__highlight">taught</span>
            {' '}
            consultants
            {' '}
            <span className="bio__section-two__highlight">how to code in python</span>
          </p>

          <p className="bio__section-two__row">
            <span className="bio__section-two__highlight">authored a thesis</span>
            {' '}
            on real-time
            {' '}
            <span className="bio__section-two__highlight">snow rendering (wat)</span>
          </p>
        </Col>
        <Col xs={2}></Col>


        {/* Bio Section Three */}
        <Col xs={2}></Col>
        <Col xs={8} className="bio__section bio__section-three text-left">
          <h2 className="bio__section-three__title">
            <span className="bio__section-three__title__highlight">When I am not working, I</span>
          </h2>

          <p className="bio__section-three__row">
            spend time
            {' '}
            <span className="bio__section-three__highlight">outdoors</span>
            {' '}
            and visit
            {' '}
            <span className="bio__section-three__highlight">specialty coffee</span>
            {' '}
            shops
          </p>

          <p className="bio__section-three__row">
            practice
            {' '}
            <span className="bio__section-three__highlight">meditation</span>
          </p>

          <p className="bio__section-three__row">
            <span className="bio__section-three__highlight">code</span>
            {' '}
            pet
            {' '}
            <span className="bio__section-three__highlight">open source</span>
            {' '}
            projects
          </p>

          <p className="bio__section-three__row">
            search for
            {' '}
            <span className="bio__section-three__highlight">great companies</span>
            {' '}
            to invest in
          </p>

          <p className="bio__section-three__row">
            watch
            {' '}
            <span className="bio__section-three__highlight">football</span>
            ...
            {' '}
            visca el
            {' '}
            <span className="bio__section-three__highlight">Barca</span>
          </p>
        </Col>
        <Col xs={2}></Col>

        <Col xs={12} className="bio__section__padding text-center">
          {/* sample */}
        </Col>

      </Row>
    </Container>

  </div>
);

export default Bio;
