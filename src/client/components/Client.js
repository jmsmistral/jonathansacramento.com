import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';

import { codeProjects } from '../config/code-projects';

const Client = () => (
  <div className="content">
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <p className="client__banner__title">
            Over the years, I’ve had the pleasure to work with a bunch of really great people and companies on some amazing projects. Below are a few clients I've worked with...
          </p>
        </Col>
        <Col xs={12} className="client__section client__logo-section__width text-center">
          <img className="client__logo" src="/img/ah_delhaize_logo.svg" alt="Ahold Delhaize" width="252" height="82"/>
          <img className="client__logo" src="/img/ah_logo.svg" alt="Albert Heijn" width="90" height="82"/>
          <img className="client__logo" src="/img/fedex_logo.svg" alt="Fedex" width="252" height="82"/>
          <img className="client__logo" src="/img/att_logo.svg" alt="ATT" width="252" height="82"/>
          <img className="client__logo" src="/img/dia_logo.svg" alt="DIA" width="252" height="82"/>
          <img className="client__logo" src="/img/du_logo.png" alt="du" width="110" height="82"/>
          <img className="client__logo" src="/img/rogers_logo.svg" alt="Rogers" width="252" height="82"/>
          <img className="client__logo" src="/img/unimarc_logo.svg" alt="Unimarc" width="120" height="120"/>
          <img className="client__logo" src="/img/stc_logo.svg" alt="STC" width="252" height="110"/>
          <img className="client__logo" src="/img/telefonica_logo.svg" alt="Telefonica" width="252" height="82"/>
          <img className="client__logo" src="/img/zain_logo.svg" alt="Zain" width="252" height="82"/>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Client;
