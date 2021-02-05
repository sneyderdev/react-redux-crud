import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 850px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export default Container;