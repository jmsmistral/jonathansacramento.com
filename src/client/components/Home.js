import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';


const CarouselUI = ({ children }) => (
  <div>
    {children}
  </div>
);
const Carousel = makeCarousel(CarouselUI);

const Home = () => (
  <div className="home-page">
    <Container>
      <Row className="h-100">
        <Col xs={12} className="align-self-center">

          <Row>
            <Col xs={12} className="text-center">
              <h1 className="banner__title fadein-banner">
                {"Hi! I'm"}
                {" "}
                <strong className="banner__highlight">Jonathan</strong>
                {"."}
              </h1>
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="text-right banner__code-changer-static">
              <h2 className="banner__subtitle fadein-banner">
                {'I love coding in '}
              </h2>
            </Col>
            <Col xs={6} className="text-left">
                <Carousel defaultWait={3000} maxTurns={Infinity}>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer python">Python</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer js">Javascript</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer c">C</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer node">Node</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer sql">SQL</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer spark">Spark</h2>
                  </Fade>
                  <Fade top>
                    <h2 className="banner__subtitle banner__code-changer react">React</h2>
                  </Fade>
                </Carousel>
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

    </Container>
  </div>
);

export default Home;
