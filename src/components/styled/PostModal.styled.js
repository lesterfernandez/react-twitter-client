import styled from "styled-components";

const PostModal = styled.div`
  background-color: #222c;
  position: absolute;
  inset: 0;
  position: fixed;
`;

export default PostModal;

export const PostForm = styled.form`
  position: fixed;
  /* Center form without flexbox*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 500px;
  padding: 3rem 1rem 2rem;
  border-radius: 10px;
  background-color: #5f5f5fcc;
  box-shadow: ${({ theme }) => theme.shadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  & > textarea {
    font-family: "Montserrat", -apple-system, "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    resize: none;
    padding: 0.5rem 0.7rem;
    height: 150px;
    width: 85%;
    border-radius: 10px;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    &:focus {
      outline: 0;
    }
  }
  & > button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    outline: 0;
    border: none;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;

    &:hover,
    &:focus,
    &:active {
      outline: 0;
      border: 0;
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
      background-color: ${({ theme }) => theme.primaryHover};
    }
    color: white;
    background-color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
    margin-top: 1.5rem;
    transition: scale 150ms ease;
    &:active {
      transform: scale(0.98);
    }
  }

  & > sub {
    text-align: center;
  }
`;
