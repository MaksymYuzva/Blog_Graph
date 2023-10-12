export interface Item {
  _id: string;
  createdAt: string;
  catSlug: string;
  title: string;
  slug: string;
  image: string;
}

export interface CardProps {
  item: {
    _id: string;
    createdAt: string;
    catSlug: string;
    title: string;
    slug: string;
    image: string;
  };
  key: string;
}
