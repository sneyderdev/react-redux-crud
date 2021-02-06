import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 700;
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.sizes.n};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`;

export const EditButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled(EditButton)`
  background: ${({ theme }) => theme.colors.red};
`;

export const CancelButton = styled(EditButton)`
  background: ${({ theme }) => theme.colors.grey};
`;

export default Button;
