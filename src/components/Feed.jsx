import React from "react";
import { useFeedQuery } from "../hooks/useFeedQuery";
import Post from "./Post";
import StyledFeed from "./styled/Feed.styled";

const Feed = () => {
  const { data } = useFeedQuery();
  // console.log("render feed");

  return (
    <StyledFeed>
      <h2>Recent Posts</h2>
      {data?.posts.map((p, idx) => (
        <Post key={idx} post={p} />
      ))}
    </StyledFeed>
  );
};

export default Feed;
