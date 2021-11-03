import { useQuery } from "react-query";

const useMyPostsQuery = () => {
  return useQuery(["my posts"], async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_posts`, {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Something went wrong...");
    }
    return res.json();
  });
};

export default useMyPostsQuery;
