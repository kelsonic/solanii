// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 960px;
  width: 100%;

  @media (max-width: 980px) {
    flex-direction: column;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 2rem;

    @media (max-width: 980px) {
      padding-left: 0;
      padding-bottom: 1rem;
    }

    &:first-of-type {
      padding-left: 0;
    }

    h2 {
      line-height: 1.5;
      margin-top: 15px;
      margin-bottom: 3px;

      &:first-child {
        margin-top: 0;
      }
    }

    p {
      line-height: 1.5;

      a {
        color: unset;
        transition: color 0.2s ease-in-out;

        &:hover,
        &:focus {
          color: #000000;
        }
      }
    }

    .key-value {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
