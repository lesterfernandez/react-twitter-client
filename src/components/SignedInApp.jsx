import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route } from "react-router";
import Feed from "./Feed";
import { Modal } from "./ModalContext";
import Nav from "./Nav";
import PostModal from "./PostModal";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20, // data stale after 20 seconds
    },
  },
});

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
          acc
        </Route>
      </StyledSignedInApp>
    </QueryClientProvider>
  );
};

export default SignedInApp;
