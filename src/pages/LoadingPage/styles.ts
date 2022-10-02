// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  .spinner {
    margin: calc(50vh - 70px) 0 0;
    width: 250px;

    * {
      background: #5d0eb2;
      height: 65px;
    }
  }
`;
