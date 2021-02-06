import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 250px);
  }
`;

export const Post = styled.article`
  font-size: 16px;

  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
