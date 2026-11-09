"use client";

import { useEffect, useState } from "react";
import { BsGithub, BsStar, BsArrowUpRight, BsBoxSeam } from "react-icons/bs";
import { VscRepo, VscRepoForked } from "react-icons/vsc";
import { Language, PINNED_REPOS, PROFILE_DATA } from "../data/portfolio";

interface ProjectsProps {
  lang: Language;
  theme: "dark" | "light";
}

type FilterCategory = "all" | "desktop" | "ai-python" | "web";

interface LiveRepoStats {
  stars: number;
  forks: number;
}

const ALLOWED_REPO_NAMES = new Set(PINNED_REPOS.map((r) => r.name));

export default function Projects({ lang, theme }: ProjectsProps) {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [liveStats, setLiveStats] = useState<Record<string, LiveRepoStats>>({});
  const isDark = theme === "dark";

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    fetch(
      `https://api.github.com/users/${encodeURIComponent(PROFILE_DATA.handle)}/repos?per_page=100`,
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
        },
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: controller.signal,
      }
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data: unknown) => {
        if (!Array.isArray(data)) return;
        const map: Record<string, LiveRepoStats> = Object.create(null);
        for (const item of data) {
          if (
            item &&
            typeof item === "object" &&
            "name" in item &&
            typeof item.name === "string" &&
            ALLOWED_REPO_NAMES.has(item.name)
          ) {
            const rawStars = (item as { stargazers_count?: unknown }).stargazers_count;
            const rawForks = (item as { forks_count?: unknown }).forks_count;
            const stars =
              typeof rawStars === "number" && Number.isSafeInteger(rawStars) && rawStars >= 0
                ? rawStars
                : 0;
            const forks =
              typeof rawForks === "number" && Number.isSafeInteger(rawForks) && rawForks >= 0
                ? rawForks
                : 0;
            map[item.name] = { stars, forks };
          }
        }
        setLiveStats(map);
      })
      .catch(() => {
        // Fallback silently to static pinned data
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
      });

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const categories: { id: FilterCategory; label: { es: string; en: string } }[] = [
    {
      id: "all",
      label: { es: `Todos (${PINNED_REPOS.length})`, en: `All (${PINNED_REPOS.length})` },
    },
    {
      id: "desktop",
      label: { es: "Desktop & RCON", en: "Desktop & RCON" },
    },
    {
      id: "ai-python",
      label: { es: "IA & Python", en: "AI & Python" },
    },
    {
      id: "web",
      label: { es: "Web", en: "Web" },
    },
  ];

  const filteredRepos =
    filter === "all"
      ? PINNED_REPOS
      : PINNED_REPOS.filter((repo) => repo.category === filter);

  return (
    <section
      id="projects"
      className={`mx-auto max-w-5xl border-t px-6 py-16 md:py-24 ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p
            className={`mb-2 font-mono text-xs uppercase tracking-widest ${
              isDark ? "text-neutral-500" : "text-neutral-500"
            }`}
          >
            04 / {lang === "es" ? "Repositorios Pineados" : "Pinned Repositories"}
          </p>
          <h2
            className={`text-2xl font-bold tracking-tight sm:text-3xl ${
              isDark ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            {lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
          </h2>
          <p
            className={`mt-2 max-w-xl text-sm ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {lang === "es"
              ? "Selección de repositorios fijados en mi perfil de GitHub (@danielDEBIAN): desde estudios de escritorio con RCON hasta pipelines de IA local y herramientas criptográficas."
              : "Pinned repositories from my GitHub profile (@danielDEBIAN): ranging from RCON desktop studios to local AI video pipelines and cryptographic tools."}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const active = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`border px-3 py-1.5 font-mono text-xs transition-colors ${
                  active
                    ? isDark
                      ? "border-neutral-100 bg-neutral-100 text-neutral-950"
                      : "border-neutral-900 bg-neutral-900 text-neutral-50"
                    : isDark
                    ? "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                    : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Repository Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredRepos.map((repo) => {
          const stars = liveStats[repo.name]?.stars ?? repo.stars;
          const forks = liveStats[repo.name]?.forks ?? 0;

          return (
            <article
              key={repo.name}
              className={`flex flex-col justify-between border p-6 transition-colors ${
                isDark
                  ? "border-neutral-800 bg-[#0f0f0f] hover:border-neutral-600"
                  : "border-neutral-200 bg-white hover:border-neutral-400"
              }`}
            >
              <div>
                {/* Top Meta Row: Repo slug + Public badge + Language */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <VscRepo
                      size={15}
                      className={isDark ? "text-neutral-400" : "text-neutral-600"}
                    />
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold underline-offset-4 hover:underline ${
                        isDark ? "text-neutral-200" : "text-neutral-900"
                      }`}
                    >
                      {repo.name}
                    </a>
                    <span
                      className={`border px-1.5 py-0.5 text-[10px] uppercase ${
                        isDark
                          ? "border-neutral-800 text-neutral-500"
                          : "border-neutral-200 text-neutral-500"
                      }`}
                    >
                      Public
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span
                      className={`inline-flex items-center gap-1.5 ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      {repo.language}
                    </span>

                    {stars > 0 && (
                      <span
                        className={`inline-flex items-center gap-1 ${
                          isDark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                      >
                        <BsStar size={11} />
                        {stars}
                      </span>
                    )}

                    {forks > 0 && (
                      <span
                        className={`inline-flex items-center gap-1 ${
                          isDark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                      >
                        <VscRepoForked size={12} />
                        {forks}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  className={`mt-4 text-lg font-semibold leading-snug ${
                    isDark ? "text-neutral-100" : "text-neutral-900"
                  }`}
                >
                  {repo.title[lang]}
                </h3>

                {/* Description */}
                <p
                  className={`mt-2.5 text-sm leading-relaxed ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {repo.description[lang]}
                </p>

                {/* Highlights */}
                <ul
                  className={`mt-4 space-y-1.5 border-t pt-4 text-xs leading-relaxed ${
                    isDark
                      ? "border-neutral-800/80 text-neutral-400"
                      : "border-neutral-100 text-neutral-600"
                  }`}
                >
                  {repo.highlights[lang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 ${
                          isDark ? "bg-neutral-500" : "bg-neutral-400"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section: Tech Stack Tags + Action Links */}
              <div className="mt-6 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`border px-2 py-0.5 font-mono text-[11px] ${
                        isDark
                          ? "border-neutral-800 bg-neutral-950 text-neutral-400"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-5 flex items-center justify-between border-t pt-4 font-mono text-xs ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                      isDark
                        ? "text-neutral-200 hover:text-white"
                        : "text-neutral-800 hover:text-black"
                    }`}
                  >
                    <BsGithub size={13} />
                    <span>
                      {lang === "es" ? "Ver repositorio" : "View repository"}
                    </span>
                    <BsArrowUpRight size={11} />
                  </a>

                  {repo.releaseUrl && (
                    <a
                      href={repo.releaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 transition-colors ${
                        isDark
                          ? "text-neutral-400 hover:text-neutral-100"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      <BsBoxSeam size={12} />
                      <span>Releases</span>
                      <BsArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Link to all 28+ public repos on GitHub */}
      <div className="mt-8 flex justify-start">
        <a
          href={`${PROFILE_DATA.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-colors ${
            isDark
              ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:text-black"
          }`}
        >
          <BsGithub size={14} />
          <span>
            {lang === "es"
              ? "Explorar los 28+ repositorios públicos en GitHub"
              : "Explore all 28+ public repositories on GitHub"}
          </span>
          <BsArrowUpRight size={11} />
        </a>
      </div>
    </section>
  );
}
