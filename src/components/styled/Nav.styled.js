import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.elevation_3};
  position: fixed;
  padding: 3rem 1.3rem;
  height: 100vh;
  transform-origin: bottom;
  ${({ opened }) => (opened ? "" : "transform: translateX(-100%);")}
  transition: transform 150ms ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow};
  & > * {
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

  @media (min-width: 600px) {
    transform: translatex(0);
    height: auto;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.7rem 1.2rem;
    flex-direction: row;
    & > * {
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

export const NavButton = styled.button`
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

  @media (min-width: 600px) {
    display: none;
  }
`;

export const PostButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin-left: auto;
  font-size: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  outline: 3px solid white;
  padding: 5px 10px;
  @media (min-width: 600px) {
    transition: all 150ms ease-in;
    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
    }
    transform: none;
    left: 0;
    right: 0;
    position: relative;
    height: 100%;
    font-size: 1.4rem;
    margin: 0;
    padding: 3px 10px;
  }
`;
