import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContext from "./UserContext";

ReactDOM.render(
  <UserContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContext>,
  document.getElementById("root")
);
