import { queryPost } from "@/app/api/graphql/queries/getPost";
import styles from "@/app/posts/post.module.scss";
import { checkAuth } from "@/app/utils/checkAuth";
import { useQuery } from "@apollo/client";
import { GetServerSidePropsContext } from "next";

const Post = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);
  if ("redirect" in authProps) {
    throw new Error("Authentication failed");
  }
  const { loading, error, data } = useQuery(queryPost);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { posts } = data;
  return <h2></h2>;
};

export default Post;
