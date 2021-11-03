import { useInfiniteQuery } from "react-query";

const useMyPostsQuery = () => {
  return useInfiniteQuery(
    ["my posts"],
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/my_posts?min=${pageParam}`,
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

export default useMyPostsQuery;
