import { createContext, useEffect, useState } from "react";
export const myContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/account", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(r => {
        console.log(r);
      });
  }, []);

  return <myContext.Provider value={user}>{children}</myContext.Provider>;
};

export default Context;
