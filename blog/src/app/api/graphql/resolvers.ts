import { Context } from "@/app/api/graphql/route";
import authService from "../services/auth.service";

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
    author: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.author.findMany({});
    },
  },
  // nested resolve function to get auhtors in novels
  Mutation: {
    loginUser: async (parent: any, args: any, context: Context) => {
      const { email, password } = args;
      const result = await authService.login(email, password);
      if (!result) {
        throw new Error("Invalid credentials");
      }
      return result;
    },
    registerUser: async (parent: any, args: any) => {
      const { username, email, password, confirmPassword } = args;
      const result = await authService.register(username, email, password);
      if (!result) {
        throw new Error("Invalid credentials");
      }
      return result;
    },
    addPost: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.posts.create({
        data: {
          title: args.title,
          image: args.image,
          author: args.author,
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
    addAuthor: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
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
    deleteAuthor: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default resolvers;
