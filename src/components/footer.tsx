import { BsGithub, BsLinkedin, BsArrowUpRight } from "react-icons/bs";
import { HiOutlineDocumentDownload, HiOutlineLink } from "react-icons/hi";
import { Language, PROFILE_DATA } from "../data/portfolio";

interface FooterProps {
  lang: Language;
  theme: "dark" | "light";
}

export default function Footer({ lang, theme }: FooterProps) {
  const isDark = theme === "dark";

  const contactLinks = [
    {
      label: "GitHub",
      value: "@danielDEBIAN",
      href: PROFILE_DATA.githubUrl,
      icon: BsGithub,
    },
    {
      label: "LinkedIn",
      value: "Daniel Espinoza Bautista",
      href: PROFILE_DATA.linkedinUrl,
      icon: BsLinkedin,
    },
    {
      label: "Linktree",
      value: "linktr.ee/deb_daniel",
      href: PROFILE_DATA.linktreeUrl,
      icon: HiOutlineLink,
    },
    {
      label: lang === "es" ? "Currículum (CV)" : "Resume (CV)",
      value: lang === "es" ? "Ver en Google Drive" : "View on Google Drive",
      href: PROFILE_DATA.resumeUrl,
      icon: HiOutlineDocumentDownload,
    },
  ];

  return (
    <footer
      id="contact"
      className={`mx-auto max-w-5xl border-t px-6 py-16 md:py-24 ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <p
        className={`mb-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? "text-neutral-500" : "text-neutral-500"
        }`}
      >
        05 / {lang === "es" ? "Contacto" : "Contact"}
      </p>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          isDark ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {lang === "es" ? "Conectemos" : "Let's Connect"}
      </h2>
      <p
        className={`mt-2 max-w-xl text-sm ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {lang === "es"
          ? "Puedes encontrar mi código, proyectos open-source y trayectoria profesional en los siguientes enlaces."
          : "You can find my open-source repositories, projects, and professional profile through the links below."}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between border p-5 transition-colors ${
                isDark
                  ? "border-neutral-800 bg-[#0f0f0f] hover:border-neutral-600"
                  : "border-neutral-200 bg-white hover:border-neutral-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={18}
                  className={isDark ? "text-neutral-300" : "text-neutral-800"}
                />
                <BsArrowUpRight
                  size={12}
                  className={`transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                    isDark ? "text-neutral-500" : "text-neutral-400"
                  }`}
                />
              </div>

              <div className="mt-6">
                <p
                  className={`font-mono text-xs ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    isDark ? "text-neutral-200" : "text-neutral-900"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div
        className={`mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 font-mono text-xs sm:flex-row sm:items-center ${
          isDark
            ? "border-neutral-900 text-neutral-500"
            : "border-neutral-200 text-neutral-500"
        }`}
      >
        <p>
          © {new Date().getFullYear()} {PROFILE_DATA.fullName} (@
          {PROFILE_DATA.handle})
        </p>
        <p>
          {lang === "es"
            ? "Construido con Next.js, TypeScript & Tailwind CSS · Sin gradientes"
            : "Built with Next.js, TypeScript & Tailwind CSS · Zero gradients"}
        </p>
      </div>
    </footer>
  );
}
