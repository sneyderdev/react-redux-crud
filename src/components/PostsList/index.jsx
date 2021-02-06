/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectAllPosts } from '../../reducers/postsSlice';

import PostItem from '../PostItem';
import Loader from '../Loader';

import Posts from './PostsList.styles';
import { Title } from '../../shared';

const PostsList = ({ userPosts }) => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);

  if (postStatus === 'loading') {
    return <Loader />;
  }

  if (postStatus === 'failed') {
    const error = useSelector((state) => state.posts.error);
    return <div>{error}</div>;
  }

  return (
    <Posts>
      <Title>Posts 📃</Title>
      <div>
        {userPosts.length > 0
          ? userPosts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id.toString()}
              title={post.title}
              body={post.body}
              user={post.userId}
            />
            ))
          : posts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id.toString()}
              title={post.title}
              body={post.body}
              user={post.userId}
            />
            ))}
      </div>
    </Posts>
  );
};

PostsList.propTypes = {
  userPosts: PropTypes.array,
};

PostsList.defaultProps = {
  userPosts: [],
};

export default PostsList;
