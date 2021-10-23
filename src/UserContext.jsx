import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(() => null);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
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
          if (r.id) {
            setUser({ ...r });
            localStorage.setItem("user", JSON.stringify({ ...r }));
          }
        });
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
