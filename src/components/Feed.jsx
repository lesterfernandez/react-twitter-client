import React from "react";
import { useFeedQuery } from "../hooks/useFeedQuery";
import StyledFeed from "./styled/Feed.styled";

const Feed = () => {
  const { data } = useFeedQuery();
  console.log("render feed");

  return (
    <StyledFeed>
      {data?.posts.map((p, idx) => (
        <div key={idx}>
          Post by {p.fullname} it says: {p.body}
        </div>
      ))}
    </StyledFeed>
  );
};

export default Feed;
