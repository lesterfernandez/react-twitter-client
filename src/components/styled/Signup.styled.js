import styled from "styled-components";

const Signup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    border-radius: 10px;
    background-color: ${({ theme }) =>
      theme.type === "dark" ? "#212121" : "#e2e2e2"};
    box-shadow: ${({ theme }) =>
      theme.type === "dark" ? "0 2px 5px 0 #111" : " 0 5px 10px 0 #bbb"};
    width: 90%;
    max-width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
      font-family: "Pacifico", cursive;
    }
  }
`;

export const SignInBtn = styled.button`
  font-size: 1.1rem;
  display: flex;
  width: 90%;
  max-width: 250px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ loading }) => (loading ? "#555 " : "var(--primary-main)")};
  cursor: ${({ loading }) => (loading ? "normal" : "pointer")};
  border-radius: 5px;
  --moz-appearance: none;
  --webkit-appearance: none;
  appearance: none;
  outline: 0;
  border: 0;
  i {
    color: ${({ loading }) => (loading ? "#676767" : "#a53737")};
  }

  &:focus,
  &:active {
    outline: 0;
    border: 0;
  }

  &:active {
    transform: ${({ loading }) => (loading ? "scale(1)" : "scale(0.98)")};
  }
`;

export default Signup;
