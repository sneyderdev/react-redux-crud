import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 36px;
    left: 36px;
    opacity: 1;
  }

  100% {
    width: 72px;
    height: 72px;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  background: ${({ theme }) => theme.colors.black};
`;

export const LoaderContent = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${load} 1000ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  &::after {
    animation-delay: -500ms;
  }
`;
