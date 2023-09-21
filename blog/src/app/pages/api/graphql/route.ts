"use server";
import { NextRequest } from "next/server";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@/app/prisma/db";

import { PrismaClient } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
};
import typeDefs from "@/app/pages/api/graphql/schemas";
import resolvers from "@/app/pages/api/graphql/resolvers";
import allowCors from "@/app/utils/cors";

const apolloServer: ApolloServer<Context> = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, prisma }),
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);
export default handler;
