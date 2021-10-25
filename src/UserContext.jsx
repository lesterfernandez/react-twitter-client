import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(() => ({ loggedIn: null }));

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/account`, {
      credentials: "include",
    })
      .catch(() => {
        console.log("error fetching");
        return;
      })
      .then(res => res.json())
      .then(r => {
        console.log(r);
        setUser({ ...r });
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
