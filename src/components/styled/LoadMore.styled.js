import styled from "styled-components";

const LoadMore = styled.div`
  margin: auto;

  & > button {
    background-color: transparent;
    outline: 3px solid ${({ theme }) => theme.primary};
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin: 1.5rem 0 1rem;

    &:hover,
    &:focus {
      border: none;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export default LoadMore;
