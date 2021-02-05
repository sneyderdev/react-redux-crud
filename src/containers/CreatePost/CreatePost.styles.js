import styled from 'styled-components';

import { Button } from '../../shared';

export const FieldTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.form`
  input,
  textarea {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background: transparent;
    border-radius: 10px;
    outline: 0;
    transition: border-color 200ms;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.grey};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:focus {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }

  textarea {
    height: 100px;
    padding: 10px;
  }

  div {
    display: grid;
    margin-top: 20px;
    gap: 10px;
  }
`;

export const CancelButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grey};
`;
