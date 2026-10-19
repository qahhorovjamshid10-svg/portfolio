export type Locale = "en" | "uz";

export interface NavItem {
  id: string;
  label: Record<Locale, string>;
  href: string;
  index: string;
}

export interface ProjectMode {
  name: string;
  tag: string;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
}

export interface MutationTier {
  rarity: string;
  probability: string;
  accentColor: string;
  examples: string[];
}

export interface ArchitectureLayer {
  code: string;
  title: Record<Locale, string>;
  stack: string[];
  description: Record<Locale, string>;
}

export interface ApiEndpointSpec {
  method: "GET" | "POST" | "PUT";
  path: string;
  domain: string;
  description: Record<Locale, string>;
}

export interface ProjectData {
  id: string;
  slug: string;
  index: string;
  featured: boolean;
  title: string;
  shortTitle: string;
  subtitle: Record<Locale, string>;
  category: Record<Locale, string>;
  year: string;
  status: Record<Locale, string>;
  summary: Record<Locale, string>;
  extendedOverview: Record<Locale, string[]>;
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  accentHex: string;
  primaryStack: string[];
  fullStack: string[];
  previewScreens: {
    id: string;
    label: Record<Locale, string>;
    route: string;
    imagePath: string;
    caption: Record<Locale, string>;
  }[];
  architectureLayers: ArchitectureLayer[];
  gameModes: ProjectMode[];
  mutationTiers: MutationTier[];
  mutationCombos: {
    name: string;
    recipe: string;
    effect: Record<Locale, string>;
  }[];
  securityHighlights: {
    title: Record<Locale, string>;
    detail: Record<Locale, string>;
  }[];
  databaseModels: {
    model: string;
    purpose: Record<Locale, string>;
  }[];
  apiEndpoints: ApiEndpointSpec[];
}

export interface SkillGroup {
  id: string;
  index: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  skills: {
    name: string;
    context: Record<Locale, string>;
    isCore?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  index: string;
  isPlaceholder?: boolean;
  period: Record<Locale, string>;
  role: Record<Locale, string>;
  organization: Record<Locale, string>;
  location: Record<Locale, string>;
  type: Record<Locale, string>;
  summary: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  index: string;
  institution: string;
  program: Record<Locale, string>;
  period: Record<Locale, string>;
  gpa?: string;
  status: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface LanguageItem {
  id: string;
  language: Record<Locale, string>;
  nativeName: string;
  levelCode: string;
  levelLabel: Record<Locale, string>;
  proficiencyPercent: number;
  note: Record<Locale, string>;
}

export const portfolioData = {
  personal: {
    name: "Jamshid Qahhorov",
    monogram: "JQ.",
    title: {
      en: "Front-End Developer",
      uz: "Front-End Dasturchi",
    },
    headline: {
      en: "Building Modern Web Applications & Responsive User Interfaces with React & TypeScript",
      uz: "React va TypeScript Yordamida Zamonaviy Web-Ilovalar hamda Sifatli Interfeyslar Yaratish",
    },
    heroStatement: {
      en: "I build modern, interactive web experiences with a focus on thoughtful interfaces, performance, and maintainable code.",
      uz: "Men React.js va TypeScript yordamida puxta o‘ylangan interfeyslar, tezkorlik va toza kod asosida zamonaviy web-ilovalarni yarataman.",
    },
    experienceSummaryBadge: {
      en: "8 Months Practical Frontend Experience • Tashkent, Uzbekistan",
      uz: "8 Oylik Amaliy Frontend Tajriba • Toshkent, O‘zbekiston",
    },
    location: {
      en: "Tashkent, Uzbekistan",
      uz: "Toshkent, O‘zbekiston",
    },
    coordinates: "41.2995° N, 69.2401° E",
    timezone: "UTC+05:00",
    email: "qahhorovjamshid10@gmail.com",
    phone: "+998 88 300 47 95",
    phoneHref: "tel:+998883004795",
    githubUrl: "https://github.com/qahhorovjamshid10-svg",
    githubHandle: "qahhorovjamshid10-svg",
    telegramUrl: "https://t.me/iflxczz",
    telegramHandle: "@iflxczz",
    cvPdfUrl: "/Jamshid_Qahhorov_CV.pdf",
    professionalFocus: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "REST Full API",
      "HTML5 & CSS3",
      "SASS",
    ],
    additionalTechnologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Vite",
      "AI Development",
    ],
  },

  navigation: [
    {
      id: "about",
      index: "01",
      label: { en: "About", uz: "Men haqimda" },
      href: "/#about",
    },
    {
      id: "projects",
      index: "02",
      label: { en: "Projects", uz: "Loyihalar" },
      href: "/#projects",
    },
    {
      id: "skills",
      index: "03",
      label: { en: "Skills", uz: "Ko‘nikmalar" },
      href: "/#skills",
    },
    {
      id: "experience",
      index: "04",
      label: { en: "Experience", uz: "Tajriba" },
      href: "/#experience",
    },
    {
      id: "education",
      index: "05",
      label: { en: "Education", uz: "Ta’lim" },
      href: "/#education",
    },
    {
      id: "languages",
      index: "06",
      label: { en: "Languages", uz: "Tillar" },
      href: "/#languages",
    },
    {
      id: "contact",
      index: "07",
      label: { en: "Contact", uz: "Aloqa" },
      href: "/#contact",
    },
  ] satisfies NavItem[],

