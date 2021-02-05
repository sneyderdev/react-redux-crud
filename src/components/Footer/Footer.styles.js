import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin: 60px 0 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.s};
  color: ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default FooterContainer;
