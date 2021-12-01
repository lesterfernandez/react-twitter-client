import styled from "styled-components";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <p>Loading</p>
      <div>
        <Dot delay="1" />
        <Dot delay="0.5" />
        <Dot delay="0" />
      </div>
    </StyledLoadingScreen>
  );
};

const StyledLoadingScreen = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  & > div {
    height: 40px;
    width: 50px;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;

const Dot = styled.span`
  border-radius: 50%;
  background-color: white;
  width: 10px;
  height: 10px;
  animation: dot ease-in-out 0.7s alternate infinite;
  animation-delay: ${({ delay }) => delay + "s"};

  @keyframes dot {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

export default LoadingScreen;
