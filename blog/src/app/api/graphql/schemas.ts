import { gql } from "graphql-tag";
import { GraphQLDateTime } from "graphql-scalars";

const typeDefs = gql`
  scalar DateTime

  type Query {
    posts: [Posts]
    post(id: ID!): Post
    author: [Author]
  }

  type Author {
    id: String
    email: String
    username: String
    password: String
    posts: [Posts]
    createdAt: DateTime
    token: String
  }

  type Posts {
    id: String
    title: String
    content: String
    author: [Author]
    image: String
    createdAt: DateTime
  }
  type Post {
    id: String
    author: [Author]
  }

  input loginUser {
    email: String
    password: String
  }
  input registerUser {
    username: String
    email: String
    password: String
    confirmPassword: String
  }

  type Mutation {
    loginUser(email: String, password: String): loginUser
    registerUser(
      username: String
      email: String
      password: String
      confirmPassword: String
    ): registerUser
    addPost(image: String, title: String): Posts
    updatePost(id: ID!, title: String, image: String): Posts
    deletePost(id: ID!): Posts
    addAuthor(novelId: ID!, name: String): Author
    deleteAuthor(id: ID!): Author
  }
`;
export default typeDefs;
