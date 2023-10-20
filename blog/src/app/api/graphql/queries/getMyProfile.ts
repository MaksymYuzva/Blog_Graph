import { gql } from "@apollo/client";

export const GET_MY_PROFILE_QUERY = gql`
  query GetProfile {
    me {
      id
      username
      email
      // Add other user fields as needed
    }
  }
`;
