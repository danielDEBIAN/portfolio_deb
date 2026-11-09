import { EDUCATION_DATA, EXPERIENCE_DATA, Language } from "../data/portfolio";

interface ExperienceProps {
  lang: Language;
  theme: "dark" | "light";
}

export default function Experience({ lang, theme }: ExperienceProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`mx-auto max-w-5xl border-t px-6 py-16 md:py-24 ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <p
        className={`mb-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? "text-neutral-500" : "text-neutral-500"
        }`}
      >
        02 / {lang === "es" ? "Trayectoria" : "Background"}
      </p>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          isDark ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {lang === "es" ? "Experiencia y Educación" : "Experience & Education"}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Work Experience Column */}
        <div>
          <h3
            className={`mb-4 font-mono text-xs uppercase tracking-wider ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {lang === "es" ? "Experiencia Profesional" : "Professional Experience"}
          </h3>

          <div className="space-y-4">
            {EXPERIENCE_DATA.map((item) => (
              <div
                key={item.organization}
                className={`border p-6 ${
                  isDark
                    ? "border-neutral-800 bg-[#0f0f0f]"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4
                    className={`text-base font-semibold ${
                      isDark ? "text-neutral-100" : "text-neutral-900"
                    }`}
                  >
                    {item.role[lang]}
                  </h4>
                  <span
                    className={`border px-2 py-0.5 font-mono text-xs ${
                      isDark
                        ? "border-neutral-800 text-neutral-400"
                        : "border-neutral-200 text-neutral-600"
                    }`}
                  >
                    {item.period[lang]}
                  </span>
                </div>

                <p
                  className={`mt-1 font-mono text-xs ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {item.organization} · {item.location[lang]}
                </p>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {item.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border px-2 py-0.5 font-mono text-[11px] ${
                        isDark
                          ? "border-neutral-800 bg-neutral-950 text-neutral-400"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3
            className={`mb-4 font-mono text-xs uppercase tracking-wider ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {lang === "es" ? "Educación" : "Education"}
          </h3>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.institution}
                className={`border p-6 ${
                  isDark
                    ? "border-neutral-800 bg-[#0f0f0f]"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4
                    className={`text-base font-semibold ${
                      isDark ? "text-neutral-100" : "text-neutral-900"
                    }`}
                  >
                    {edu.degree[lang]}
                  </h4>
                  <span
                    className={`border px-2 py-0.5 font-mono text-xs ${
                      isDark
                        ? "border-neutral-800 text-neutral-400"
                        : "border-neutral-200 text-neutral-600"
                    }`}
                  >
                    {edu.period[lang]}
                  </span>
                </div>

                <p
                  className={`mt-1 font-mono text-xs ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {edu.institution}
                </p>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {edu.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border px-2 py-0.5 font-mono text-[11px] ${
                        isDark
                          ? "border-neutral-800 bg-neutral-950 text-neutral-400"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
