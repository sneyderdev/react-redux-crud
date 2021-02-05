import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Author from './PostAuthor.styles';

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return author ? (
    <Author>
      <i>
        By:
        {' '}
        {author.name}
      </i>
    </Author>
  ) : (
    <Author>
      <i>By: Unknown</i>
    </Author>
  );
};

PostAuthor.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PostAuthor;
