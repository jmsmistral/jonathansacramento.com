import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHashtag } from '@fortawesome/free-solid-svg-icons';

const blogList = [
  {
    title : 'Predicting churn without machine learning',
    date  : 'April 16, 2017',
    tags  : [
      'data',
      'stats',
      'churn'
    ]
  },
  {
    title : 'Clean SQL',
    date  : 'November 19, 2016',
    tags  : [
      'sql',
      'coding',
      'best practice'
    ]
  },
  {
    title : 'Improve your Postgres workflow with vim and dbext',
    date  : 'January 22, 2016',
    tags  : [
      'productivity',
      'postgres',
      'vim'
    ]
  },
  {
    title : 'On transposing data',
    date  : 'September 25, 2015',
    tags  : [
      'data',
      'tools',
      'cli'
    ]
  },
];

const Blog = () => (
  <div>
    <div className="page-container nav-margin max-width">

      {}
      <div className="blog__item">
        <h2 className="blog__item__title">Predicting churn without machine learning</h2>
        <span className="blog__item__date">
          <FontAwesomeIcon icon={faCalendarAlt} size="xs" />
          <div className="blog__item__date-value ">April 16, 2017</div>
        </span>
        <span className="blog__item__tags">
          <FontAwesomeIcon icon={faHashtag} size="xs" />
          <div className="blog__item__tags-value ">data</div>
          <div className="blog__item__tags-value ">stats</div>
          <div className="blog__item__tags-value ">churn</div>
        </span>
      </div>


    </div>
  </div>
);

export default Blog;
