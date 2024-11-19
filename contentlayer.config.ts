import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { categories } from "./config/posts";

const categoryOpts = categories.map((category) => category.slug);

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "enum", required: true, options: categoryOpts },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export const Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: `categories/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    slug: { type: "enum", required: true, options: categoryOpts },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (category) => `/posts/${category.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Category],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
