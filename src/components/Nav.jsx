import { useState } from "react";
import { Link } from "react-router-dom";
import StyledNav from "./styled/Nav.styled";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  return (
    <StyledNav opened={opened}>
      {opened === true ? (
        <button
          onClick={() => {
            setOpened(false);
          }}
        >
          <i className="fas fa-times" />
        </button>
      ) : (
        <button
          onClick={() => {
            setOpened(true);
          }}
        >
          <i className="fas fa-bars" />
        </button>
      )}
      <Link to="/">
        <h2>Twitter Clone</h2>
      </Link>
      <Link to="/posts">
        <h2>Posts</h2>
      </Link>
      <Link to="/account">
        <h2>Account</h2>
      </Link>
    </StyledNav>
  );
};
export default Nav;
