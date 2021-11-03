import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import { UserContext } from "../UserContext";

export const useFeedQuery = () => {
  const { loggedIn } = useContext(UserContext);
  return useInfiniteQuery(
    ["feed", loggedIn],
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/feed?min=${pageParam}`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong...");
      }
      return res.json();
    },
    {
      getNextPageParam: (lastPage, _) =>
        lastPage.posts.length === 5 ? lastPage.min : undefined,
    }
  );
};
