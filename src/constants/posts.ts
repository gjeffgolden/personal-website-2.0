import fm from "front-matter";

import { BlogPost } from "../models/models";

type PostAttributes = {
  title: string;
  date: string | Date;
  excerpt: string;
  coverImage?: string;
};

// Eagerly load every markdown file under content/posts as a raw string.
const files = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Derive a URL slug from a file path: ".../my-first-post.md" -> "my-first-post".
const slugFromPath = (path: string): string =>
  path.split("/").pop()!.replace(/\.md$/, "");

// Normalize a frontmatter date (js-yaml may parse unquoted dates as Date) to YYYY-MM-DD.
const toIsoDate = (value: string | Date): string =>
  value instanceof Date ? value.toISOString().slice(0, 10) : String(value);

const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = fm<PostAttributes>(raw);
    return {
      slug: slugFromPath(path),
      title: attributes.title,
      date: toIsoDate(attributes.date),
      excerpt: attributes.excerpt,
      coverImage: attributes.coverImage,
      body,
    };
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getAllPosts = (): BlogPost[] => posts;

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  posts.find(post => post.slug === slug);
