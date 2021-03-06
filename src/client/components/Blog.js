import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHashtag } from '@fortawesome/free-solid-svg-icons';

import { blogPosts } from '../config/blog-posts';

const blogPostsReversed = blogPosts.reverse();

const Blog = () => (
  <div className="content">

    <Container>
        {
          blogPostsReversed.map(post => (
            <Row key={post.id}>
              <Col xs={2}></Col>
              <Col key={post.id} xs={8} className="blog-post text-left">
                <Row>
                  <Col xs={12} className="text-left">
                    <h2><NavLink to={"/blogpost/" + post.route} exact className="blog-post__title">{post.title}</NavLink></h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className="text-left">
                    <span className="blog-post__date">
                      <FontAwesomeIcon icon={faCalendarAlt} size="xs" />
                      <span className="blog-post__date-value ">{post.date}</span>
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

export default Blog;
