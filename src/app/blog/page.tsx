import Image from "next/image";
import pageStyles from "../css/page.module.css";
import { getAllPosts } from "@/utils/getPosts";
import Link from "next/link";

export const metadata = {
  title: "OneCode - Blog",
  description: "Explore nossos posts sobre programação, dicas, tutoriais e novidades do mundo dev.",
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <section className={pageStyles.featured}>
          <h2>Posts em destaque</h2>
          <div className={pageStyles.posts}>
            {posts.map((post) => (
              <article className={pageStyles.post} key={post.slug}>
                {post.image && (
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Image
                      className={pageStyles.postImage}
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={320}
                    />
                  </Link>
                )}
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3>{post.title}</h3>
                </Link>
                <span style={{ color: "#888", fontSize: "0.95rem" }}>
                  {post.date}
                </span>
                <p>{post.preview}</p>
                <a href={`/blog/${post.slug}`}>Leia mais →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
