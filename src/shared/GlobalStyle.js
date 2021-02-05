import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.grey};
    background: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
