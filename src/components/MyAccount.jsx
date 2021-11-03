import useMyPostsQuery from "../hooks/useMyPostsQuery";
import Post from "./Post";
import MyStyledAccount from "./styled/MyAccount.styled";

const MyAccount = () => {
  const { data } = useMyPostsQuery();
  return (
    <MyStyledAccount>
      <h2>My Posts</h2>
      {data?.posts.map((p, idx) => (
        <Post key={idx} post={p} />
      ))}
    </MyStyledAccount>
  );
};

export default MyAccount;
