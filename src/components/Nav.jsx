import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./ModalContext";
import StyledNav, { NavButton, PostButton } from "./styled/Nav.styled";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  const { togglePostModal } = useContext(Modal);
  return (
    <StyledNav opened={opened}>
      {opened === true ? (
        <NavButton
          opened={opened}
          onClick={() => {
            setOpened(false);
          }}
        >
          <i className="fas fa-times" />
        </NavButton>
      ) : (
        <NavButton
          opened={opened}
          onClick={() => {
            setOpened(true);
          }}
        >
          <i className="fas fa-bars" />
        </NavButton>
      )}
      <Link to="/">
        <h2>Twitter Clone</h2>
      </Link>
      <Link to="/">
        <h2>Posts</h2>
      </Link>
      <Link to="/account">
        <h2>Account</h2>
      </Link>
      <PostButton
        onClick={() => {
          setOpened(false);
          togglePostModal();
        }}
      >
        <i className="fas fa-plus" />
      </PostButton>
    </StyledNav>
  );
};
export default Nav;
