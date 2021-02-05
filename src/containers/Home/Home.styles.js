import styled from 'styled-components';

import { Button } from '../../shared';

const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.black};
`;

export default CreateButton;
