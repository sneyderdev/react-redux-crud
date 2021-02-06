import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { createPost } from '../reducers/postsSlice';

import {
  Container,
  Title,
  Button,
  FieldTitle,
  Form,
  CancelButton,
} from '../shared';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [createRequestStatus, setCreateRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const history = useHistory();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onAuthorChanged = (event) => setUserId(event.target.value);
  const onBodyChanged = (event) => setBody(event.target.value);

  const canSubmit =
    [title, body, userId].every(Boolean) && createRequestStatus === 'idle';

  const onFormSubmitted = async (event) => {
    event.preventDefault();

    if (canSubmit) {
      try {
        setCreateRequestStatus('pending');
        const resultAction = await dispatch(
          createPost({ title, body, userId: Number(userId) })
        );
        unwrapResult(resultAction);
      } catch (err) {
        console.error('Failed to create the post: ', err);
      } finally {
        setCreateRequestStatus('idle');
      }

      history.push('/');
    }
  };

  return (
    <main>
      <Container>
        <Title>New Post ➕</Title>
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
          <label htmlFor="postAuthor">
            <FieldTitle>Author:</FieldTitle>
            <select
              id="postAuthor"
              name="postAuthor"
              required
              onChange={onAuthorChanged}
            >
              <option value="">Select an user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
              Create Post ✅
            </Button>
            <CancelButton as={Link} to="/">
              Cancel 🚫
            </CancelButton>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default CreatePost;
