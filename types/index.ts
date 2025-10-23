type Author = {
  name: string;
  avatar: string;
};

type PostCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export type { PostCard, Author };
