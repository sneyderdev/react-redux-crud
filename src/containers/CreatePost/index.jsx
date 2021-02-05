import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { postCreated } from '../../reducers/postsSlice';

import {
  Container,
  Title,
  Button,
  FieldTitle,
  Form,
  CancelButton,
} from '../../shared';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const history = useHistory();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onAuthorChanged = (event) => setUserId(event.target.value);
  const onBodyChanged = (event) => setBody(event.target.value);

  const onCreatePostClicked = () => {
    if (title && body && userId) {
      dispatch(postCreated(title, body, Number(userId)));

      history.push('/');
    }
  };

  return (
    <main>
      <Container>
        <Title>New Post</Title>
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
          <label htmlFor="postAuthor">
            <FieldTitle>Author:</FieldTitle>
            <select
              id="postAuthor"
              name="postAuthor"
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
              value={body}
              onChange={onBodyChanged}
            />
          </label>
          <div>
            <Button type="button" onClick={onCreatePostClicked}>
              Create Post
            </Button>
            <CancelButton as={Link} to="/">
              Cancel
            </CancelButton>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default CreatePost;
