import styled from 'styled-components';

const Post = styled.article`
  font-size: 16px;

  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export default Post;
