import styled from 'styled-components';

const Title = styled.h2`
  margin: 40px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.l};
  color: ${({ theme }) => theme.colors.primary};
`;

export default Title;
