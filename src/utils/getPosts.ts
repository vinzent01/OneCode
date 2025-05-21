import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type PostPreview = {
  slug: string;
  title: string;
  date: string;
  preview: string;
  image?: string; // novo campo
};

export async function getAllPosts(): Promise<PostPreview[]> {
  const contentDir = path.join(process.cwd(), "content/posts");
  const files = await fs.readdir(contentDir);

  const posts: PostPreview[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    posts.push({
      slug: file.replace(/\.md$/, ""),
      title: data.title || file.replace(/\.md$/, ""),
      date: data.date || "",
      preview: content.split("\n").slice(0, 3).join(" "),
      image: data.image || "", // pega o campo image do frontmatter
    });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}