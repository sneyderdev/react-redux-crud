import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from './Header.styles';
import { Container } from '../../shared';

const Header = () => (
  <HeaderContainer>
    <Container>
      <h1>
        <Link to="/">Welcome to the Blog CRUD</Link>
      </h1>
    </Container>
  </HeaderContainer>
);

export default Header;
