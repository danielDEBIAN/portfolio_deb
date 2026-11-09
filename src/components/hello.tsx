import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
  BsSpotify,
  BsInstagram,
  BsTiktok,
  BsYoutube,
  BsArrowUpRight,
} from "react-icons/bs";
import { HiOutlineDocumentText, HiOutlineLink } from "react-icons/hi";
import { Language, PROFILE_DATA } from "../data/portfolio";

interface HelloProps {
  lang: Language;
  theme: "dark" | "light";
}

export default function Hello({ lang, theme }: HelloProps) {
  const isDark = theme === "dark";

  return (
    /* 
      ESPACIADO INFERIOR DE ESTA SECCIÓN:
      Modifica `pb-6` (móvil) y `md:pb-8` (escritorio) en la siguiente línea 
      para aumentar o reducir el espacio debajo de la barra de enlaces.
    */
    <section className="mx-auto max-w-5xl px-6 pb-6 pt-16 md:pb-8 md:pt-24">
      {/* Status Row */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center gap-2 border px-3 py-1 font-mono text-xs ${
            isDark
              ? "border-neutral-800 bg-neutral-900 text-neutral-300"
              : "border-neutral-300 bg-white text-neutral-700"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {PROFILE_DATA.role[lang]}
        </span>
      </div>

      {/* Main Name & Headline */}
      <div className="max-w-3xl">
        <p
          className={`mb-2 font-mono text-sm ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {PROFILE_DATA.name} (@{PROFILE_DATA.handle})
        </p>

        <h1
          className={`text-3xl font-bold tracking-tight sm:text-5xl sm:leading-[1.15] ${
            isDark ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          {PROFILE_DATA.heroHeadline[lang]}
        </h1>

        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {PROFILE_DATA.heroSubheadline[lang]}
        </p>
      </div>

      {/* Primary Action Buttons (Strictly Flat — Zero Gradients) */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className={`inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors ${
            isDark
              ? "border-neutral-100 bg-neutral-100 text-neutral-950 hover:bg-white"
              : "border-neutral-900 bg-neutral-900 text-neutral-50 hover:bg-black"
          }`}
        >
          <span>
            {lang === "es"
              ? "Ver repositorios pineados"
              : "View pinned repositories"}
          </span>
          <BsArrowUpRight size={13} />
        </a>

        <Link
          href={PROFILE_DATA.cvPath}
          className={`inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors ${
            isDark
              ? "border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-neutral-600 hover:text-white"
              : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500 hover:text-black"
          }`}
        >
          <HiOutlineDocumentText size={16} />
          <span>
            {lang === "es"
              ? "Ver / Descargar CV (PDF)"
              : "View / Download CV (PDF)"}
          </span>
        </Link>
      </div>

      {/* Social & Creator Links Bar */}
      <div
        className={`mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6 font-mono text-xs ${
          isDark
            ? "border-neutral-900 text-neutral-400"
            : "border-neutral-200 text-neutral-600"
        }`}
      >
        <a
          href={PROFILE_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsGithub size={15} />
          <span>GitHub</span>
        </a>

        <a
          href={PROFILE_DATA.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsLinkedin size={15} />
          <span>LinkedIn</span>
        </a>

        <a
          href={PROFILE_DATA.spotifyArtistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsSpotify size={15} />
          <span>Spotify (D.E.B.)</span>
        </a>

        <a
          href={PROFILE_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsInstagram size={15} />
          <span>Instagram</span>
        </a>

        <a
          href={PROFILE_DATA.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsTiktok size={14} />
          <span>TikTok</span>
        </a>

        <a
          href={PROFILE_DATA.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <BsYoutube size={15} />
          <span>YouTube</span>
        </a>

        <a
          href={PROFILE_DATA.linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 transition-colors ${
            isDark ? "hover:text-neutral-100" : "hover:text-neutral-950"
          }`}
        >
          <HiOutlineLink size={16} />
          <span>Linktree</span>
        </a>
      </div>
    </section>
  );
}
