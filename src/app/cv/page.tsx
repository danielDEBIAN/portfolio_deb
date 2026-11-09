"use client";

import Link from "next/link";
import { BsArrowLeft, BsSun, BsMoon, BsPrinter } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import {
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PINNED_REPOS,
  PROFILE_DATA,
  SKILLS_CATEGORIES,
  SPOKEN_LANGUAGES_DATA,
} from "../../data/portfolio";
import { usePreferences } from "../../hooks/usePreferences";

export default function CVPage() {
  const { lang, setLang, theme, toggleTheme } = usePreferences();

  const isDark = theme === "dark";

  const handleDownloadPdf = () => {
    window.print();
  };

  // Top 4 featured pinned repos for the 1-page CV
  const cvProjects = PINNED_REPOS.slice(0, 4);

  return (
    <div
      className={`min-h-screen pb-16 transition-colors duration-150 print:min-h-0 print:bg-white print:pb-0 print:text-black ${
        isDark
          ? "bg-[#0a0a0a] text-[#ededed]"
          : "bg-[#fafafa] text-[#171717]"
      }`}
    >
      {/* Top Action Bar (Hidden when exporting/printing PDF) */}
      <header
        className={`sticky top-0 z-40 border-b print:hidden ${
          isDark
            ? "border-neutral-800 bg-[#0a0a0a]"
            : "border-neutral-200 bg-[#fafafa]"
        }`}
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-3.5">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 font-mono text-xs transition-colors ${
              isDark
                ? "text-neutral-300 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            <BsArrowLeft size={14} />
            <span>
              {lang === "es" ? "Volver al portafolio" : "Back to portfolio"}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Toggle language"
              className={`border px-2.5 py-1.5 font-mono text-xs uppercase transition-colors ${
                isDark
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
              }`}
            >
              {lang === "es" ? "Idioma: ES" : "Lang: EN"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                isDark
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
              }`}
            >
              {isDark ? <BsSun size={13} /> : <BsMoon size={13} />}
            </button>

            <button
              type="button"
              onClick={handleDownloadPdf}
              className={`inline-flex items-center gap-2 border px-4 py-1.5 font-mono text-xs font-semibold transition-colors ${
                isDark
                  ? "border-neutral-100 bg-neutral-100 text-neutral-950 hover:bg-white"
                  : "border-neutral-900 bg-neutral-900 text-neutral-50 hover:bg-black"
              }`}
            >
              <HiOutlineDownload size={15} />
              <span>
                {lang === "es"
                  ? "Descargar PDF (1 Página)"
                  : "Download PDF (1-Page)"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* One-Page Resume Sheet */}
      <main className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 print:mt-0 print:max-w-none print:px-0">
        <article
          className={`cv-print-sheet border p-6 sm:p-10 print:border-0 print:p-0 ${
            isDark
              ? "border-neutral-800 bg-[#0f0f0f] text-neutral-100"
              : "border-neutral-300 bg-white text-neutral-900"
          }`}
        >
          {/* CV Header: Name, Role, Contact Details */}
          <div
            className={`border-b pb-4 print:border-neutral-300 print:pb-3 ${
              isDark ? "border-neutral-800" : "border-neutral-200"
            }`}
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl print:text-2xl print:text-black">
                  {PROFILE_DATA.fullName}
                </h1>
                <p
                  className={`mt-0.5 font-mono text-xs sm:text-sm print:text-xs print:text-neutral-700 ${
                    isDark ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  {PROFILE_DATA.role[lang]}
                </p>
              </div>

              <p
                className={`font-mono text-xs print:text-[11px] print:text-neutral-700 ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {PROFILE_DATA.location[lang]}
              </p>
            </div>

            {/* Contact Links Line */}
            <div
              className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] print:mt-2 print:text-[10.5px] print:text-neutral-800 ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="hover:underline"
              >
                {PROFILE_DATA.email}
              </a>
              <span>·</span>
              <span>{PROFILE_DATA.phone}</span>
              <span>·</span>
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/danielDEBIAN
              </a>
              <span>·</span>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/daniel-espinoza-bautista-4939bb218
              </a>
              <span>·</span>
              <a
                href={PROFILE_DATA.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linktr.ee/deb_daniel
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mt-4 print:mt-3">
            <h2
              className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                isDark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              {lang === "es" ? "Resumen Profesional" : "Professional Summary"}
            </h2>
            <p
              className={`mt-1.5 text-xs leading-relaxed print:mt-1 print:text-[11px] print:leading-snug print:text-neutral-800 ${
                isDark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {PROFILE_DATA.cvSummary[lang]}
            </p>
          </section>

          {/* Main 2-Column Body for 1-Page Density */}
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-12 print:mt-3.5 print:grid-cols-12 print:gap-5">
            {/* Left Column (7 cols): Experience & Featured Projects */}
            <div className="space-y-5 md:col-span-7 print:col-span-7 print:space-y-3.5">
              {/* Experience */}
              <section>
                <div className="flex items-baseline justify-between">
                  <h2
                    className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                      isDark ? "text-neutral-300" : "text-neutral-800"
                    }`}
                  >
                    {lang === "es"
                      ? "Experiencia Profesional"
                      : "Work Experience"}
                  </h2>
                  <span
                    className={`font-mono text-[10px] print:text-neutral-600 ${
                      isDark ? "text-neutral-500" : "text-neutral-500"
                    }`}
                  >
                    {PROFILE_DATA.totalExperience[lang]}
                  </span>
                </div>

                <div
                  className={`mt-2 space-y-3 border-t pt-2.5 print:mt-1.5 print:space-y-2.5 print:border-neutral-300 print:pt-2 ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  {EXPERIENCE_DATA.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-xs font-semibold print:text-[11.5px] print:text-black">
                          {exp.role[lang]} ·{" "}
                          <span className="font-normal">{exp.organization}</span>
                        </h3>
                        <span
                          className={`font-mono text-[10.5px] print:text-[10px] print:text-neutral-700 ${
                            isDark ? "text-neutral-400" : "text-neutral-600"
                          }`}
                        >
                          {exp.period[lang]}
                        </span>
                      </div>
                      <p
                        className={`font-mono text-[10px] print:text-neutral-600 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        {exp.location[lang]}
                      </p>
                      <p
                        className={`mt-1 text-xs leading-snug print:text-[10.5px] print:text-neutral-800 ${
                          isDark ? "text-neutral-300" : "text-neutral-700"
                        }`}
                      >
                        {exp.description[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured Technical Projects */}
              <section>
                <h2
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                    isDark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  {lang === "es"
                    ? "Proyectos Destacados (GitHub)"
                    : "Selected Projects (GitHub)"}
                </h2>

                <div
                  className={`mt-2 space-y-2.5 border-t pt-2.5 print:mt-1.5 print:space-y-2 print:border-neutral-300 print:pt-2 ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  {cvProjects.map((proj) => (
                    <div key={proj.name}>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-xs font-semibold print:text-[11px] print:text-black">
                          {proj.title[lang]}
                        </h3>
                        <span
                          className={`font-mono text-[10px] print:text-neutral-600 ${
                            isDark ? "text-neutral-400" : "text-neutral-600"
                          }`}
                        >
                          {proj.topics.slice(0, 4).join(" · ")}
                        </span>
                      </div>
                      <p
                        className={`mt-0.5 text-xs leading-snug print:text-[10.5px] print:text-neutral-800 ${
                          isDark ? "text-neutral-400" : "text-neutral-700"
                        }`}
                      >
                        {proj.description[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column (5 cols): Education, Skills, Certifications, Languages */}
            <div className="space-y-5 md:col-span-5 print:col-span-5 print:space-y-3.5">
              {/* Education */}
              <section>
                <h2
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                    isDark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  {lang === "es" ? "Educación" : "Education"}
                </h2>

                <div
                  className={`mt-2 space-y-3 border-t pt-2.5 print:mt-1.5 print:space-y-2 print:border-neutral-300 print:pt-2 ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs font-semibold print:text-[11px] print:text-black">
                        {edu.degree[lang]}
                      </h3>
                      <p
                        className={`text-[11px] print:text-[10.5px] print:text-neutral-800 ${
                          isDark ? "text-neutral-300" : "text-neutral-700"
                        }`}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className={`font-mono text-[10px] print:text-neutral-600 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        {edu.period[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h2
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                    isDark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  {lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}
                </h2>

                <div
                  className={`mt-2 space-y-2 border-t pt-2.5 print:mt-1.5 print:space-y-1.5 print:border-neutral-300 print:pt-2 ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  {SKILLS_CATEGORIES.map((cat) => (
                    <div key={cat.title.en}>
                      <p
                        className={`font-mono text-[10px] font-semibold uppercase print:text-black ${
                          isDark ? "text-neutral-400" : "text-neutral-700"
                        }`}
                      >
                        {cat.title[lang]}
                      </p>
                      <p
                        className={`text-xs leading-snug print:text-[10.5px] print:text-neutral-800 ${
                          isDark ? "text-neutral-300" : "text-neutral-700"
                        }`}
                      >
                        {cat.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                    isDark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  {lang === "es" ? "Certificaciones" : "Certifications"}
                </h2>

                <ul
                  className={`mt-2 space-y-1 border-t pt-2 text-xs print:mt-1 print:border-neutral-300 print:pt-1.5 print:text-[10.5px] print:text-neutral-800 ${
                    isDark
                      ? "border-neutral-800 text-neutral-300"
                      : "border-neutral-200 text-neutral-700"
                  }`}
                >
                  {CERTIFICATIONS_DATA.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-baseline justify-between gap-2"
                    >
                      <span className="font-medium print:text-black">
                        {cert.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] print:text-neutral-600 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        {cert.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Spoken Languages */}
              <section>
                <h2
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider print:text-black ${
                    isDark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  {lang === "es" ? "Idiomas" : "Languages"}
                </h2>

                <ul
                  className={`mt-2 space-y-1 border-t pt-2 text-xs print:mt-1 print:border-neutral-300 print:pt-1.5 print:text-[10.5px] print:text-neutral-800 ${
                    isDark
                      ? "border-neutral-800 text-neutral-300"
                      : "border-neutral-200 text-neutral-700"
                  }`}
                >
                  {SPOKEN_LANGUAGES_DATA.map((item) => (
                    <li
                      key={item.language.en}
                      className="flex items-baseline justify-between gap-2"
                    >
                      <span className="font-medium print:text-black">
                        {item.language[lang]}
                      </span>
                      <span
                        className={`font-mono text-[10px] print:text-neutral-600 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        {item.level[lang]}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </article>

        {/* Bottom Print Helper Tip (Hidden on print) */}
        <div
          className={`mt-4 flex items-center justify-between font-mono text-xs print:hidden ${
            isDark ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <BsPrinter size={12} />
            {lang === "es"
              ? "Formato calibrado a 1 sola página (Tamaño Carta / A4). En el diálogo de impresión selecciona 'Guardar como PDF'."
              : "Formatted strictly to 1 single page (Letter / A4). Select 'Save as PDF' in the print dialog."}
          </span>
        </div>
      </main>
    </div>
  );
}
