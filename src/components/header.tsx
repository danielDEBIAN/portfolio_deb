"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsGithub, BsSun, BsMoon } from "react-icons/bs";
import { Language, PROFILE_DATA } from "../data/portfolio";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Header({ lang, setLang, theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      href: "#about",
      label: lang === "es" ? "Sobre mí" : "About",
    },
    {
      href: "#projects",
      label: lang === "es" ? "Proyectos" : "Projects",
    },
    {
      href: "#experience",
      label: lang === "es" ? "Trayectoria" : "Experience",
    },
    {
      href: "#skills",
      label: lang === "es" ? "Tecnologías" : "Skills",
    },
    {
      href: "#contact",
      label: lang === "es" ? "Contacto" : "Contact",
    },
  ];

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-150 ${
        isDark
          ? "border-neutral-800 bg-[#0a0a0a]"
          : "border-neutral-200 bg-[#fafafa]"
      }`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
        >
          <span
            className={`inline-flex h-6 w-6 items-center justify-center border text-xs font-bold ${
              isDark
                ? "border-neutral-700 bg-neutral-900 text-neutral-100"
                : "border-neutral-300 bg-neutral-100 text-neutral-900"
            }`}
          >
            DEB
          </span>
          <span className={isDark ? "text-neutral-100" : "text-neutral-900"}>
            {PROFILE_DATA.handle}
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                isDark
                  ? "text-neutral-400 hover:text-neutral-100"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            href={PROFILE_DATA.cvPath}
            className={`border px-2.5 py-0.5 font-mono text-xs font-medium transition-colors ${
              isDark
                ? "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:text-white"
                : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500 hover:text-black"
            }`}
          >
            CV / PDF
          </Link>
        </div>

        {/* Actions: Language, Theme, GitHub */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Toggle language"
            className={`border px-2.5 py-1 font-mono text-xs uppercase transition-colors ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
            }`}
          >
            {lang === "es" ? "ES / EN" : "EN / ES"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-7 w-7 items-center justify-center border transition-colors ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
            }`}
          >
            {isDark ? <BsSun size={13} /> : <BsMoon size={13} />}
          </button>

          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={`flex h-7 w-7 items-center justify-center border transition-colors ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
            }`}
          >
            <BsGithub size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={PROFILE_DATA.cvPath}
            className={`border px-2 py-1 font-mono text-xs ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-200"
                : "border-neutral-300 bg-white text-neutral-800"
            }`}
          >
            CV
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className={`border px-2 py-1 font-mono text-xs uppercase ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                : "border-neutral-300 bg-white text-neutral-700"
            }`}
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-7 w-7 items-center justify-center border ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                : "border-neutral-300 bg-white text-neutral-700"
            }`}
          >
            {isDark ? <BsSun size={13} /> : <BsMoon size={13} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`flex h-7 w-7 items-center justify-center border ${
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-200"
                : "border-neutral-300 bg-white text-neutral-800"
            }`}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-4 w-4" />
            ) : (
              <Bars3Icon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          className={`border-t px-6 py-4 md:hidden ${
            isDark
              ? "border-neutral-800 bg-[#0a0a0a]"
              : "border-neutral-200 bg-[#fafafa]"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 text-sm font-medium ${
                  isDark
                    ? "text-neutral-300 hover:text-white"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={PROFILE_DATA.cvPath}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 font-mono text-sm font-semibold ${
                isDark
                  ? "text-neutral-100 hover:text-white"
                  : "text-neutral-900 hover:text-black"
              }`}
            >
              {lang === "es" ? "Ver / Descargar CV (PDF)" : "View / Download CV (PDF)"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
