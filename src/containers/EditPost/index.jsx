import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { editPost, selectPostById } from '../../reducers/postsSlice';

import {
  Container,
  Title,
  Button,
  FieldTitle,
  Form,
  CancelButton,
} from '../../shared';

const EditPost = () => {
  const { postId } = useParams();

  const postFiltered = useSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(postFiltered.title);
  const [body, setBody] = useState(postFiltered.body);

  const dispatch = useDispatch();

  const history = useHistory();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onBodyChanged = (event) => setBody(event.target.value);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(
        editPost({
          id: postId,
          title,
          body,
        })
      );

      history.push(`/posts/${postId}`);
    }
  };

  return (
    <main>
      <Container>
        <Title>Edit Post</Title>
        <Form>
          <label htmlFor="postTitle">
            <FieldTitle>Title:</FieldTitle>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
          </label>
          <label htmlFor="postBody">
            <FieldTitle>Body:</FieldTitle>
            <textarea
              type="text"
              id="postBody"
              name="postBody"
              value={body}
              onChange={onBodyChanged}
            />
          </label>
          <div>
            <Button type="button" onClick={onSavePostClicked}>
              Save Post
            </Button>
            <CancelButton as={Link} to={`/posts/${postId}`}>
              Cancel
            </CancelButton>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default EditPost;
