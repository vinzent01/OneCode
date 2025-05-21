import { Logo } from "@/components/Logo";
import pageStyles from "./css/page.module.css";
import headerStyles from "./css/header.module.css";
import buttonStyles from "./css/button.module.css";
import footerStyles from "./css/footer.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <section className={pageStyles.featured}>
          <h1 className={headerStyles.logoText + " center"}>OneCode</h1>
          <p className={headerStyles.subtitle + " center"}>
            Bem-vindo ao OneCode! Aqui você encontra dicas, tutoriais e novidades do
            mundo da programação.
          </p>
          <Link href="/blog" className={buttonStyles.bigButton + " center"}>
            Acessar o blog
          </Link>
        </section>
      </main>
    </div>
  );
}
