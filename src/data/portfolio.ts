export type Language = "es" | "en";

export interface PinnedRepo {
  name: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  language: string;
  languageColor: string;
  stars: number;
  category: "desktop" | "ai-python" | "web";
  topics: string[];
  repoUrl: string;
  releaseUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: {
    es: string;
    en: string;
  };
  organization: string;
  period: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tags: string[];
}

export interface EducationItem {
  degree: {
    es: string;
    en: string;
  };
  institution: string;
  period: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tags: string[];
}

export const PROFILE_DATA = {
  name: "Daniel Espinoza",
  fullName: "Daniel Espinoza Bautista",
  handle: "danielDEBIAN",
  alias: "D.E.B. / Paleta Chupada",
  role: {
    es: "Software Engineer II @ Ellucian | Ing. en Sistemas Computacionales",
    en: "Software Engineer II @ Ellucian | Computer Systems Engineer",
  },
  location: {
    es: "Querétaro, México",
    en: "Querétaro, Mexico",
  },
  company: "Ellucian",
  totalExperience: {
    es: "3 años 11 meses en Ellucian",
    en: "3 years 11 months at Ellucian",
  },
  education: "ESCOM — Instituto Politécnico Nacional (IPN)",
  email: "espinoza.bautista.daniel246@gmail.com",
  phone: "+52 55 6028 5635",
  avatarUrl: "https://avatars.githubusercontent.com/u/84060085?v=4",
  githubUrl: "https://github.com/danielDEBIAN",
  linkedinUrl: "https://www.linkedin.com/in/daniel-espinoza-bautista-4939bb218/",
  linktreeUrl: "https://linktr.ee/deb_daniel",
  cvPath: "/cv",
  spotifyArtistUrl: "https://open.spotify.com/artist/6yyRisjlFkP7X3BtluPsK7",
  spotifyAlbumUrl: "https://open.spotify.com/album/7foXQbpRDBxQUAQpkoU8GC",
  tiktokUrl: "https://tiktok.com/@debaleta",
  youtubeUrl: "https://www.youtube.com/channel/UCqSthQqDbU0FNXJLLx3LeBA",
  instagramUrl: "https://instagram.com/paleta_chupada",
  heroHeadline: {
    es: "Software Engineer II construyendo aplicaciones web, herramientas de escritorio y automatización.",
    en: "Software Engineer II building web applications, desktop tools, and automation pipelines.",
  },
  heroSubheadline: {
    es: "Ingeniero en Sistemas Computacionales egresado de ESCOM (IPN) y Software Engineer II en Ellucian (Querétaro, México). Especializado en desarrollo Front-End y Back-End con React.js, TypeScript, Python, Java, pruebas automatizadas (Selenium, NeoLoad), Cloud y entornos Linux.",
    en: "Computer Systems Engineer graduated from ESCOM (IPN) and Software Engineer II at Ellucian (Querétaro, Mexico). Specialized in Front-End and Back-End development with React.js, TypeScript, Python, Java, automated testing (Selenium, NeoLoad), Cloud, and Linux environments.",
  },
  cvSummary: {
    es: "Como Software Engineer II en Ellucian, contribuyo al diseño y desarrollo de páginas y componentes internos con enfoque tanto en tecnologías Front-End como Back-End. Mis competencias principales incluyen React.js, TypeScript, JavaScript, HTML5, Python, Java, NeoLoad y Selenium. Egresado de Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo (ESCOM - IPN) en diciembre de 2023, enfocado en entregar soluciones robustas, eficientes y mantenibles.",
    en: "As a Software Engineer II at Ellucian, I contribute to the design and development of internal pages and components, with a focus on both front-end and back-end technologies. My core competencies include React.js, TypeScript, JavaScript, HTML5, Python, Java, NeoLoad, and Selenium. I hold a B.S. in Computer Systems Engineering from Escuela Superior de Cómputo (ESCOM - IPN), graduated in December 2023, focused on delivering robust and efficient software solutions.",
  },
  aboutParagraphs: {
    es: [
      "Como Software Engineer II en Ellucian (Querétaro, México), contribuyo al diseño y desarrollo de páginas y componentes para aplicaciones internas dentro del área de I+D (R&D), abarcando tecnologías tanto de Front-End como de Back-End.",
      "Soy Ingeniero en Sistemas Computacionales egresado de la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional (diciembre 2023) y Técnico en Sistemas Digitales por el CECyT No. 3 (IPN). Mis competencias principales incluyen React.js, TypeScript, HTML5, Python, Java, pruebas de rendimiento y automatización con NeoLoad y Selenium, además de servicios Cloud (AWS, GCP, Azure) y sistemas GNU/Linux (Debian).",
      "Más allá del ámbito empresarial, desarrollo herramientas open-source de escritorio con Electron, Node.js y protocolo RCON, pipelines de inteligencia artificial local en Python, y produzco música bajo el proyecto D.E.B. en Spotify.",
    ],
    en: [
      "As a Software Engineer II at Ellucian (Querétaro, Mexico), I contribute to the design and development of internal pages and components within the R&D department, working across both front-end and back-end technologies.",
      "I hold a degree in Computer Systems Engineering from Escuela Superior de Cómputo (ESCOM - IPN, graduated December 2023) and a Digital Systems Technician degree from CECyT No. 3 (IPN). My core competencies include React.js, TypeScript, HTML5, Python, Java, performance and QA automation with NeoLoad and Selenium, Cloud services (AWS, GCP, Azure), and GNU/Linux (Debian).",
      "Beyond enterprise engineering, I build open-source cross-platform desktop applications with Electron, Node.js, and RCON, local AI pipelines in Python, and produce music on Spotify under the moniker D.E.B.",
    ],
  },
};

