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
      <Row>
        {
          codeProjects.map(repo => (
            <Col key={repo.id} xs={12} className="code-repo text-center">
              <Row>
                <Col xs={12} className="text-center">
                  <h2>
                    <a href={repo.link} className="code-repo__title">
                      {repo.name}
                    </a>
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <span className="code-repo__description">
                    <FontAwesomeIcon icon={faAlignJustify} size="xs" />
                    <span className="code-repo__description ">{repo.description}</span>
                  </span>
                </Col>
              </Row>
            </Col>
          ))
        }
      </Row>
    </Container>
  </div>
);

export default Code;
