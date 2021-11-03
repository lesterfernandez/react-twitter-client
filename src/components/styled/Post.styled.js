import styled from "styled-components";

const Post = styled.div`
  background-color: ${({ theme }) => theme.elevation_1};
  box-shadow: ${({ theme }) => theme.shadow};

  & > p {
    padding: 1rem;
  }
`;

export default Post;
