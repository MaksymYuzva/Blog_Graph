import { gql } from "graphql-tag";
import { GraphQLDateTime } from "graphql-scalars";

const typeDefs = gql`
  scalar DateTime

  type Query {
    posts: [Posts]
    post(id: ID!): Post
    user: [User]
  }

  type User {
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
    userid: [User]
    image: String
    createdAt: DateTime
  }
  type Post {
    id: String
    User: [User]
  }

  input LoginInput {
    email: String
    password: String
  }
  type loginUserOutput {
    token: String
  }
  input RegisterInput {
    username: String
    email: String
    password: String
    confirmPassword: String
  }
  type registerUserOutput {
    token: String
  }
  type Mutation {
    registerUser(registerInput: RegisterInput): User
		loginUser(loginInput: LoginInput): User
    addPost(image: String, title: String): Posts
    updatePost(id: ID!, title: String, image: String): Posts
    deletePost(id: ID!): Posts
    addUser(novelId: ID!, name: String): User
    deleteUser(id: ID!): User
  }
`;
export default typeDefs;
