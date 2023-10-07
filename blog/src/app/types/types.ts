//Post
export interface Post {
  _id: string;
  username: string;
  title: string;
  image: string;
}

export interface QueryResult {
  posts: Post[];
}

//Item
