import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';


const CarouselUI = ({ children }) => <div>{children}</div>;
const Carousel = makeCarousel(CarouselUI);

const Home = () => (
  <div className="home-page">

    {/* Container for large screens */}
    <Container className="home-page-large-screen">
      <Row className="h-100">
        <Col xs={12} className="align-self-center">

          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <h1 className="banner__title fadein-banner">
                {"Hi! I'm"}
                {" "}
                <strong className="banner__highlight">Jonathan</strong>
                {"."}
              </h1>
            </Col>
            <Col xs={2}></Col>
          </Row>

          <Row className="banner__subtitle__container">
            <Col xs={2}></Col>
            <Col xs={8}>
                <h2 className="banner__subtitle fadein-banner">
                  {'I love coding in '}
                  <Carousel defaultWait={3000} maxTurns={Infinity}>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code python">Python</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code js">Javascript</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code c">C</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code node">Node</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code sql">SQL</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code spark">Spark</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code react">React</h2>
                    </Fade>
                  </Carousel>
                </h2>
            </Col>
            <Col xs={2}></Col>
          </Row>

          <Row className="sub-banner">
            <Col xs={2}></Col>
            <Col xs={8} className="text-left">
              <h2 className="sub-banner__title fadein-subbanner">
                I help clients make
                {' '}
                <span className="sub-banner__highlight">better business decisions</span>
              </h2>
            </Col>
            <Col xs={2}></Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col xs={8} className="text-left">
              <h2 className="sub-banner__subtitle fadein-subbanner">
                through
                {' '}
                <strong className="sub-banner__highlight">data-driven applications</strong>
                .
              </h2>
            </Col>
            <Col xs={2}></Col>
          </Row>

        </Col>
      </Row>

    </Container>


    {/* Container for smaller screens */}
    <Container className="home-page-small-screen">

      <Row className="h-100">
        <Col xs={12} className="align-self-center">

          <Row>
            <Col xs={12}>
              <h1 className="banner__title fadein-banner">
                {"Hi! I'm"}
                {" "}
                <strong className="banner__highlight">Jonathan</strong>
                {"."}
              </h1>
            </Col>
          </Row>

          <Row className="banner__subtitle__container">
            <Col xs={12}>
                <h2 className="banner__subtitle fadein-banner">
                  {'I love coding in '}
                  <Carousel defaultWait={3000} maxTurns={Infinity}>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code python">Python</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code js">Javascript</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code c">C</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code node">Node</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code sql">SQL</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code spark">Spark</h2>
                    </Fade>
                    <Fade top>
                      <h2 className="banner__subtitle banner__code react">React</h2>
                    </Fade>
                  </Carousel>
                </h2>
            </Col>
          </Row>

          <Row className="sub-banner">
            <Col xs={12} className="text-left">
              <h2 className="sub-banner__title fadein-subbanner">
                I help clients make
                {' '}
                <span className="sub-banner__highlight">better business decisions</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-left">
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

    </Container>
  </div>
);

export default Home;
