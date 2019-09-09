import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';

import { blogPosts } from '../config/blog-posts';

const BlogPost = (props) => {
  console.log(props.match.params.route)
  let blogPostRoute = props.match.params.route;
  // Get the HTML content from the blog-posts array
  let blogPost = blogPosts.find(post => post.route == blogPostRoute);
  let blogPostTitle = blogPost.title;
  let blogPostDate = blogPost.date;
  let blogPostContent = blogPost.content;
  
  return (
    <div className="content">
      <Container className="post__width">
        <Row>
          <Col className="text-center">
            <h1 className="post__title">{blogPostTitle}</h1>
            <h3 className="post__date">{blogPostDate}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="post__content" dangerouslySetInnerHTML={{__html: blogPostContent}}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost;
