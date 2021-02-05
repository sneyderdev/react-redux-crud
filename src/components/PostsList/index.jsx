import React from 'react';
import { useSelector } from 'react-redux';

import PostItem from '../PostItem';

import Posts from './PostsList.styles';
import { Title } from '../../shared';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Posts>
      <Title>Posts</Title>
      <div>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            user={post.user}
          />
        ))}
      </div>
    </Posts>
  );
};

export default PostsList;
