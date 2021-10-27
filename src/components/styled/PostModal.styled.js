import styled from "styled-components";

const PostModal = styled.div`
  background-color: #222c;
  position: absolute;
  inset: 0;
`;

export default PostModal;

export const PostForm = styled.form`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  margin: auto;
  width: 90%;
  max-width: 500px;
  background-color: #aaa5;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #aaa5;
  align-items: center;
  gap: 1rem;

  textarea {
    font-family: "Montserrat", -apple-system, "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    resize: none;
    padding: 0.5rem 0.7rem;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    width: 85%;
    height: 30%;
    &:focus {
      outline: 0;
    }
  }
`;
