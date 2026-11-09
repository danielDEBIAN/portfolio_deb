"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import Hello from "../components/hello";
import Projects from "../components/projects";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Footer from "../components/footer";
import { Language } from "../data/portfolio";

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-150 ${
        theme === "dark"
          ? "bg-[#0a0a0a] text-[#ededed]"
          : "bg-[#fafafa] text-[#171717]"
      }`}
    >
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hello lang={lang} theme={theme} />
        <About lang={lang} theme={theme} />
        <Experience lang={lang} theme={theme} />
        <Skills lang={lang} theme={theme} />
        <Projects lang={lang} theme={theme} />
      </main>
      <Footer lang={lang} theme={theme} />
    </div>
  );
}
