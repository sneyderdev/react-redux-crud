import React from 'react';
import { Link } from 'react-router-dom';

import { PostList } from '../../components';

import { Container } from '../../shared';
import CreateButton from './Home.styles';

const Home = () => (
  <main>
    <Container>
      <CreateButton as={Link} to="/create">
        New Post ➕
      </CreateButton>
      <PostList />
    </Container>
  </main>
);

export default Home;