export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "hytale-tiktok-rcon",
    title: {
      es: "Hytale × TikTok Live Studio (v2.0.0)",
      en: "Hytale × TikTok Live Studio (v2.0.0)",
    },
    description: {
      es: "Estudio visual, aplicación de escritorio multiplataforma y plugin propio HyRCON (Java 25) para conectar directos de TikTok Live con servidores dedicados de Hytale mediante RCON sin suscripciones de pago.",
      en: "Visual studio, cross-platform desktop application, and custom HyRCON plugin (Java 25) to connect TikTok Live streams with dedicated Hytale servers over RCON with zero paid subscriptions.",
    },
    highlights: {
      es: [
        "Catálogo visual integrado con 281+ Mobs, 3,873+ Ítems oficiales de Hytale y 1,690+ Regalos de TikTok.",
        "Ejecutables portables para Windows (.exe) y Linux (.AppImage) + plugin de servidor HyRCON.jar.",
        "Ejecución de eventos, spawns e inventario en tiempo real a través del protocolo RCON.",
      ],
      en: [
        "Built-in visual catalog featuring 281+ Hytale Mobs, 3,873+ official Hytale Items, and 1,690+ TikTok Gifts.",
        "Portable executables for Windows (.exe) and Linux (.AppImage) bundled with custom HyRCON.jar plugin.",
        "Real-time mob spawning and player inventory delivery via RCON protocol.",
      ],
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 0,
    category: "desktop",
    topics: ["Node.js", "Electron", "Java 25", "RCON", "TikTok Live", "Linux / Windows"],
    repoUrl: "https://github.com/danielDEBIAN/hytale-tiktok-rcon",
    releaseUrl: "https://github.com/danielDEBIAN/hytale-tiktok-rcon/releases",
    featured: true,
  },
  {
    name: "minecraft-tiktok-rcon",
    title: {
      es: "Minecraft × TikTok Live Studio (v2.1.0)",
      en: "Minecraft × TikTok Live Studio (v2.1.0)",
    },
    description: {
      es: "Aplicación de escritorio y Web GUI 100% gratuita en Node.js y Electron para conectar TikTok Live con servidores dedicados de Minecraft: Java Edition (1.20+ / 1.21+) mediante su protocolo RCON nativo.",
      en: "100% free desktop app and Web GUI built with Node.js and Electron to bridge TikTok Live streams with Minecraft: Java Edition (1.20+ / 1.21+) dedicated servers via native RCON.",
    },
    highlights: {
      es: [
        "Compatible con servidores Vanilla, Paper, Spigot, Purpur, Fabric y Forge con autoconfiguración de RCON y EULA.",
        "Explorador visual de criaturas de Minecraft 1.21+, 1,384+ Ítems con ilustración oficial y 1,690+ Regalos de TikTok.",
        "Distribuido como aplicación portable para Windows y AppImage para Linux.",
      ],
      en: [
        "Supports Vanilla, Paper, Spigot, Purpur, Fabric, and Forge servers with one-click RCON & EULA setup.",
        "Visual browser for Minecraft 1.21+ Mobs, 1,384+ official Item icons, and 1,690+ TikTok Gifts.",
        "Distributed as a portable Windows executable and Linux AppImage.",
      ],
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 0,
    category: "desktop",
    topics: ["Node.js", "Electron", "RCON", "Minecraft Java", "Web GUI", "ES Modules"],
    repoUrl: "https://github.com/danielDEBIAN/minecraft-tiktok-rcon",
    releaseUrl: "https://github.com/danielDEBIAN/minecraft-tiktok-rcon/releases",
    featured: true,
  },
  {
    name: "ia-clip-editor",
    title: {
      es: "IA Clip Editor — Pipeline Local de Video con LLM",
      en: "IA Clip Editor — Local LLM Video Pipeline",
    },
    description: {
      es: "Editor automático de clips basado en IA local que extrae audio de videos, genera transcripciones con marcas de tiempo y utiliza un LLM local para detectar y recortar los mejores fragmentos.",
      en: "Local AI-powered video clip editor that extracts audio, generates timestamped transcriptions, and uses a local LLM to identify and cut the best highlights automatically.",
    },
    highlights: {
      es: [
        "Extracción de audio de alto rendimiento mediante FFmpeg y transcripción local con Faster-Whisper.",
        "Orquestación con modelos de lenguaje locales ejecutados en Ollama para análisis semántico de segmentos.",
        "Recorte automatizado de video y generación de subtítulos con MoviePy.",
      ],
      en: [
        "High-speed audio extraction with FFmpeg and local speech-to-text via Faster-Whisper.",
        "Local LLM orchestration powered by Ollama for semantic highlight detection.",
        "Automated video clipping and subtitle generation using MoviePy.",
      ],
    },
    language: "Python",
    languageColor: "#3572A5",
    stars: 0,
    category: "ai-python",
    topics: ["Python 3.11+", "Faster-Whisper", "Ollama LLM", "FFmpeg", "MoviePy"],
    repoUrl: "https://github.com/danielDEBIAN/ia-clip-editor",
    featured: true,
  },
  {
    name: "cypher_DES_python",
    title: {
      es: "Cifrador Criptográfico DES para Imágenes BMP",
      en: "DES Cryptographic Cipher for BMP Images",
    },
    description: {
      es: "Herramienta criptográfica de escritorio en Python para cifrar y descifrar imágenes en formato BMP preservando su cabecera mediante el algoritmo DES (Data Encryption Standard).",
      en: "Desktop cryptographic tool written in Python to encrypt and decrypt BMP images while preserving bitmap headers using the DES (Data Encryption Standard) algorithm.",
    },
    highlights: {
      es: [
        "Implementación de múltiples modos de operación por bloques: ECB, CBC, CFB y OFB con vectores de inicialización (IV).",
        "Interfaz gráfica de usuario construida con Tkinter y procesamiento binario de imágenes BMP.",
        "Desarrollado con PyCryptodome (Crypto.Cipher) para visualización comparativa de entropía visual.",
      ],
      en: [
        "Implements multiple block cipher modes of operation: ECB, CBC, CFB, and OFB with Initialization Vectors (IV).",
        "Graphical interface built with Tkinter and raw binary BMP header preservation.",
        "Powered by PyCryptodome (Crypto.Cipher) for visual inspection of block cipher patterns.",
      ],
    },
    language: "Python",
    languageColor: "#3572A5",
    stars: 0,
    category: "ai-python",
    topics: ["Python", "Cryptography", "DES", "ECB / CBC / CFB / OFB", "Tkinter", "BMP"],
    repoUrl: "https://github.com/danielDEBIAN/cypher_DES_python",
  },
  {
    name: "portfolio_deb",
    title: {
      es: "Portfolio DEB — Portafolio Personal Minimalista",
      en: "Portfolio DEB — Minimalist Personal Portfolio",
    },
    description: {
      es: "Portafolio web personal diseñado bajo principios estrictos de minimalismo, colores sólidos sin gradientes, tipografía limpia y alto rendimiento con Next.js y TypeScript.",
      en: "Personal web portfolio crafted under strict minimalist principles, solid flat colors with zero gradients, crisp typography, and high performance using Next.js and TypeScript.",
    },
    highlights: {
      es: [
        "Diseño monocromático sin gradientes con soporte para tema oscuro y claro.",
        "Integración directa con los repositorios pineados y metadatos de GitHub (@danielDEBIAN).",
        "Incluye CV interactivo de una sola página optimizado para exportación a PDF.",
      ],
      en: [
        "Strict zero-gradient monochromatic aesthetic with dark and light theme support.",
        "Direct integration with pinned repositories and metadata from GitHub (@danielDEBIAN).",
        "Includes a built-in one-page interactive resume optimized for PDF export.",
      ],
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    category: "web",
    topics: ["TypeScript", "Next.js 16", "React 19", "Tailwind CSS"],
    repoUrl: "https://github.com/danielDEBIAN/portfolio_deb",
  },
  {
    name: "mylittleflower",
    title: {
      es: "My Little Flower — Experiencia Web Interactiva",
      en: "My Little Flower — Interactive Web Experience",
    },
    description: {
      es: "Aplicación web interactiva desarrollada con React que integra reproductores embebidos de Spotify, listas de reproducción personalizadas y elementos visuales dinámicos, desplegada en Firebase.",
      en: "Interactive React web application integrating embedded Spotify players, curated playlists, and custom visual assets, configured for Firebase Hosting.",
    },
    highlights: {
      es: [
        "Componentes dinámicos en React 18 para reproducción multimedia embebida con Spotify API/Embeds.",
        "Configuración de despliegue continuo mediante Firebase Hosting.",
      ],
      en: [
        "Dynamic React 18 components for embedded multimedia playback with Spotify Embeds.",
        "Configured for cloud deployment with Firebase Hosting.",
      ],
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 1,
    category: "web",
    topics: ["JavaScript", "React", "Spotify Embed", "Firebase", "CSS"],
    repoUrl: "https://github.com/danielDEBIAN/mylittleflower",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: {
      es: "Software Engineer II",
      en: "Software Engineer II",
    },
    organization: "Ellucian",
    period: {
      es: "Junio 2025 – Actualidad",
      en: "June 2025 – Present",
    },
    location: {
      es: "San Juan del Río, Querétaro, México",
      en: "San Juan del Río, Querétaro, Mexico",
    },
    description: {
      es: "Diseño y desarrollo de páginas y componentes internos con enfoque Full-Stack (Front-End y Back-End), asegurando calidad, rendimiento y mantenibilidad en aplicaciones empresariales.",
      en: "Design and development of internal pages and components with a Full-Stack focus (Front-End and Back-End), delivering robust, high-performance enterprise applications.",
    },
    tags: ["React.js", "HTML5", "Full-Stack", "NeoLoad", "Selenium"],
  },
  {
    role: {
      es: "Software Engineer I",
      en: "Software Engineer I",
    },
    organization: "Ellucian",
    period: {
      es: "Julio 2023 – Junio 2025 (2 años)",
      en: "July 2023 – June 2025 (2 years)",
    },
    location: {
      es: "Remoto",
      en: "Remote",
    },
    description: {
      es: "Desarrollo de aplicaciones y módulos internos para el departamento de Investigación y Desarrollo (R&D), implementando interfaces en React.js, servicios backend y pruebas automatizadas.",
      en: "Developed internal web applications and components for the R&D department, implementing React.js interfaces, backend services, and automated testing.",
    },
    tags: ["React.js", "JavaScript", "Front-End", "Back-End", "QA Automation"],
  },
  {
    role: {
      es: "Technical Intern",
      en: "Technical Intern",
    },
    organization: "Ellucian",
    period: {
      es: "Enero 2023 – Junio 2023 (6 meses)",
      en: "January 2023 – June 2023 (6 months)",
    },
    location: {
      es: "Remoto",
      en: "Remote",
    },
    description: {
      es: "Colaboración en el departamento de R&D diseñando páginas y componentes de uso interno, participando activamente en el desarrollo tanto de frontend como de backend.",
      en: "Worked in the R&D department designing pages and components for internal usage, developing both frontend and backend features.",
    },
    tags: ["R&D", "HTML5", "JavaScript", "Frontend & Backend"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: {
      es: "Ingeniería en Sistemas Computacionales",
      en: "B.S. in Computer Systems Engineering",
    },
    institution: "Escuela Superior de Cómputo (ESCOM — IPN)",
    period: {
      es: "Enero 2019 – Diciembre 2023",
      en: "January 2019 – December 2023",
    },
    location: {
      es: "Ciudad de México, México",
      en: "Mexico City, Mexico",
    },
    description: {
      es: "Formación profesional en Ingeniería en Sistemas Computacionales: ingeniería de software, desarrollo web, algoritmos, criptografía, redes, bases de datos, sistemas operativos Linux y cómputo en la nube.",
      en: "B.S. in Computer Systems Engineering: software engineering, web development, algorithms, cryptography, computer networks, databases, Linux operating systems, and cloud computing.",
    },
    tags: ["Computer Engineering", "Software Engineering", "Cryptography", "Linux"],
  },
  {
    degree: {
      es: "Técnico en Sistemas Digitales",
      en: "Digital Systems Technician",
    },
    institution:
      "Centro de Estudios Científicos y Tecnológicos No. 3 (CECyT 3 — IPN)",
    period: {
      es: "Agosto 2015 – Diciembre 2018",
      en: "August 2015 – December 2018",
    },
    location: {
      es: "Estado de México, México",
      en: "Mexico",
    },
    description: {
      es: "Formación técnica en tecnología de sistemas digitales, electrónica digital, arquitectura de computadoras y fundamentos de programación.",
      en: "Technical degree in digital systems technology, digital electronics, computer architecture, and programming fundamentals.",
    },
    tags: ["Digital Systems", "Computer Technology", "Hardware & Logic"],
  },
];

export const CERTIFICATIONS_DATA = [
  {
    name: "React.js Essential Training",
    issuer: "LinkedIn Learning",
  },
  {
    name: "Learning React.js",
    issuer: "LinkedIn Learning",
  },
];

export const SPOKEN_LANGUAGES_DATA = [
  {
    language: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
  },
  {
    language: { es: "Inglés", en: "English" },
    level: { es: "Competencia profesional (Working)", en: "Limited Working" },
  },
  {
    language: { es: "Japonés", en: "Japanese" },
    level: { es: "Básico (Elementary)", en: "Elementary" },
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: {
      es: "Lenguajes & Web",
      en: "Languages & Web",
    },
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Python",
      "Java",
      "SQL",
      "Bash / Shell",
    ],
  },
  {
    title: {
      es: "Frameworks, Testing & QA",
      en: "Frameworks, Testing & QA",
    },
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Electron",
      "Tailwind CSS",
      "Selenium",
      "NeoLoad",
    ],
  },
  {
    title: {
      es: "Cloud, Sistemas & DevOps",
      en: "Cloud, Systems & DevOps",
    },
    items: [
      "AWS",
      "GCP (Google Cloud)",
      "Microsoft Azure",
      "GNU/Linux (Debian)",
      "Git & GitHub",
      "Firebase",
    ],
  },
  {
    title: {
      es: "IA Local, Redes & Criptografía",
      en: "Local AI, Networking & Crypto",
    },
    items: [
      "Ollama (Local LLMs)",
      "Faster-Whisper",
      "FFmpeg & MoviePy",
      "Protocolo RCON",
      "PyCryptodome (DES)",
      "Tkinter",
    ],
  },
];
