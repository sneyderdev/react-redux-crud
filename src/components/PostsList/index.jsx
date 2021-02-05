import React from 'react';
import { useSelector } from 'react-redux';

import PostItem from '../PostItem';

import Posts from './PostsList.styles';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Posts>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </Posts>
  );
};

export default PostsList;
