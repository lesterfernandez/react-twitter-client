import { useContext } from "react";
import { Route } from "react-router";
import { Modal } from "./ModalContext";
import Nav from "./Nav";
import PostModal from "./PostModal";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const SignedInApp = () => {
  const { modalState } = useContext(Modal);
  return (
    <>
      <Nav />
      {modalState && <PostModal />}

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
