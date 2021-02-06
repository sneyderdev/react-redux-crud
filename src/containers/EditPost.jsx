import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { editPost, selectPostById } from '../reducers/postsSlice';

import {
  Container,
  Title,
  Button,
  FieldTitle,
  Form,
  CancelButton,
} from '../shared';

const EditPost = () => {
  const { postId } = useParams();

  const postFiltered = useSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(postFiltered.title);
  const [body, setBody] = useState(postFiltered.body);
  const [editRequestStatus, setEditRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const history = useHistory();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onBodyChanged = (event) => setBody(event.target.value);

  const canSubmit =
    [title, body].every(Boolean) && editRequestStatus === 'idle';

  const onFormSubmitted = async (event) => {
    event.preventDefault();

    if (canSubmit) {
      try {
        setEditRequestStatus('pending');
        const resultAction = await dispatch(
          editPost({
            id: postId,
            title,
            body,
          })
        );
        unwrapResult(resultAction);
      } catch (err) {
        console.error('Failed to edit the post: ', err);
      } finally {
        setEditRequestStatus('idle');
      }

      history.push(`/posts/${postId}`);
    }
  };

  return (
    <main>
      <Container>
        <Title>Edit Post ✍</Title>
        <Form onSubmit={onFormSubmitted}>
          <label htmlFor="postTitle">
            <FieldTitle>Title:</FieldTitle>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              required
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
              required
              value={body}
              onChange={onBodyChanged}
            />
          </label>
          <div>
            <Button type="submit" disabled={!canSubmit}>
              Save Post ✅
            </Button>
            <CancelButton as={Link} to={`/posts/${postId}`}>
              Cancel 🚫
            </CancelButton>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default EditPost;