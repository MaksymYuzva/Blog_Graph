import { gql } from "@apollo/client";
export const queryPost = gql`
  query {
    posts {
      id
      title
      content
      image
      createdAt
    }
    user {
      id
      email
    }
  }
`;
