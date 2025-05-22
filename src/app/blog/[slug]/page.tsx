import { notFound } from "next/navigation";
import { getPost } from "@/utils/getPosts";
import styles from "../../css/page.module.css";
import Image from "next/image";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);
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
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
        </div>
      </article>
    </div>
  );
}
