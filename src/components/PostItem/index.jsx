import React from 'react';
import PropTypes from 'prop-types';

import PostAuthor from '../PostAuthor';

import { Post, PostTitle } from './PostItem.styles';

const PostItem = ({ id, title, body, user }) => (
  <Post>
    <PostTitle to={`/posts/${id}`}>
      <h3>{title}</h3>
    </PostTitle>
    <p>{body}</p>
    <PostAuthor userId={user} />
  </Post>
);

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
};

export default PostItem;