  about: {
    sectionTitle: {
      en: "About Me",
      uz: "Men Haqimda",
    },
    eyebrow: {
      en: "01 // PROFILE",
      uz: "01 // KASBIY PROFIL",
    },
    lead: {
      en: "Front-End Developer with 8 months of hands-on experience building modern web applications with React.js and TypeScript, integrating RESTful APIs, and crafting high-quality user interfaces.",
      uz: "React va TypeScript yordamida zamonaviy web-ilovalar yaratish, REST API’larni integratsiya qilish va sifatli foydalanuvchi interfeyslarini ishlab chiqish bo‘yicha 8 oylik amaliy tajribaga ega Front-End Developer.",
    },
    paragraphs: {
      en: [
        "I have strong practical knowledge in JavaScript, TypeScript, React.js, HTML5, CSS3, SASS, Tailwind CSS, RESTful API integration, and version control with Git, GitHub, GitLab, and Vite. My primary focus is building clean, responsive, and user-friendly interfaces.",
        "Alongside core frontend development, I actively utilize modern AI development tools to prototype, architect, and ship interactive web projects such as CELLIX—a browser-based cyberpunk arcade and multiplayer game platform.",
      ],
      uz: [
        "JavaScript, TypeScript, React.js, Git, GitHub, GitLab, REST Full API, Tailwind CSS, HTML5, CSS3, SASS hamda Vite bo‘yicha chuqur amaliy bilimlarga egaman. Asosiy e’tiborimni toza kod, barcha qurilmalarga moslashuvchan (responsive) dizayn va qulay foydalanuvchi interfeyslarini yaratishga qarataman.",
        "Shuningdek, ishlab chiqish jarayonida zamonaviy AI vositalaridan (AI Development) unumli foydalanib, CELLIX kabi murakkab va interaktiv brauzer loyihalarini tezkor hamda sifatli tarzda hayotga tatbiq etaman.",
      ],
    },
    pillars: [
      {
        index: "I",
        title: {
          en: "React & TypeScript Development",
          uz: "React va TypeScript Dasturlash",
        },
        description: {
          en: "Building reusable component systems and type-safe frontend applications with React.js, JavaScript (ES6+), and TypeScript.",
          uz: "React.js, JavaScript (ES6+) va TypeScript yordamida qayta ishlatiluvchi komponentlar va ishonchli web-ilovalar yaratish.",
        },
      },
      {
        index: "II",
        title: {
          en: "Responsive UI & Modern Styling",
          uz: "Responsiv Interfeys va Zamonaviy Dizayn",
        },
        description: {
          en: "Crafting pixel-accurate, mobile-friendly layouts using HTML5, CSS3, SASS/SCSS, Tailwind CSS, and smooth UI animations.",
          uz: "HTML5, CSS3, SASS/SCSS va Tailwind CSS yordamida barcha ekran o‘lchamlari uchun moslashuvchan va zamonaviy interfeyslar qurish.",
        },
      },
      {
        index: "III",
        title: {
          en: "REST API & AI-Assisted Development",
          uz: "REST API va AI Development",
        },
        description: {
          en: "Integrating RESTful APIs on the frontend and leveraging AI engineering workflows to build interactive web experiences faster.",
          uz: "REST Full API’larni frontendga integratsiya qilish hamda zamonaviy AI vositalari yordamida interaktiv web-loyihalarni samarali yaratish.",
        },
      },
    ],
    facts: [
      {
        label: { en: "Role", uz: "Mutaxassislik" },
        value: { en: "Front-End Developer", uz: "Front-End Developer" },
      },
      {
        label: { en: "Practical Experience", uz: "Amaliy Tajriba" },
        value: {
          en: "8 Months (React, TypeScript, REST API)",
          uz: "8 Oy (React, TypeScript, REST API)",
        },
      },
      {
        label: { en: "Location", uz: "Manzil" },
        value: { en: "Toshkent, O'zbekiston", uz: "Toshkent, O‘zbekiston" },
      },
      {
        label: { en: "University GPA", uz: "Universitet GPA" },
        value: {
          en: "Software Engineering • 3.8 / 5.0",
          uz: "Dasturiy Injinering • 3.8 / 5.0",
        },
      },
    ],
  },

