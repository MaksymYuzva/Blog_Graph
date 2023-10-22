import { gql } from "@apollo/client";
export const queryPosts = gql`
  query {
    posts {
      id
      title
      content
      image
      createdAt
    }
  }
`;
