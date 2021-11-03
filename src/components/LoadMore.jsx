import StyledLoadMore from "./styled/LoadMore.styled";

const LoadMore = ({ fetchNextPage }) => {
  return (
    <StyledLoadMore>
      <button onClick={() => fetchNextPage()}>Load More</button>
    </StyledLoadMore>
  );
};

export default LoadMore;
