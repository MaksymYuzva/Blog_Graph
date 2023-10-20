import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { LoginFormDTO, RegisterFormDTO, User } from "@/app/api/dto/auth.dto";
import { destroyCookie } from "nookies";
import {
  LOGIN_MUTATION,
  REGISTER_MUTATION,
} from "./graphql/mutations/registerMutations";
import { GET_MY_PROFILE_QUERY } from "./graphql/queries/getMyProfile";

// Define your GraphQL queries and mutations

// Use Apollo Client to execute GraphQL mutations and queries
export const useLogin = () => {
  return useMutation(LOGIN_MUTATION);
};

export const useRegister = () => {
  return useMutation(REGISTER_MUTATION);
};

export const useGetMyProfile = () => {
  return useQuery(GET_MY_PROFILE_QUERY);
};

export const logout = () => {};
