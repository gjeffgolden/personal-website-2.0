export type PortfolioCard = {
  src: string;
  name: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  body: string;
};
