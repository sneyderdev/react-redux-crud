import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 10px;
`;

export const Post = styled.article`
  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }
`;
