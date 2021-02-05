import React, { useState } from 'react';

import { FieldTitle, Form } from './CreatePost.styles';
import { Container, Title } from '../../shared';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onBodyChanged = (event) => setBody(event.target.value);

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
        </Form>
      </Container>
    </main>
  );
};

export default CreatePost;
