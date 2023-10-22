import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginFormDTO!) {
    login(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterFormDTO!) {
    register(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
