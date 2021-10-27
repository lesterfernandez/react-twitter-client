import { Route } from "react-router";
import Nav from "./Nav";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const SignedInApp = () => {
  return (
    <>
      <Nav />
      <StyledSignedInApp>
        <Route exact path="/">
          home
        </Route>
        <Route exact path="/account">
          acc
        </Route>
      </StyledSignedInApp>
    </>
  );
};

export default SignedInApp;
