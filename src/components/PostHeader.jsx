import StyledPostHeader from "./styled/PostHeader.styled";

const PostHeader = ({ post }) => {
  return (
    <StyledPostHeader>
      <h3>{post.fullname}</h3>
      <img src={post.img} alt="user profile img" />
    </StyledPostHeader>
  );
};

export default PostHeader;
