"use client";

import styles from "@/app/components/post/post.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/authContext";
import { useForm } from "@/app/utils/hooks";
import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useRouter } from "next/navigation";
import useCheckAuth from "../utils/useCheckAuth";
const Post = () => {
  const redirected = useCheckAuth();
  if (redirected) {
    return null;
  }

  return <h2>Post</h2>;
};

export default Post;
