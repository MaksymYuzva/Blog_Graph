import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    posts: [Posts]
    post: [Post]
  }

  type Author {
    id: ID
    postId: String
    posts: [Posts]
  }

  type Posts {
    id: String
    title: String
    Authors: [Author]
    image: String
  }
  type Post {
    id: String
    Authors: [Author]
  }

  type Mutation {
    addPost(image: String, title: String): Posts
    updatePost(id: ID!, title: String, image: String): Posts
    deletePost(id: ID!): Posts
    addAuthor(novelId: ID!, name: String): Author
    deleteAuthor(id: ID!): Author
  }
`;
export default typeDefs;
