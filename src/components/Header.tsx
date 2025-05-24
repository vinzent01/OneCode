"use client"

import headerStyles from "../app/css/header.module.css";
import navbarStyles from "../app/css/navbar.module.css";
import Link from "next/link";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Detecta tema inicial
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
      style={{
        marginLeft: 16,
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#60aaff",
        fontSize: 22,
        padding: 4,
        borderRadius: 6,
        transition: "background 0.2s"
      }}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerContent}>
        <Logo />

        {/* Botão hambúrguer para mobile */}
        <button
          className={navbarStyles.menuButton}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Navbar desktop */}
        <nav className={navbarStyles.navbar}>
          <Link
            href="/"
            className={navbarStyles.navlink}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className={navbarStyles.navlink}
            aria-current={pathname === "/sobre" ? "page" : undefined}
          >
            Sobre
          </Link>
          <Link
            href="/blog"
            className={navbarStyles.navlink}
            aria-current={pathname === "/blog" ? "page" : undefined}
          >
            Blog
          </Link>
        </nav>
        <ThemeToggle />

      </div>
      {/* Navbar mobile */}
      {menuOpen && (
        <nav className={navbarStyles.mobileMenu}>
          <Link
            href="/"
            className={navbarStyles.navlink}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className={navbarStyles.navlink}
            aria-current={pathname === "/sobre" ? "page" : undefined}
          >
            Sobre
          </Link>
          <Link
            href="/blog"
            className={navbarStyles.navlink}
            aria-current={pathname === "/blog" ? "page" : undefined}
          >
            Blog
          </Link>
        </nav>
      )}
    </div>
  );
}