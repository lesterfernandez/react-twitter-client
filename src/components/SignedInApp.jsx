import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route } from "react-router";
import Feed from "./Feed";
import { Modal } from "./ModalContext";
import MyAccount from "./MyAccount";
import Nav from "./Nav";
import PostModal from "./PostModal";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const queryClient = new QueryClient();

const SignedInApp = ({ toggleTheme }) => {
  const { modalState } = useContext(Modal);
  return (
    <QueryClientProvider client={queryClient}>
      <Nav toggleTheme={toggleTheme} />
      {modalState && <PostModal />}

      <StyledSignedInApp>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="/account">
          <MyAccount />
        </Route>
      </StyledSignedInApp>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default SignedInApp;
