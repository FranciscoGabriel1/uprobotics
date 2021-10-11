import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #3362EC;
  height: 5rem;
  color: #fff;
  /* border-bottom: 1px solid #fff; */

  div {
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;


    nav {
      margin-left: 5rem;
      height: 5rem;

      .active::after {
          content: "";
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: blue;
        }

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: var(blue);
        transition: color 0.2s;

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          color: var(--white);
        }

        &.active {
          color: var(--white);
          font-weight: bold;
        }

        &.active::after {
          content: "";
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #fff;
        }
      }
    }

    button {
      margin-left: auto;
    }
  }
`;
