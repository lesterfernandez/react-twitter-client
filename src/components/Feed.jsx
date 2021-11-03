import { useFeedQuery } from "../hooks/useFeedQuery";
import LoadMore from "./LoadMore";
import Post from "./Post";
import StyledFeed from "./styled/Feed.styled";

const Feed = () => {
  const { data, fetchNextPage, hasNextPage } = useFeedQuery();
  return (
    <StyledFeed>
      <h2>Recent Posts</h2>
      {data?.pages?.map(page =>
        page.posts.map((post, idx) => <Post key={idx} post={post} />)
      )}
      {hasNextPage && <LoadMore fetchNextPage={fetchNextPage} />}
    </StyledFeed>
  );
};

export default Feed;
