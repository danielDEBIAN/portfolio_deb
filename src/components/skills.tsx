import {
  CERTIFICATIONS_DATA,
  Language,
  SKILLS_CATEGORIES,
  SPOKEN_LANGUAGES_DATA,
} from "../data/portfolio";

interface SkillsProps {
  lang: Language;
  theme: "dark" | "light";
}

export default function Skills({ lang, theme }: SkillsProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`mx-auto max-w-5xl border-t px-6 py-16 md:py-24 ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <p
        className={`mb-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? "text-neutral-500" : "text-neutral-500"
        }`}
      >
        04 / {lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}
      </p>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          isDark ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {lang === "es"
          ? "Stack Tecnológico, Certificaciones e Idiomas"
          : "Tech Stack, Certifications & Languages"}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SKILLS_CATEGORIES.map((category) => (
          <div
            key={category.title.en}
            className={`border p-6 ${
              isDark
                ? "border-neutral-800 bg-[#0f0f0f]"
                : "border-neutral-200 bg-white"
            }`}
          >
            <h3
              className={`font-mono text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              {category.title[lang]}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className={`border px-2.5 py-1 font-mono text-xs ${
                    isDark
                      ? "border-neutral-800 bg-neutral-950 text-neutral-300"
                      : "border-neutral-200 bg-neutral-50 text-neutral-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Spoken Languages Row */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div
          className={`border p-6 ${
            isDark
              ? "border-neutral-800 bg-[#0f0f0f]"
              : "border-neutral-200 bg-white"
          }`}
        >
          <h3
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isDark ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            {lang === "es" ? "Certificaciones" : "Certifications"}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {CERTIFICATIONS_DATA.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span
                  className={`font-medium ${
                    isDark ? "text-neutral-200" : "text-neutral-900"
                  }`}
                >
                  {cert.name}
                </span>
                <span
                  className={`font-mono text-xs ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`border p-6 ${
            isDark
              ? "border-neutral-800 bg-[#0f0f0f]"
              : "border-neutral-200 bg-white"
          }`}
        >
          <h3
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isDark ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            {lang === "es" ? "Idiomas" : "Languages"}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {SPOKEN_LANGUAGES_DATA.map((item) => (
              <li
                key={item.language.en}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span
                  className={`font-medium ${
                    isDark ? "text-neutral-200" : "text-neutral-900"
                  }`}
                >
                  {item.language[lang]}
                </span>
                <span
                  className={`font-mono text-xs ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {item.level[lang]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
