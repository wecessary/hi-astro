export interface FrontMatter {
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  pubDate: string;
  tags: string[];
  layout: string;
}
