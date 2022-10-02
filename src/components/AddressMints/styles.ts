// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 130px;
  margin: 30px 0 0;
  max-width: 960px;
  width: 100%;

  h2 {
    margin: 0 0 5px;
  }

  .mints {
    display: flex;
    flex-flow: row wrap;
    column-gap: 33px;
    row-gap: 16.5px;

    @media (max-width: 980px) {
      flex-direction: column;
      column-gap: 0;
      row-gap: 0;
    }

    .mint {
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid rgb(229, 231, 235);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(99, 102, 241, 0.1) 0px 20px 25px -5px,
        rgba(99, 102, 241, 0.1) 0px 8px 10px -6px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      max-width: 298px;
      padding: 5px;

      @media (max-width: 980px) {
        max-width: unset;
      }

      img {
        border-radius: 16px;
        border: 1px solid rgb(229, 231, 235);
        height: 285px;
        width: 285px;

        @media (max-width: 980px) {
          height: unset;
          width: 100%;
        }
      }

      h3 {
        font-size: 1rem;
        margin: 25px 0 0;
        padding: 0 10px;
      }

      .data {
        display: flex;
        flex-flow: row wrap;
        column-gap: 10px;
        row-gap: 10px;
        padding: 12px;
        position: relative;

        .background {
          background: transparent;
          bottom: 0;
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
        }

        .attributes {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid rgb(209, 213, 219);
          bottom: 70px;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(168, 85, 247, 0.1) 0px 10px 15px -3px,
            rgba(168, 85, 247, 0.1) 0px 4px 6px -4px;
          display: flex;
          flex-flow: row wrap;
          column-gap: 10px;
          row-gap: 10px;
          padding: 10px;
          position: absolute;
          left: 10px;
          width: calc(100% + 5px);

          .triangle {
            background: #ffffff;
            border-right: 1px solid rgb(209, 213, 219);
            border-bottom: 1px solid rgb(209, 213, 219);
            bottom: -6px;
            height: 10px;
            left: 50px;
            position: absolute;
            transform: rotate(45deg);
            width: 10px;
            z-index: 2;
          }

          .attribute {
            border: 1px solid rgb(229, 231, 235);
            border-radius: 4px;
            font-size: 0.8rem;
            padding: 5px 10px;

            p {
              &:last-of-type {
                color: #000000;
              }
            }
          }
        }

        .creators {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid rgb(209, 213, 219);
          bottom: 70px;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(168, 85, 247, 0.1) 0px 10px 15px -3px,
            rgba(168, 85, 247, 0.1) 0px 4px 6px -4px;
          display: flex;
          flex-direction: column;
          padding: 10px;
          position: absolute;
          left: 130px;
          width: calc(100% - 20px);

          .triangle {
            background: #ffffff;
            border-right: 1px solid rgb(209, 213, 219);
            border-bottom: 1px solid rgb(209, 213, 219);
            bottom: -6px;
            height: 10px;
            left: 50px;
            position: absolute;
            transform: rotate(45deg);
            width: 10px;
            z-index: 2;
          }

          .creator {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1rem;
            margin: 0 0 3px;

            &:last-of-type {
              margin-bottom: 0;
            }

            a {
              color: unset;
              transition: color 0.2s ease-in-out;

              &:hover,
              &:focus {
                color: #000000;
              }
            }
          }
        }

        p {
          align-items: center;
          display: flex;
          cursor: pointer;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: #000000;
          }
        }

        svg {
          height: 20px;
          margin-right: 5px;
          width: 20px;
        }
      }
    }
  }

  .pagination {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 0;
    width: 100%;

    button {
      align-items: center;
      background: transparent;
      border: none;
      color: rgb(55, 65, 81);
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      outline: none;

      img {
        height: 18px;
        width: 18px;
      }
    }

    .next {
      img {
        margin-left: 8px;
      }
    }

    .previous {
      img {
        margin-right: 8px;
        transform: rotate(180deg);
      }
    }
  }
`;
