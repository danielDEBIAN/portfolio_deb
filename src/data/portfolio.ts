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

export const PROFILE_DATA = {
  name: "Daniel Espinoza",
  fullName: "Daniel Espinoza Bautista",
  handle: "danielDEBIAN",
  role: {
    es: "Software Engineer en Ellucian",
    en: "Software Engineer at Ellucian",
  },
  location: {
    es: "México",
    en: "Mexico",
  },
  company: "Ellucian",
  education: "ESCOM — Instituto Politécnico Nacional (IPN)",
  avatarUrl: "https://avatars.githubusercontent.com/u/84060085?v=4",
  githubUrl: "https://github.com/danielDEBIAN",
  linkedinUrl: "https://www.linkedin.com/in/daniel-espinoza-bautista-4939bb218/",
  linktreeUrl: "https://linktr.ee/deb_daniel",
  resumeUrl:
    "https://drive.google.com/file/d/1WgYXXZHkY-SCwNHYlZZ7wuvBM6keJSWd/view?usp=sharing",
  heroHeadline: {
    es: "Ingeniero de Software construyendo herramientas de escritorio, web y automatización.",
    en: "Software Engineer building desktop tools, web applications, and automation pipelines.",
  },
  heroSubheadline: {
    es: "Actualmente Software Engineer en Ellucian y formado en ESCOM (IPN). Especializado en JavaScript/TypeScript, Python, Java, arquitecturas Cloud (AWS, GCP, Azure) y entornos Linux.",
    en: "Currently a Software Engineer at Ellucian with a background from ESCOM (IPN). Specialized in JavaScript/TypeScript, Python, Java, Cloud architectures (AWS, GCP, Azure), and Linux environments.",
  },
  aboutParagraphs: {
    es: [
      "Soy Ingeniero de Software en Ellucian y formado en Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional.",
      "Disfruto diseñar y desarrollar software de principio a fin: desde aplicaciones web full-stack con React y Next.js, hasta aplicaciones de escritorio multiplataforma con Electron y Node.js, protocolos de red en tiempo real (RCON) y pipelines de inteligencia artificial local en Python.",
      "Entusiasta de Linux (de ahí el alias DEBIAN) y del cómputo en la nube con experiencia en AWS, Google Cloud Platform y Microsoft Azure. Me enfoco en crear herramientas limpias, rápidas, de código abierto y sin fricción para el usuario final.",
    ],
    en: [
      "I am a Software Engineer at Ellucian with a Computer Systems Engineering background from ESCOM at the National Polytechnic Institute (IPN) in Mexico.",
      "I enjoy building software end-to-end: from full-stack web applications with React and Next.js, to cross-platform desktop apps with Electron and Node.js, real-time network protocols (RCON), and local AI pipelines in Python.",
      "A Linux enthusiast (hence the DEBIAN handle) with hands-on experience across AWS, Google Cloud Platform, and Microsoft Azure. I focus on building clean, fast, open-source tools that solve real problems without unnecessary complexity.",
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
        "Soporte bilingüe (Español / Inglés) y diseño responsivo.",
      ],
      en: [
        "Strict zero-gradient monochromatic aesthetic with dark and light theme support.",
        "Direct integration with pinned repositories and metadata from GitHub (@danielDEBIAN).",
        "Bilingual interface (Spanish / English) and responsive layout.",
      ],
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    category: "web",
    topics: ["TypeScript", "Next.js 14", "React 18", "Tailwind CSS"],
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

export const EXPERIENCE_DATA = [
  {
    role: {
      es: "Software Engineer",
      en: "Software Engineer",
    },
    organization: "Ellucian",
    period: {
      es: "Actualidad",
      en: "Present",
    },
    location: {
      es: "México",
      en: "Mexico",
    },
    description: {
      es: "Desarrollo y mantenimiento de soluciones de software empresarial y servicios en la nube para instituciones de educación superior. Trabajo colaborativo en equipos ágiles aplicando buenas prácticas de ingeniería de software, integración continua y arquitecturas cloud.",
      en: "Development and maintenance of enterprise software solutions and cloud services for higher education institutions. Collaborative engineering in agile teams applying clean architecture, CI/CD, and cloud best practices.",
    },
    tags: ["Software Engineering", "Cloud Services", "Java", "JavaScript", "Full-Stack"],
  },
];

export const EDUCATION_DATA = [
  {
    degree: {
      es: "Ingeniería en Sistemas Computacionales",
      en: "B.S. in Computer Systems Engineering",
    },
    institution: "ESCOM — Instituto Politécnico Nacional (IPN)",
    period: {
      es: "Formación Profesional",
      en: "Higher Education",
    },
    location: {
      es: "Ciudad de México, México",
      en: "Mexico City, Mexico",
    },
    description: {
      es: "Formación sólida en algoritmos, estructuras de datos, criptografía, redes de computadoras, sistemas operativos Linux, ingeniería de software, bases de datos y cómputo en la nube.",
      en: "Strong foundation in algorithms, data structures, cryptography, computer networks, Linux operating systems, software engineering, databases, and cloud computing.",
    },
    tags: ["Algorithms", "Cryptography", "Linux", "Distributed Systems", "Databases"],
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: {
      es: "Lenguajes de Programación",
      en: "Programming Languages",
    },
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "Bash / Shell", "HTML5 & CSS3"],
  },
  {
    title: {
      es: "Frontend, Desktop & Frameworks",
      en: "Frontend, Desktop & Frameworks",
    },
    items: ["React.js", "Next.js", "Node.js", "Electron", "Tailwind CSS", "Tkinter"],
  },
  {
    title: {
      es: "Cloud, DevOps & Sistemas",
      en: "Cloud, DevOps & Systems",
    },
    items: [
      "AWS (Amazon Web Services)",
      "GCP (Google Cloud Platform)",
      "Microsoft Azure",
      "GNU/Linux (Fedora)",
      "Git & GitHub",
      "Firebase",
    ],
  },
  {
    title: {
      es: "IA, Redes & Herramientas Especializadas",
      en: "AI, Networking & Specialized Tools",
    },
    items: [
      "Ollama (Local LLMs)",
      "Faster-Whisper",
      "FFmpeg & MoviePy",
      "Protocolo RCON",
      "PyCryptodome (Criptografía)",
    ],
  },
];
