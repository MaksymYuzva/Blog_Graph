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
export interface Item {
  _id: string;
  createdAt: string;
  catSlug: string;
  title: string;
  slug: string;
  image: string;
}
