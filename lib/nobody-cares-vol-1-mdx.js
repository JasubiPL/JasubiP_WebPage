import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFilesNCV1 = () => fs.readdirSync(path.join(root, "posts-series/nobody-cares-vol-1"));

export const getFilesBySlugNCV1 = async ( slug ) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "posts-series/nobody-cares-vol-1",`${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return{
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadataNCV1 = () =>{
  const files = getFilesNCV1();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "posts-series/nobody-cares-vol-1", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);

    return [{...data, slug: postSlug.replace(".mdx", "")}, ...allPosts];
  }, []);
};