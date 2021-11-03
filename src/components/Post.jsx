import React from "react";
import PostHeader from "./PostHeader";
import StyledPost from "./styled/Post.styled";

const Post = React.memo(({ post }) => {
  return (
    <StyledPost>
      <PostHeader post={post} />
      <p>{post.body}</p>
    </StyledPost>
  );
});

export default Post;
