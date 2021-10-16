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
      theme.type === "dark" ? "#212121" : "#cacaca"};
    width: 90%;
    max-width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Signup;
