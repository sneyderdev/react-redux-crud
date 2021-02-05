import styled from 'styled-components';

import { Button } from '../../shared';

export const EditButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Post = styled.article`
  p {
    font-size: ${({ theme }) => theme.sizes.n};
  }
`;
