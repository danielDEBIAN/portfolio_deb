import Image from "next/image";
import aboutImg from "../img/about_img.jpg";
import { Language, PROFILE_DATA } from "../data/portfolio";

interface AboutProps {
  lang: Language;
  theme: "dark" | "light";
}

export default function About({ lang, theme }: AboutProps) {
  const isDark = theme === "dark";

  const quickFacts = [
    {
      label: lang === "es" ? "Rol actual" : "Current Role",
      value: "Software Engineer @ Ellucian",
    },
    {
      label: lang === "es" ? "Educación" : "Education",
      value: "ESCOM — IPN",
    },
    {
      label: lang === "es" ? "Ubicación" : "Location",
      value: lang === "es" ? "México" : "Mexico",
    },
    {
      label: lang === "es" ? "Sistema favorito" : "Preferred OS",
      value: "GNU/Linux (Debian)",
    },
  ];

  return (
    <section
      id="about"
      className={`mx-auto max-w-5xl border-t px-6 py-16 md:py-24 ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <p
        className={`mb-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? "text-neutral-500" : "text-neutral-500"
        }`}
      >
        02 / {lang === "es" ? "Sobre mí" : "About Me"}
      </p>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          isDark ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {PROFILE_DATA.fullName}
      </h2>

      <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
        {/* Biography Text */}
        <div className="space-y-4 md:col-span-8">
          {PROFILE_DATA.aboutParagraphs[lang].map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className={`border p-3.5 ${
                  isDark
                    ? "border-neutral-800 bg-[#0f0f0f]"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {fact.label}
                </p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    isDark ? "text-neutral-200" : "text-neutral-900"
                  }`}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait Photo */}
        <div className="md:col-span-4">
          <div
            className={`border p-2 ${
              isDark
                ? "border-neutral-800 bg-[#0f0f0f]"
                : "border-neutral-200 bg-white"
            }`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={aboutImg}
                alt={PROFILE_DATA.fullName}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
            <div
              className={`mt-2 flex items-center justify-between px-1 font-mono text-[11px] ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              <span>@{PROFILE_DATA.handle}</span>
              <span>MX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
