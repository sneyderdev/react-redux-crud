import React from 'react';
import PropTypes from 'prop-types';

import { Post, PostTitle } from './PostItem.styles';

const PostItem = ({ id, title, body }) => (
  <Post>
    <PostTitle to={`/posts/${id}`}>
      <h3>{title}</h3>
    </PostTitle>
    <p>{body}</p>
  </Post>
);

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
