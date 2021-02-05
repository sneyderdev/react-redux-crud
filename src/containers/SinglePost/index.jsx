import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { deletePost, selectPostById } from '../../reducers/postsSlice';

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

  const postFiltered = useSelector((state) => selectPostById(state, postId));

  const dispatch = useDispatch();

  const history = useHistory();

  const onDeletePostClicked = async () => {
    await dispatch(deletePost(postFiltered.id));

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
            <PostAuthor userId={postFiltered.userId} />
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
