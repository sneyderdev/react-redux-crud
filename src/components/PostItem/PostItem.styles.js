import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Post = styled.article`
  padding: 20px;
  position: relative;
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

export const PostTitle = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;
