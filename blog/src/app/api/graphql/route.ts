import { NextRequest } from "next/server";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { PrismaClient } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
};
import typeDefs from "@/app/api/graphql/schemas";
import resolvers from "@/app/api/graphql/resolvers";
import allowCors from "@/app/utils/cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { prisma } from "@/app/prisma/db";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
