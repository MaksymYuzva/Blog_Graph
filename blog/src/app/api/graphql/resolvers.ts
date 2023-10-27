import "dotenv/config";
import { Context } from "@/app/api/graphql/route";
import authService from "../services/auth.service";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server-core";
const JWT_SECRET: string = process.env.JWT_SECRET as string;
const resolvers = {
  Query: {
    //get novel by id
    post: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.posts.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    // get all novels
    posts: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.posts.findMany({});
    },
    user: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany({});
    },
  },
  Mutation: {
    loginUser: async (
      parent: any,
      { loginInput }: { loginInput: { email: string; password: string } },
      context: Context
    ) => {
      const { email, password } = loginInput;
      const existingUser = await context.prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (
        existingUser &&
        existingUser.password &&
        (await bcrypt.compare(password, existingUser.password))
      ) {
        const token = jwt.sign(
          { user_id: existingUser.id, email },
          JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );
        existingUser.token = token;
        return existingUser;
      } else {
        throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD");
      }
    },
    registerUser: async (
      parent: any,
      {
        registerInput,
      }: {
        registerInput: { username: string; email: string; password: string };
      },
      context: Context
    ) => {
      const { username, email, password } = registerInput;
      // Check if the user with the same email already exists
      const existingUser = await context.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        throw new ApolloError(
          `A User is already registered with the  email:` + email,
          `USER_ALREADY_EXISTS`
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user and save it to the database
      const newUser = await context.prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword, // You should hash the password before saving it securely.
        },
      });
      const token = jwt.sign({ user_id: newUser.id, email }, JWT_SECRET, {
        expiresIn: "30d",
      });
      newUser.token = token;

      return newUser;
    },
    addPost: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.posts.create({
        data: {
          title: args.title,
          image: args.image,
          User: args.user,
          content: args.content,
        },
      });
    },
    // update novel
    updatePost: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.posts.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
          content: args.content,
        },
      });
    },

    // delete novel
    deletePost: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.posts.delete({
        where: {
          id: args.id,
        },
      });
    },

    // Author Mutations

    // add author
    addUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.create({
        data: {
          // id: args.id,
          username: args.username,
          email: args.email,
          password: args.password,
          token: args.token,
        },
      });
    },
    // delete author
    deleteUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default resolvers;
