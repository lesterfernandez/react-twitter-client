import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
