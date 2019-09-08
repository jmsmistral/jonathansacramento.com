import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';

const Home = () => (
  <div className="home-page">
    <Container>
      <Row className="h-100">
        <Col xs={12} className="align-self-center">

          <Row>
            <Col xs={12} className="text-center">
              <h1 className="banner__title fadein-banner">
                {"Hi! I'm"}
                {' '}
                <strong className="banner__highlight">Jonathan</strong>
                {'.'}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="banner__subtitle fadein-banner">
                {'I love writing'}
                {' '}
                <span className="code-language-changer" />
                {' '}
                {'code.'}
              </h2>
            </Col>
          </Row>

          <Row className="sub-banner">
            <Col xs={12} className="text-center">
              <h2 className="sub-banner__title fadein-subbanner">
                I help clients make
                {' '}
                <span className="sub-banner__highlight">better business decisions</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="sub-banner__subtitle fadein-subbanner">
                through
                {' '}
                <strong className="sub-banner__highlight">data-driven applications</strong>
                .
              </h2>
            </Col>
          </Row>

        </Col>
      </Row>

      {/* <Container className="sub-banner">
        <Row className="justify-content-md-center">
        </Row>
        <Row className="justify-content-md-center">
        </Row>
      </Container> */}

    </Container>
  </div>
);

export default Home;
