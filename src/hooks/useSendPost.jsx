// import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
// import { UserContext } from "../UserContext";

const useSendPost = () => {
  // const user = useContext(UserContext);
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
        //  Refetch queries after mutate (post)
        queryClient.refetchQueries("feed");
        queryClient.refetchQueries("my posts");
      },
      //   onMutate: async post => {
      //     await queryClient.cancelQueries(["feed", true]);
      //     await queryClient.cancelQueries("my posts");

      //     const oldFeed = queryClient.getQueryData(["feed", true]);
      //     const oldMyPosts = queryClient.getQueryData("my posts");

      //     const newPost = JSON.parse(post);

      //     queryClient.setQueryData(["feed", true], oldData => {
      //       const newFeed = { ...oldData };

      //       const potentialPost = {
      //         img: user.img_url,
      //         fullname: user.name,
      //         body: newPost.post,
      //       };

      //       newFeed.pages[0].posts.unshift(potentialPost);
      //       return newFeed;
      //     });

      //     queryClient.setQueryData("my posts", oldData => {
      //       const newMyPosts = { ...oldData };

      //       const potentialPost = {
      //         img: user.img_url,
      //         fullname: user.name,
      //         body: newPost.post,
      //       };

      //       newMyPosts.pages[0].posts.unshift(potentialPost);
      //       return newMyPosts;
      //     });

      //     return { oldFeed, oldMyPosts };
      //   },
      //   onError: (_, { oldFeed, oldMyPosts }, context) => {
      //     queryClient.setQueryData(["feed", true], oldFeed);
      //     queryClient.setQueryData("my posts", oldMyPosts);
      //   },
      //   onSettled: () => {
      //     queryClient.invalidateQueries("my posts");
      //     queryClient.invalidateQueries(["feed", true]);
      //   },
    }
  );
};

export default useSendPost;
