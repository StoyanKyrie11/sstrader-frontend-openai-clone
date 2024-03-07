export type BlogPostProps = {
  content: string;
  publishDate: string;
  title: string;
  authors: {
    name: string;
  };
  image: {
    height: number;
    url: string;
    title: string;
    width: number;
  };
  description: string;
  blogSlug: string;
  id: string;
};
