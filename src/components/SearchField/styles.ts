// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  background: transparent;
  position: absolute;
  top: -37px;

  .spinner {
    background: linear-gradient(
      to right bottom,
      rgb(229, 231, 235),
      rgb(209, 213, 219)
    );
    border-radius: 4px;
    height: 60px;
    left: 5px;
    padding: 11px;
    position: absolute;
    top: calc(50% - 40px);
    width: 60px;
    z-index: 1;

    @media (max-width: 980px) {
      left: 70px;
    }

    * {
      background: #666666;
    }
  }

  img {
    background: linear-gradient(
      to right bottom,
      rgb(229, 231, 235),
      rgb(209, 213, 219)
    );
    border-radius: 4px;
    height: 40px;
    left: 15px;
    padding: 11px;
    position: absolute;
    top: calc(50% - 30px);
    width: 40px;
    z-index: 1;

    @media (max-width: 980px) {
      left: 80px;
    }

    &.red {
      background: linear-gradient(
        to right bottom,
        rgb(254, 202, 202),
        rgb(252, 165, 165)
      );
    }

    &.collection {
      padding: 0;
    }
  }

  input {
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(219, 234, 254, 0.8)
    );
    backdrop-filter: blur(16px);
    border: 1px solid #ffffff;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(99, 102, 241, 0.3) 0px 10px 15px -3px,
      rgba(99, 102, 241, 0.3) 0px 4px 6px -4px;
    color: #394150;
    height: 74px;
    outline: 0;
    padding: 36px 20px 12px 71px;
    transition: all 0.2s ease;
    width: 512px;

    @media (max-width: 980px) {
      margin-left: 60px;
      max-width: calc(100% - 120px);
    }

    &::placeholder {
      color: #878c99;
    }

    &:focus {
      border: 2px solid rgb(236, 72, 153);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(99, 102, 241, 0.3) 0px 10px 15px -3px,
        rgba(99, 102, 241, 0.3) 0px 4px 6px -4px;
      outline: none;
    }
  }

  label {
    color: #000000;
    font-size: 1.3rem;
    font-weight: bold;
    left: 71px;
    position: absolute;
    top: calc(50% - 30px);

    @media (max-width: 980px) {
      left: 132px;
    }
  }
`;
