import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllPosts, fetchPosts } from '../../reducers/postsSlice';

import PostItem from '../PostItem';

import Posts from './PostsList.styles';
import { Title } from '../../shared';

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(state => state.posts.status)

useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus])

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