  projects: [
    {
      id: "cellix",
      slug: "cellix",
      index: "01",
      featured: true,
      title: "CELLIX — Real-Time Cyberpunk Multiplayer & Arcade Web Game Platform",
      shortTitle: "CELLIX",
      subtitle: {
        en: "2D Action Roguelite & Real-Time Multiplayer Browser Arena — Evolve • Mutate • Dominate",
        uz: "Real-Time Cyberpunk Multiplayer va Arkada Web O‘yin Platformasi",
      },
      category: {
        en: "Interactive Web Game Platform (AI-Assisted Project)",
        uz: "Interaktiv Web O‘yin Platformasi",
      },
      year: "2026",
      status: {
        en: "Live Demo (v1.2)",
        uz: "Jonli Demo (v1.2)",
      },
      summary: {
        en: "CELLIX is a real-time multiplayer and arcade gaming platform built with modern web technologies that lets users dive into an interactive game world directly in the browser. Developed using Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Phaser 3, WebSockets, REST APIs, and AI-assisted development workflows, with a strong focus on interactive gameplay, responsive UI, and system efficiency.",
        uz: "CELLIX — zamonaviy texnologiyalar asosida yaratilgan real-time multiplayer gaming platformasi bo‘lib, foydalanuvchilarga brauzer orqali interaktiv o‘yinlar olamiga sho‘ng‘ish imkonini beradi. Loyiha Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Phaser 3, WebSockets, REST API hamda AI vositalari yordamida ishlab chiqilgan bo‘lib, unda interaktiv o‘yin tajribasi va tizim samaradorligiga alohida e’tibor qaratilgan.",
      },
      extendedOverview: {
        en: [
          "CELLIX is a browser-based cyberpunk roguelite and multiplayer arena platform where players control a digital cell, collect mutation cards across escalating enemy waves, unlock cybernetic skins in the Armory, and compete on the global leaderboard.",
          "The user interface is built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion—providing bilingual support (Uzbek & English), player profile statistics, and the Armory skin market connected seamlessly with the Phaser 3 (HTML5 Canvas/WebGL) game arena and Web Audio API sound effects.",
          "Developed with the assistance of modern AI engineering tools, the platform combines interactive game mechanics, real-time WebSocket communication, and REST API integration into a cohesive browser experience.",
        ],
        uz: [
          "CELLIX — foydalanuvchilarga brauzer orqali raqamli hujayra arenasida jang qilish, mutatsiya kartalarini yig‘ish, kibernetik skinlarni ochish va global reytingda bellashish imkonini beruvchi cyberpunk platformasidir.",
          "Interfeys qismi Next.js (App Router), React, TypeScript, Tailwind CSS va Framer Motion yordamida qurilgan bo‘lib, ikki tilli (UZ/EN) tizim, profil statistikasi va Armory do‘konini o‘yin dvigateli — Phaser 3 (HTML5 Canvas/WebGL) hamda Web Audio API ovoz effektlari bilan uzviy bog‘laydi.",
          "Ishlab chiqish jarayonida AI vositalaridan ham foydalanilgan bo‘lib, loyiha davomida zamonaviy web dasturlash, interaktiv o‘yin mexanikasi va real-time aloqa texnologiyalari birlashtirilgan.",
        ],
      },
      liveUrl: "https://cellix.vercel.app/",
      githubUrl: "https://github.com/qahhorovjamshid10-svg/cellix",
      caseStudyUrl: "/projects/cellix",
      accentHex: "#FF304F",
      primaryStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Phaser 3",
        "REST API",
        "WebSockets",
        "AI Development",
      ],
      fullStack: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Phaser 3 (HTML5 Canvas/WebGL)",
        "Web Audio API",
        "REST API",
        "WebSockets (ws)",
        "AI-Assisted Development",
      ],
      previewScreens: [
        {
          id: "hub",
          label: { en: "01 / Command Hub", uz: "01 / Asosiy Hub" },
          route: "cellix.vercel.app/",
          imagePath: "/images/projects/cellix-hub.svg",
          caption: {
            en: "Cyberpunk Command Hub with 3D hologram canvas, bilingual switch (UZ/EN), live coin wallet, and 4 module gateways (Profile, Arena, Leaderboard, Armory).",
            uz: "3D gologramma sahnasi, ikki tilli boshqaruv (UZ/EN), tanga hamyoni va 4 ta asosiy bo‘lim (Profil, Arena, Reyting, Skin bozori)ni birlashtirgan bosh sahifa.",
          },
        },
        {
          id: "arena",
          label: { en: "02 / Phaser Combat Arena", uz: "02 / Phaser Jang Arenasi" },
          route: "cellix.vercel.app/game",
          imagePath: "/images/projects/cellix-arena.svg",
          caption: {
            en: "Phaser 3 Canvas/WebGL micro-arena featuring real-time wave combat, acid/electric/gravity hazard zones, dash protection, radial pulse attacks, and 3-card Mutation selection.",
            uz: "Phaser 3 Canvas/WebGL jang maydoni: xavfli zonalar (kislota, elektr, gravitatsiya), dash himoyasi, radial impuls va 3-kartali mutatsiya tanlash tizimi.",
          },
        },
        {
          id: "armory",
          label: { en: "03 / Cyber Armory & Skins", uz: "03 / Cyber Armory Do‘koni" },
          route: "cellix.vercel.app/skins",
          imagePath: "/images/projects/cellix-armory.svg",
          caption: {
            en: "In-game coin economy and Cyber Armory with 10+ unlockable cybernetic character skins across Common, Rare, Epic, and Legendary tiers.",
            uz: "Common, Rare, Epic va Legendary darajadagi 10+ kibernetik personaj skinlarini tangalar evaziga xarid qilish va jihozlash do‘koni.",
          },
        },
        {
          id: "telemetry",
          label: { en: "04 / Leaderboard & Architecture", uz: "04 / Reyting va Tizim Tuzilishi" },
          route: "cellix.vercel.app/leaderboard",
          imagePath: "/images/projects/cellix-telemetry.svg",
          caption: {
            en: "Global and daily leaderboards, player progression tracking, and REST API / WebSocket integration.",
            uz: "Global va kundalik reyting jadvali, o‘yinchi progressiyasi hamda REST API va WebSocket integratsiyasi.",
          },
        },
      ],
      architectureLayers: [
        {
          code: "LAYER 01",
          title: {
            en: "Interactive Frontend & UI Layer",
            uz: "Interaktiv Frontend va UI Qatlami",
          },
          stack: [
            "Next.js (App Router)",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ],
          description: {
            en: "Component architecture managing the Command Hub, Player Profile, Cyber Armory skin store, Global Leaderboard, and bilingual localization (UZ/EN).",
            uz: "Hub, O‘yinchi profili, Skin bo‘limi, Reyting jadvali va ikki tilli (UZ/EN) interfeysni boshqaruvchi Next.js, React va TypeScript komponentlari.",
          },
        },
        {
          code: "LAYER 02",
          title: {
            en: "2D Canvas/WebGL Game Engine & Audio",
            uz: "2D Canvas/WebGL O‘yin Dvigateli va Audio",
          },
          stack: [
            "Phaser 3 (HTML5 Canvas/WebGL)",
            "Web Audio API",
            "Custom Scene Engine",
            "Mobile Joystick & Auto-Aim",
          ],
          description: {
            en: "Phaser scene architecture (Classic, Survival, Practice, Multiplayer) with custom character rendering, combat visual effects, hazard zones, and Web Audio API sound effects.",
            uz: "Maxsus Phaser sahnalari (Classic, Survival, Practice, Multiplayer), personajlar grafikasi, jang vizual effektlari va Web Audio API ovoz tizimi.",
          },
        },
        {
          code: "LAYER 03",
          title: {
            en: "Real-Time Communication & REST APIs",
            uz: "Real-Vaqt Aloqasi va REST API Integratsiyasi",
          },
          stack: [
            "REST API",
            "WebSockets (ws)",
            "Session Validation",
          ],
          description: {
            en: "Real-time communication via WebSockets paired with RESTful API endpoints for authentication, match scores, leaderboards, and in-game skin purchases.",
            uz: "WebSockets (ws) orqali real vaqt rejimidagi aloqa hamda autentifikatsiya, natijalar, reyting va do‘kon xaridlari uchun REST API integratsiyasi.",
          },
        },
        {
          code: "LAYER 04",
          title: {
            en: "AI-Assisted Development Workflow",
            uz: "AI Yordamida Ishlab Chiqish Jarayoni",
          },
          stack: [
            "AI Development",
            "Rapid Prototyping",
            "Code Optimization",
          ],
          description: {
            en: "Utilized modern AI engineering assistants during development to accelerate complex game logic implementation, full-stack integration, and balancing.",
            uz: "Murakkab o‘yin mexanikasi, real-time tizimlar va ma’lumotlar almashinuvini tezkor hamda samarali qurishda zamonaviy AI vositalaridan foydalanilgan.",
          },
        },
      ],
      gameModes: [
        {
          name: "Classic Arena",
          tag: "ENDLESS WAVES",
          description: {
            en: "Endless escalating arena combat progressing from standard cells to Elite enemies and the Ancient Cell Boss amidst acid, electric, and gravity hazards.",
            uz: "Cheksiz to‘lqinli arena rejimi: oddiy hujayralardan elite dushmanlar va Ancient Cell Boss jangigacha, kislota, elektr va gravitatsiya to‘siqlari bilan.",
          },
          highlights: {
            en: [
              "Infinite dynamic wave scaling",
              "Ancient Cell Boss encounters",
              "Acid, Electric & Gravity hazard zones",
            ],
            uz: [
              "Cheksiz kuchayib boruvchi to‘lqinlar",
              "Ancient Cell Boss janglari",
              "Kislota, elektr va gravitatsiya xavfli zonalari",
            ],
          },
        },
        {
          name: "Survival Protocol",
          tag: "10 STRUCTURED WAVES",
          description: {
            en: "10 tactical waves featuring curated elite squads, minibosses, inter-wave mutation drafting, bonus XP rewards, and a decisive final boss showdown.",
            uz: "10 ta tizimli to‘lqin: har bir bosqichda elite guruhlar, minibosslar, to‘lqinlar orasida mutatsiya tanlash va yakuniy final boss jangi.",
          },
          highlights: {
            en: [
              "10 structured waves + Final Boss",
              "Inter-wave mutation card drafting",
              "Dedicated XP & coin completion bonuses",
            ],
            uz: [
              "10 ta to‘lqin va Final Boss",
              "To‘lqinlar orasida mutatsiya tanlash",
              "Maxsus XP va tanga mukofotlari",
            ],
          },
        },
        {
          name: "Daily Challenge",
          tag: "DAILY MODIFIERS",
          description: {
            en: "Daily rotating combat modifiers with score multipliers and a dedicated daily leaderboard.",
            uz: "Har kuni yangilanuvchi maxsus modifikator, ball multiplikatori va alohida kundalik reyting jadvali.",
          },
          highlights: {
            en: [
              "Modifiers: Speed Demon, Tank Mode, Glass Cannon, Chaos Zone, Swarm Mode",
              "Fair daily competition",
              "Dedicated daily leaderboard tracking",
            ],
            uz: [
              "Modifikatorlar: Speed Demon, Tank Mode, Glass Cannon, Chaos Zone, Swarm Mode",
              "Kundalik musobaqa rejimi",
              "Alohida kundalik reyting jadvali",
            ],
          },
        },
        {
          name: "Multiplayer & Practice",
          tag: "REAL-TIME & SANDBOX",
          description: {
            en: "Experimental real-time multiplayer arena synchronized via WebSockets alongside a risk-free Practice sandbox for testing mutation builds.",
            uz: "WebSockets orqali real vaqt rejimida ishlovchi ko‘p o‘yinchi (Multiplayer) rejimi hamda xavfsiz mashq qilish (Practice) muhiti.",
          },
          highlights: {
            en: [
              "WebSockets (ws) real-time synchronization",
              "Interactive multiplayer combat",
              "Sandbox Practice mode for build experimentation",
            ],
            uz: [
              "WebSockets (ws) real-vaqt aloqasi",
              "Ko‘p o‘yinchi rejimi",
              "Buildlarni sinash uchun Practice rejimi",
            ],
          },
        },
      ],
      mutationTiers: [
        {
          rarity: "Common",
          probability: "50%",
          accentColor: "#929292",
          examples: ["Hyper Speed (+15% Speed)", "Bio Shield (+20 HP)"],
        },
        {
          rarity: "Rare",
          probability: "30%",
          accentColor: "#38BDF8",
          examples: ["Acid Trail", "Multi Shot", "Life Steal"],
        },
        {
          rarity: "Epic",
          probability: "15%",
          accentColor: "#A855F7",
          examples: ["Plasma Storm", "Time Warp", "Shield Matrix"],
        },
        {
          rarity: "Legendary",
          probability: "5%",
          accentColor: "#D4AF72",
          examples: [
            "Cell Division (Clone)",
            "God Mode (Temporary)",
            "Omega Beam",
          ],
        },
      ],
      mutationCombos: [
        {
          name: "Inferno Protocol",
          recipe: "Fire Rate + Damage",
          effect: {
            en: "+25% Critical Strike Damage",
            uz: "+25% Critical zarar bonusi",
          },
        },
        {
          name: "Storm Core",
          recipe: "Speed + Multi Shot",
          effect: {
            en: "Chain Lightning Discharge on Hit",
            uz: "Zarba berilganda chaqmoq zanjiri effekti",
          },
        },
        {
          name: "Fortress Mode",
          recipe: "Shield + HP",
          effect: {
            en: "Continuous Bio-Armor Regeneration",
            uz: "Doimiy bio-qalqon regeneratsiyasi",
          },
        },
      ],
      securityHighlights: [
        {
          title: {
            en: "Session Run-Token Verification",
            uz: "O‘yin Sessiyasi va Run-Token Tekshiruvi",
          },
          detail: {
            en: "Each game session starts with a unique token (/api/game/run/start) to validate authentic match results.",
            uz: "Har bir o‘yin sessiyasi natijalar haqqoniyligini tekshirish uchun maxsus token (/api/game/run/start) bilan boshlanadi.",
          },
        },
        {
          title: {
            en: "Seamless Player Authentication",
            uz: "Qulay Foydalanuvchi Autentifikatsiyasi",
          },
          detail: {
            en: "Supports both instant anonymous play and registered accounts with profile progression saving.",
            uz: "Ro‘yxatdan o‘tmasdan (anonim) o‘ynash yoki shaxsiy hisob ochib natijalarni saqlash imkoniyati.",
          },
        },
        {
          title: {
            en: "Bilingual & Responsive Interface",
            uz: "Ikki Tilli va Responsiv Interfeys",
          },
          detail: {
            en: "Full Uzbek (UZ) and English (EN) interface localization with adaptive controls for both desktop and mobile browsers.",
            uz: "O‘zbek (UZ) va Ingliz (EN) tillarida to‘liq tarjima hamda kompyuter va mobil qurilmalar uchun moslashtirilgan boshqaruv.",
          },
        },
      ],
      databaseModels: [
        {
          model: "Player & Progression",
          purpose: {
            en: "Tracks player profile, coin balance, unlocked cybernetic skins, Cell Level XP, and achievements.",
            uz: "Foydalanuvchi profili, tangalar balansi, ochilgan skinlar, Cell Level XP va yutuqlarni saqlaydi.",
          },
        },
        {
          model: "GameRun & Session",
          purpose: {
            en: "Manages active match sessions and stores verified game statistics.",
            uz: "Faol o‘yin sessiyalari va qayd etilgan o‘yin natijalarini boshqaradi.",
          },
        },
        {
          model: "HighScore & DailyResult",
          purpose: {
            en: "Stores global leaderboard rankings and daily challenge scores.",
            uz: "Global reyting va kundalik Daily Challenge natijalarini saqlaydi.",
          },
        },
      ],
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/auth/register • /api/auth/login",
          domain: "Auth",
          description: {
            en: "Player registration, login, and profile session management.",
            uz: "Ro‘yxatdan o‘tish va tizimga kirish so‘rovlari.",
          },
        },
        {
          method: "POST",
          path: "/api/game/run/start",
          domain: "Session",
          description: {
            en: "Initializes a new arena match session.",
            uz: "Yangi o‘yin sessiyasini boshlash.",
          },
        },
        {
          method: "POST",
          path: "/api/game/score",
          domain: "Score",
          description: {
            en: "Submits match score and updates player progression.",
            uz: "O‘yin natijasini saqlash va reytingni yangilash.",
          },
        },
        {
          method: "GET",
          path: "/api/game/leaderboard",
          domain: "Leaderboard",
          description: {
            en: "Fetches global and daily high score rankings.",
            uz: "Global va kundalik reyting jadvalini olish.",
          },
        },
        {
          method: "POST",
          path: "/api/economy/purchase",
          domain: "Armory",
          description: {
            en: "Unlocks cybernetic character skins using earned coins.",
            uz: "Yig‘ilgan tangalar evaziga yangi skin xarid qilish.",
          },
        },
        {
          method: "PUT",
          path: "/api/profile/[id]",
          domain: "Profile",
          description: {
            en: "Updates player avatar, equipped skin, and bio.",
            uz: "O‘yinchi avatari, tanlangan skin va profil ma’lumotlarini yangilash.",
          },
        },
      ],
    },
  ] satisfies ProjectData[],

  skills: [
    {
      id: "frontend-core",
      index: "01",
      title: {
        en: "Frontend Development",
        uz: "Frontend Dasturlash",
      },
      subtitle: {
        en: "Core frontend technologies for building modern, responsive, and maintainable web interfaces.",
        uz: "Zamonaviy, tezkor va responsiv foydalanuvchi interfeyslarini yaratish texnologiyalari.",
      },
      skills: [
        {
          name: "React.js",
          isCore: true,
          context: {
            en: "Component architecture, hooks, state management, and interactive UI development",
            uz: "Komponentlar arxitekturasi, hooks, state boshqaruvi va zamonaviy UI tizimlar",
          },
        },
        {
          name: "JavaScript (ES6+)",
          isCore: true,
          context: {
            en: "Asynchronous programming, DOM manipulation, and core web logic",
            uz: "Asinxron dasturlash, DOM bilan ishlash va brauzer muhiti asoslari",
          },
        },
        {
          name: "TypeScript",
          isCore: true,
          context: {
            en: "Static typing, interfaces, and reliable frontend code architecture",
            uz: "Statik tiplashtirish va ishonchli kod bazasi arxitekturasi",
          },
        },
        {
          name: "Tailwind CSS",
          isCore: true,
          context: {
            en: "Responsive utility-first styling and custom design systems",
            uz: "Maxsus dizayn tizimlari va responsiv interfeyslar yaratish",
          },
        },
        {
          name: "HTML5 & CSS3",
          isCore: true,
          context: {
            en: "Semantic markup, accessibility, Flexbox, and CSS Grid layouts",
            uz: "Semantik verstkalar, accessibility, Grid va Flexbox tizimlari",
          },
        },
        {
          name: "SASS / SCSS",
          isCore: true,
          context: {
            en: "Modular stylesheets, variables, mixins, and structured CSS",
            uz: "Modulli uslublar jadvali, o‘zgaruvchilar va miksinlar",
          },
        },
      ],
    },
    {
      id: "api-and-ui",
      index: "02",
      title: {
        en: "API Integration & Interactive UI",
        uz: "REST API va Interaktiv Interfeyslar",
      },
      subtitle: {
        en: "Connecting frontend interfaces with RESTful APIs and creating engaging user experiences.",
        uz: "Frontend interfeyslarini REST Full API bilan bog‘lash va zamonaviy foydalanuvchi tajribasini yaratish.",
      },
      skills: [
        {
          name: "REST Full API",
          isCore: true,
          context: {
            en: "Integrating backend endpoints, async data fetching, and state synchronization",
            uz: "REST API’larni integratsiya qilish, so‘rovlar bilan ishlash va ma’lumotlar almashinuvi",
          },
        },
        {
          name: "Responsive Web Design",
          isCore: true,
          context: {
            en: "Adaptive layouts optimized for mobile, tablet, and desktop screens",
            uz: "Barcha qurilmalar (mobil, planshet, kompyuter) uchun moslashuvchan interfeyslar",
          },
        },
        {
          name: "Framer Motion / UI Animations",
          context: {
            en: "Smooth component transitions and interactive interface animations",
            uz: "Interfeys animatsiyalari va silliq o‘tishlar",
          },
        },
      ],
    },
    {
      id: "ai-development",
      index: "03",
      title: {
        en: "AI Development & Modern Workflows",
        uz: "AI Development va Zamonaviy Ishlab Chiqish",
      },
      subtitle: {
        en: "Effectively utilizing AI tools in the development process to build complex interactive applications.",
        uz: "Ishlab chiqish jarayonida AI vositalaridan unumli foydalanib, murakkab web-ilovalarni tezkor va sifatli yaratish.",
      },
      skills: [
        {
          name: "AI-Assisted Web Development",
          isCore: true,
          context: {
            en: "Building interactive web projects and accelerating prototyping with AI tools",
            uz: "AI vositalari yordamida tezkor prototiplash va interaktiv funksiyalar yaratish",
          },
        },
        {
          name: "AI Code Refactoring & Debugging",
          isCore: true,
          context: {
            en: "Improving React & TypeScript code quality and resolving issues faster",
            uz: "React va TypeScript kod sifatini oshirish hamda xatoliklarni tezkor bartaraf etish",
          },
        },
        {
          name: "Prompt Engineering",
          isCore: true,
          context: {
            en: "Structuring clear technical prompts for UI components and application features",
            uz: "UI komponentlar va dastur funksiyalari uchun aniq texnik promptlar bilan ishlash",
          },
        },
      ],
    },
    {
      id: "devops-tools",
      index: "04",
      title: {
        en: "DevOps & Developer Tools",
        uz: "DevOps va Ishchi Asboblar",
      },
      subtitle: {
        en: "Version control systems, collaborative code hosting, and frontend build tools.",
        uz: "Versiyalarni boshqarish tizimlari, jamoaviy ishlash va tezkor yig‘ish (build) vositalari.",
      },
      skills: [
        {
          name: "Git",
          isCore: true,
          context: {
            en: "Version control, branching workflows, and code history management",
            uz: "Versiyalarni boshqarish va tarmoqlangan kod tarixi bilan ishlash",
          },
        },
        {
          name: "GitHub",
          isCore: true,
          context: {
            en: "Repository management, code collaboration, and project deployment",
            uz: "Repozitoriylar boshqaruvi va jamoaviy ishlash",
          },
        },
        {
          name: "GitLab",
          isCore: true,
          context: {
            en: "Git repository hosting and collaborative development workflows",
            uz: "Git repozitoriylar va loyiha boshqaruvi",
          },
        },
        {
          name: "Vite",
          isCore: true,
          context: {
            en: "Fast modern frontend build tool and development server for React & TypeScript",
            uz: "React va TypeScript loyihalari uchun tezkor yig‘uvchi (bundler) va ishlab chiqish muhiti",
          },
        },
      ],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      id: "practical-frontend-experience",
      index: "01",
      period: {
        en: "8 Months Practical Experience",
        uz: "8 Oylik Amaliy Tajriba",
      },
      role: {
        en: "Front-End Developer",
        uz: "Front-End Developer",
      },
      organization: {
        en: "Frontend Development & Web Applications",
        uz: "Frontend Dasturlash va Web-Ilovalar",
      },
      location: {
        en: "Tashkent, Uzbekistan",
        uz: "Toshkent, O‘zbekiston",
      },
      type: {
        en: "Practical Experience",
        uz: "Amaliy Faoliyat",
      },
      summary: {
        en: "8 months of practical experience building modern web applications with React and TypeScript, integrating RESTful APIs, and developing high-quality user interfaces.",
        uz: "React va TypeScript yordamida zamonaviy web-ilovalar yaratish, REST API’larni integratsiya qilish va sifatli foydalanuvchi interfeyslarini ishlab chiqish bo‘yicha 8 oylik amaliy tajriba.",
      },
      highlights: {
        en: [
          "Developing modern, component-based user interfaces using React.js, JavaScript (ES6+), and TypeScript.",
          "Integrating RESTful APIs and managing asynchronous client-server data flows.",
          "Crafting responsive layouts with HTML5, CSS3, SASS, and Tailwind CSS, and utilizing AI tools to build interactive web projects such as CELLIX.",
        ],
        uz: [
          "React.js, JavaScript va TypeScript yordamida zamonaviy web-ilovalar va qulay foydalanuvchi interfeyslarini ishlab chiqish.",
          "REST Full API’larni frontendga integratsiya qilish va ma’lumotlar almashinuvini tashkil etish.",
          "HTML5, CSS3, SASS va Tailwind CSS orqali moslashuvchan (responsive) dizaynlar yaratish hamda AI vositalari yordamida CELLIX interaktiv loyihasini ishlab chiqish.",
        ],
      },
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "REST Full API",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "SASS",
        "Git / GitHub",
        "Vite",
        "AI Development",
      ],
    },
    {
      id: "open-for-opportunities",
      index: "02",
      isPlaceholder: true,
      period: {
        en: "Open for Opportunities • 2026",
        uz: "Yangi Imkoniyatlar Uchun Ochiq • 2026",
      },
      role: {
        en: "Official Employment Experience — Open for Opportunities",
        uz: "Rasmiy Ish Tajribasi — Yangi Imkoniyatlar Uchun Ochiq",
      },
      organization: {
        en: "Transparent Experience Representation",
        uz: "Haqqoniy Tajriba Ma’lumoti",
      },
      location: {
        en: "Tashkent / Remote",
        uz: "Toshkent / Masofaviy",
      },
      type: {
        en: "Transparent Profile",
        uz: "Ochiq Ma’lumot",
      },
      summary: {
        en: "In accordance with strict factual accuracy to my CV, no fabricated or fake company names are listed here. I am actively seeking a Front-End Developer role where I can contribute my React.js and TypeScript skills to real team projects.",
        uz: "Taqdim etilgan CV ma’lumotlariga to‘liq sodiq qolgan holda, bu yerda uydirma (soxta) ishxona va korxona nomlari keltirilmagan. Hozirda React.js, TypeScript va zamonaviy frontend bo‘yicha bilimlarimni real jamoaviy loyihalarda qo‘llash uchun Front-End Developer lavozimiga ochiqman.",
      },
      highlights: {
        en: [
          "Ready to contribute to production React.js and TypeScript projects.",
          "Strong focus on responsive UI development, REST API integration, and clean code.",
        ],
        uz: [
          "Production darajasidagi React.js va TypeScript loyihalarida ishlashga tayyor.",
          "Responsiv interfeyslar, REST Full API integratsiyasi va toza kod yozishga qat’iy e’tibor.",
        ],
      },
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "REST Full API",
        "Git / GitHub",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      id: "vatan-university",
      index: "01",
      institution: "Vatan University",
      program: {
        en: "Software Engineering — 2nd Year (Dasturiy Injinering 2-kurs)",
        uz: "Dasturiy Injinering 2-kurs",
      },
      period: {
        en: "2025 – Present",
        uz: "2025 – Hozirgi vaqt",
      },
      gpa: "3.8 / 5.0",
      status: {
        en: "2nd Year Undergraduate • Active",
        uz: "2-kurs Talabasi • Faol",
      },
      description: {
        en: "2nd-year university student in Software Engineering with a strong academic standing (GPA: 3.8 / 5.0).",
        uz: "Dasturiy injinering yo‘nalishi 2-kurs talabasi (GPA ko‘rsatkichi: 3.8 / 5.0).",
      },
    },
    {
      id: "najot-talim",
      index: "02",
      institution: "Najot Ta'lim",
      program: {
        en: "React Frontend Development",
        uz: "React Frontend",
      },
      period: {
        en: "03.2025 – 10.2025",
        uz: "03.2025 – 10.2025",
      },
      status: {
        en: "Completed Intensive Program",
        uz: "Tamomlangan",
      },
      description: {
        en: "Intensive specialization in modern frontend development with React.js, JavaScript, TypeScript, RESTful API integration, and component-driven UI engineering.",
        uz: "React.js, JavaScript, TypeScript, REST API integratsiyasi va zamonaviy frontend dasturlash bo‘yicha intensiv amaliy kurs.",
      },
    },
    {
      id: "it-park",
      index: "03",
      institution: "IT - PARK (CENTER)",
      program: {
        en: "Frontend Development",
        uz: "Frontend",
      },
      period: {
        en: "2022",
        uz: "2022 – 2022",
      },
      status: {
        en: "Foundational Program",
        uz: "Tamomlangan",
      },
      description: {
        en: "Foundational training in web development fundamentals, HTML5, CSS3, responsive layout structures, and JavaScript basics.",
        uz: "Web dasturlash asoslari, HTML5, CSS3, responsiv sahifalash va JavaScript bo‘yicha bazaviy ta’lim.",
      },
    },
  ] satisfies EducationItem[],

  languages: [
    {
      id: "uzbek",
      language: { en: "Uzbek", uz: "O‘zbek tili" },
      nativeName: "O'zbek tili",
      levelCode: "NATIVE",
      levelLabel: { en: "Native Speaker (Ona tili)", uz: "Ona tili" },
      proficiencyPercent: 100,
      note: {
        en: "Primary native language for professional and technical communication.",
        uz: "Kundalik va kasbiy muloqotda ona tili.",
      },
    },
    {
      id: "english",
      language: { en: "English", uz: "Ingliz tili" },
      nativeName: "English",
      levelCode: "B1",
      levelLabel: {
        en: "B1 — Intermediate",
        uz: "B1 — O‘rta (Intermediate)",
      },
      proficiencyPercent: 68,
      note: {
        en: "Technical documentation reading, code authoring, and professional communication.",
        uz: "Texnik hujjatlar bilan ishlash, kod yozish va kasbiy muloqot.",
      },
    },
    {
      id: "russian",
      language: { en: "Russian", uz: "Rus tili" },
      nativeName: "Русский язык",
      levelCode: "A2",
      levelLabel: {
        en: "A2 — Elementary",
        uz: "A2 — Boshlang‘ich (Elementary)",
      },
      proficiencyPercent: 42,
      note: {
        en: "Foundational conversational comprehension and basic communication.",
        uz: "Kundalik muloqot va asosiy tushunish darajasi.",
      },
    },
  ] satisfies LanguageItem[],
};
