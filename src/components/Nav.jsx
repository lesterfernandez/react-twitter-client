import { useContext } from "react";
import { myContext } from "../UserContext";
import StyledNav from "./styled/Nav.styled";

const Nav = () => {
  const user = useContext(myContext);
  return <StyledNav>{user.toString()}</StyledNav>;
};
export default Nav;
