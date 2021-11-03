import styled from "styled-components";

const PostHeader = styled.div`
  border-bottom: 1px solid gray;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  & > img {
    width: 70px;
  }
`;

export default PostHeader;
