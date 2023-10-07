import { Context } from "@/app/api/graphql/route";

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
    // add novel
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
          id: args.id,
          name: args.name,
          email: args.email,
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
