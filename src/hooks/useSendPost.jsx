import { useMutation, useQueryClient } from "react-query";

const useSendPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    data => {
      return fetch(`${process.env.REACT_APP_SERVER_URL}/new_post`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries("feed");
        queryClient.refetchQueries("my posts");
      },
    }
  );
};

export default useSendPost;
