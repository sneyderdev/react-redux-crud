import styled from 'styled-components';

const Post = styled.article`
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  h3 {
    margin-top: 0;
    text-align: center;
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.m};
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.n};
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default Post;
