import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../UserContext";

export const useFeedQuery = () => {
  const { loggedIn } = useContext(UserContext);
  return useQuery(
    ["feed", loggedIn],
    async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/feed`, {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Something went wrong...");
      }
      return res.json();
    },
    {
      refetchInterval: 10000,
    }
  );
};
