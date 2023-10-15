"use client";
import { queryPost } from "@/app/api/graphql/queries/getPost";
import styles from "@/app/posts/post.module.scss";
import { useQuery } from "@apollo/client";

const Post = () => {
  // const authProps = await checkAuth(ctx);
  // if ("redirect" in authProps) {
  //   throw new Error("Authentication failed");
  // }
  const { loading, error, data } = useQuery(queryPost);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { posts } = data;
  return <h2>Post</h2>;
};

export default Post;
