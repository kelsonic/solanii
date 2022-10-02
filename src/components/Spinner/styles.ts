// Node modules.
import styled, { keyframes } from "styled-components";

export const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  transform: scale(0.6);
  width: 70px;

  * {
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    background: #ffffff;
    border-radius: 100%;
    flex: 1;
    height: 18px;
    margin: 0 2px;
    width: 18px;
  }
`;

export const Bounce1 = styled.div`
  animation-delay: -0.32s;
`;

export const Bounce2 = styled.div`
  animation-delay: -0.16s;
`;

export const Bounce3 = styled.div``;
