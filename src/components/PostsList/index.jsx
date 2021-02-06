import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllPosts } from '../../reducers/postsSlice';

import PostItem from '../PostItem';

import Posts from './PostsList.styles';
import { Title } from '../../shared';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);

  if (postStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (postStatus === 'failed') {
    const error = useSelector((state) => state.error);
    return <div>{error}</div>;
  }

  return (
    <Posts>
      <Title>Posts 📃</Title>
      <div>
        {posts.map((post) => (
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

export default PostsList;
