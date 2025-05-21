import { notFound } from "next/navigation";
import { getPost } from "@/utils/getPosts";
import styles from "../../css/page.module.css";
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className={styles.page}>
      <article className={styles.featured}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>{post.title}</h1>
        <span style={{ color: "#888", fontSize: "1rem", marginBottom: 18, display: "block" }}>{post.date}</span>
        {post.image && (
          <Image
            className={styles.postImage}
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            style={{ marginBottom: 24 }}
          />
        )}
        <div style={{ color: "var(--foreground)", fontSize: "1.15rem", lineHeight: 1.7 }}>
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
