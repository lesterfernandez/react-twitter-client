import styled from "styled-components";

const Nav = styled.nav`
  background-color: #313131;
  position: fixed;
  padding: 3rem 1.3rem;
  height: 100vh;
  transform-origin: bottom;
  ${({ opened }) => (opened ? "" : "transform: translateX(-100%);")}

  a {
    font-size: 1rem;
    outline: 0;
    border: 0;
    appearance: none;
    --webkit-appearance: none;
    --moz-appearance: none;
    background-color: transparent;
    color: white;
    text-decoration: none;
    h2 {
      margin-top: 1rem;
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 0.7rem;
    ${({ opened }) => (opened ? "" : "left: 13rem;")}
    outline: 0;
    border: 0;
    appearance: none;
    --webkit-appearance: none;
    --moz-appearance: none;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  @media (min-width: 600px) {
    transform: translateX(0);
    height: auto;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.7rem 1.2rem;
    flex-direction: row;
    button {
      display: none;
    }
    a {
      cursor: pointer;
      &:hover {
        color: #aaa;
      }

      &:first-of-type {
        margin-right: auto;
        position: relative;
        &:hover {
          color: white;
        }
      }
      h2 {
        margin-top: 0;
      }
    }
  }
`;

export default Nav;
