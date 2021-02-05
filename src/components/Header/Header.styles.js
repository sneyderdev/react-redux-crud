import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

export default HeaderContainer;
