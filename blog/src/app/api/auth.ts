import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { LoginFormDTO, RegisterFormDTO, User } from "@/app/api/dto/auth.dto";

// Define your GraphQL queries and mutations
const LOGIN_MUTATION = gql`
  mutation Login($input: LoginFormDTO!) {
    login(input: $input) {
      token
      user {
        id
        username
        email
        // Add other user fields as needed
      }
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterFormDTO!) {
    register(input: $input) {
      token
      user {
        id
        username
        email
        // Add other user fields as needed
      }
    }
  }
`;

const GET_ME_QUERY = gql`
  query GetMe {
    me {
      id
      username
      email
      // Add other user fields as needed
    }
  }
`;

// Use Apollo Client to execute GraphQL mutations and queries
export const useLogin = () => {
  return useMutation(LOGIN_MUTATION);
};

export const useRegister = () => {
  return useMutation(REGISTER_MUTATION);
};

export const useGetMe = () => {
  return useQuery(GET_ME_QUERY);
};

export const logout = () => {
  // You can handle logout logic here (e.g., clearing tokens, cookies, or local storage).
};
