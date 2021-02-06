import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { selectPostByUser } from '../reducers/postsSlice';

import { PostList } from '../components';

import { Container, ButtonsContainer, MainButton, Form } from '../shared';

const Home = () => {
  const [userId, setUserId] = useState('');

  const users = useSelector((state) => state.users);
  const userPosts = useSelector((state) => selectPostByUser(state, userId));

  const onUserChanged = (event) => setUserId(event.target.value);

  return (
    <>
      <Helmet>
        <title>Blog Community</title>
      </Helmet>

      <main>
        <Container>
          <ButtonsContainer>
            <MainButton as={Link} to="/create">
              New Post ➕
            </MainButton>
            <Form>
              <label htmlFor="userFilter">
                <select
                  id="userFilter"
                  name="userFilter"
                  required
                  onChange={onUserChanged}
                >
                  <option value="">Filter by user</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </label>
            </Form>
          </ButtonsContainer>
          <PostList userPosts={userPosts} />
        </Container>
      </main>
    </>
  );
};

export default Home;
