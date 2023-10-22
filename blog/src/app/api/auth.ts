import { useMutation, useQuery } from "@apollo/client";
import {
  LOGIN_MUTATION,
  REGISTER_MUTATION,
} from "./graphql/mutations/registerMutations";
import { GET_MY_PROFILE_QUERY } from "./graphql/queries/getMyProfile";

// Define your GraphQL queries and mutations

// Use Apollo Client to execute GraphQL mutations and queries

export const useGetMyProfile = () => {
  return useQuery(GET_MY_PROFILE_QUERY);
};

export const logout = () => {};
