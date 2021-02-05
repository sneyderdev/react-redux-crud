import React from 'react';
import PropTypes from 'prop-types';

import Post from './PostItem.styles';

const PostItem = ({ title, body }) => (
  <Post>
    <h3>{title}</h3>
    <p>{body}</p>
  </Post>
);

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
