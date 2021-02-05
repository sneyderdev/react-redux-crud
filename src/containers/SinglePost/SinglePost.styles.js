import styled from 'styled-components';

const Post = styled.article`
  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }
`;

export default Post;
