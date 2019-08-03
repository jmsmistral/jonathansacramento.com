import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHashtag } from '@fortawesome/free-solid-svg-icons';

import { blogPosts } from '../config/blog-posts';

const Blog = () => (
  <div className="content">
    <Container>
      <Row>
        {
          blogPosts.map(post => (
            <Col key={post.id} xs={12} className="blog-post text-center">
              <Row>
                <Col xs={12} className="text-center">
                  <h2 className="blog-post__title">{post.title}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <span className="blog-post__date">
                    <FontAwesomeIcon icon={faCalendarAlt} size="xs" />
                    <span className="blog-post__date-value ">{post.date}</span>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <span className="blog-post__tags">
                    <FontAwesomeIcon icon={faHashtag} size="xs" />
                    {
                      post.tags.map((tag, index) => (
                        <span key={String(post.id) + String(index + 1)} className="blog-post__tags-value ">{tag}</span>
                      ))
                    }
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

export default Blog;
