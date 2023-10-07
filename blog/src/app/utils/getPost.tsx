"use server";
import { useQuery } from "@apollo/client";
import getPosts from "@/app/pages/api/graphql/queries/getPosts.gql";
import { QueryResult } from "../types/types";

const fetchPosts = () => {
  const { loading, data } = useQuery<QueryResult>(getPosts);
  if (loading) {
    <p>Loading...</p>;
  }
  return data?.posts;
};

export default fetchPosts;
