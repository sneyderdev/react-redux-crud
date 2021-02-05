import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postDeleted } from '../../reducers/postsSlice';

import { PostAuthor } from '../../components';

import {
  Post,
  ButtonsContainer,
  EditButton,
  DeleteButton,
} from './SinglePost.styles';
import { Container, Title } from '../../shared';

const SinglePost = () => {
  const { postId } = useParams();

  const postFiltered = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const onDeletePostClicked = () => {
    dispatch(postDeleted(postId));

    history.push('/');
  };

  return postFiltered ? (
    <main>
      <Container>
        <section>
          <ButtonsContainer>
            <EditButton as={Link} to={`/edit/${postFiltered.id}`}>
              Edit Post
            </EditButton>
            <DeleteButton type="button" onClick={onDeletePostClicked}>
              Delete Post
            </DeleteButton>
          </ButtonsContainer>
          <Post>
            <Title>{postFiltered.title}</Title>
            <PostAuthor userId={postFiltered.user} />
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
