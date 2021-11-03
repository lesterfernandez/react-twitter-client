import useMyPostsQuery from "../hooks/useMyPostsQuery";
import LoadMore from "./LoadMore";
import Post from "./Post";
import MyStyledAccount from "./styled/MyAccount.styled";

const MyAccount = () => {
  const { data, fetchNextPage, hasNextPage } = useMyPostsQuery();
  return (
    <MyStyledAccount>
      <h2>My Posts</h2>
      {data?.pages?.map(page =>
        page.posts.map((post, idx) => <Post key={idx} post={post} />)
      )}
      {hasNextPage && <LoadMore fetchNextPage={fetchNextPage} />}
    </MyStyledAccount>
  );
};

export default MyAccount;
