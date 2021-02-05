import styled from 'styled-components';

import { Button } from '../../shared';

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 10px;
`;

export const EditButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled(EditButton)`
  background: ${({ theme }) => theme.colors.red};
`;

export const Post = styled.article`
  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }
`;
