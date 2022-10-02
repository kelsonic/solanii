// Node modules.
import styled from "styled-components";

export const Wrapper = styled.header`
  align-items: center;
  background-position: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-bottom: 8rem;
  width: 100%;

  @media (max-width: 980px) {
    width: calc(100% + 13px);
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    max-width: 1000px;
    width: 100%;

    @media (max-width: 980px) {
      padding: 40px 30px 25px;
    }

    ul {
      display: flex;

      li {
        margin-left: 30px;

        a {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
        }

        .feedback {
          background: transparent;
          border: none;
          color: rgb(252 231 243);
          cursor: pointer;
          font-size: 1rem;
          padding: 0;

          &:hover {
            color: #fff;
          }
        }

        &:first-of-type {
          margin-left: 0;
        }
      }
    }

    .wallet-actions {
      backdrop-filter: blur(16px);
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgb(239, 246, 255);
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(126, 34, 206, 0.3) 0px 20px 25px -5px,
        rgba(126, 34, 206, 0.3) 0px 8px 10px -6px;

      li {
        margin-left: 0px;
      }

      button {
        background: transparent;
        border: none;
        color: rgb(154, 52, 18);
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 10px 15px;

        &:disabled {
          cursor: not-allowed;
        }

        &:hover {
          background-color: hsla(0, 0%, 100%, 0.6);
        }
      }
    }
  }
`;
