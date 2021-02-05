import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 700;
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};
`;

export default Button;
