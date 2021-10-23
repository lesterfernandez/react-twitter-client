import { useContext } from "react";
import { UserContext } from "../UserContext";
import Nav from "./Nav";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const SignedInApp = () => {
  const user = useContext(UserContext);
  return (
    <>
      <Nav />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <StyledSignedInApp>hello</StyledSignedInApp>
    </>
  );
};

export default SignedInApp;
