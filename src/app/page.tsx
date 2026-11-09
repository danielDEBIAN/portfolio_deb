"use client";

import Header from "../components/header";
import Hello from "../components/hello";
import Projects from "../components/projects";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Footer from "../components/footer";
import { usePreferences } from "../hooks/usePreferences";

export default function PortfolioPage() {
  const { lang, setLang, theme, toggleTheme } = usePreferences();

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
