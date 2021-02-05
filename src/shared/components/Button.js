import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

export default Button;
