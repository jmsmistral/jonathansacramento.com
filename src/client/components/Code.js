import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

import { codeProjects } from '../config/code-projects';

const Code = () => (
  <div className="content">
    <Container>
        {
          codeProjects.map(repo => (
            <Row key={repo.id}>
              <Col xs={2}></Col>
              <Col key={repo.id} xs={8} className="code-repo text-left">
                <Row>
                  <Col xs={12} className="text-left">
                    <h2>
                      <a href={repo.link} className="code-repo__title">
                        {repo.name}
                      </a>
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className="text-left">
                    <span className="code-repo__description">
                      <FontAwesomeIcon icon={faAlignJustify} size="xs" />
                      <span className="code-repo__description__text">{repo.description}</span>
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col xs={2}></Col>
            </Row>
          ))
        }
    </Container>
  </div>
);

export default Code;
