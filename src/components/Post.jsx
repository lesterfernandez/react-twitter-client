import React from "react";
import PostHeader from "./PostHeader";
import StyledPost from "./styled/Post.styled";

const Post = React.memo(({ post }) => {
  // console.log(`render post: ${post.body}`);
  return (
    <StyledPost>
      <PostHeader post={post} />
      <p>{post.body}</p>
    </StyledPost>
  );
});

export default Post;
