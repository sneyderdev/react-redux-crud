import styled from 'styled-components';

const Posts = styled.section`
  h2 {
    margin-bottom: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  div {
    display: grid;
    gap: 20px;
  }
`;

export default Posts;
