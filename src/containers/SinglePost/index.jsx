import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Post, EditButton } from './SinglePost.styles';
import { Container, Title } from '../../shared';

const SinglePost = () => {
  const { postId } = useParams();

  const postFiltered = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  return postFiltered ? (
    <main>
      <Container>
        <section>
          <EditButton as={Link} to={`/edit/${postFiltered.id}`}>
            Edit Post
          </EditButton>
          <Post>
            <Title>{postFiltered.title}</Title>
            <p>{postFiltered.body}</p>
          </Post>
        </section>
      </Container>
    </main>
  ) : (
    <main>
      <section>
        <Title>Post not found!</Title>
      </section>
    </main>
  );
};

export default SinglePost;
