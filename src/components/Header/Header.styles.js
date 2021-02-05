import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin: 40px 0;
  text-align: center;

  a {
    font-size: ${({ theme }) => theme.sizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default HeaderContainer;
