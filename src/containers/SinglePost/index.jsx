import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectPostById } from '../../reducers/postsSlice';

import { PostAuthor, DeleteModal, Loader } from '../../components';

import { Post, ButtonsContainer } from './SinglePost.styles';
import { Container, Title, EditButton, DeleteButton } from '../../shared';

const SinglePost = () => {
  const [modal, setModal] = useState(false);

  const { postId } = useParams();

  const postFiltered = useSelector((state) => selectPostById(state, postId));
  const postStatus = useSelector((state) => state.posts.status);

  if (postStatus === 'loading') {
    return <Loader />;
  }

  if (postStatus === 'failed') {
    const error = useSelector((state) => state.error);
    return <div>{error}</div>;
  }

  const onDeletePostClicked = async () => {
    setModal(!modal);
  };

  return postFiltered ? (
    <main>
      <Container>
        <section>
          <ButtonsContainer>
            <EditButton as={Link} to={`/edit/${postFiltered.id}`}>
              Edit Post ✍
            </EditButton>
            <DeleteButton type="button" onClick={onDeletePostClicked}>
              Delete Post 🗑
            </DeleteButton>
          </ButtonsContainer>
          <Post>
            <Title>{postFiltered.title}</Title>
            <PostAuthor userId={postFiltered.userId} />
            <p>{postFiltered.body}</p>
          </Post>
        </section>
      </Container>
      <DeleteModal
        isShowing={modal}
        setModal={setModal}
        postId={postFiltered.id}
      />
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
