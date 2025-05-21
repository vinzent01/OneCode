import { Logo } from "@/components/Logo";
import pageStyles from "../css/page.module.css";
import buttonStyles from "../css/button.module.css";
import footerStyles from "../css/footer.module.css";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <section className={pageStyles.featured}>
          <h2>Nossa missão</h2>
          <p>
            Ajudar pessoas a aprenderem programação de forma simples, prática e acessível, com conteúdos de qualidade, dicas, tutoriais e novidades do universo dev.
          </p>
          <h2>Quem faz o OneCode?</h2>
          <p>
            O blog é mantido por entusiastas e profissionais de tecnologia apaixonados por ensinar e aprender.
          </p>
          <Link href="/blog" className={buttonStyles.button}>
            Ver posts do blog →
          </Link>
        </section>
      </main>
    </div>
  );
}