import { gql } from "@apollo/client";
export const query = gql`
  query {
    posts {
      id
      title
      content
      image
      createdAt
    }
    author {
      id
      email
      name
    }
  }
`;
