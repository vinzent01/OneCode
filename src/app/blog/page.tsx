import Image from "next/image";
import pageStyles from "../css/page.module.css";
import buttonStyles from "../css/button.module.css";
import footerStyles from "../css/footer.module.css";
import { getAllPosts } from "@/utils/getPosts";

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
                  <Image
                    className={pageStyles.postImage}
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={320}
                  />
                )}
                <h3>{post.title}</h3>
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
