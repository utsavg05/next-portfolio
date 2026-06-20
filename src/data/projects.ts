export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  repoUrl?: string;
  tech: string[];
  category: "web" | "mobile";
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Scribely (630+ users)",
    description:
      "All-in-one AI study toolkit for students and learners. It turns your YouTube lectures, long PDFs, or any study content into handwritten notes, flashcards, quizzes, cheat sheets and more in seconds.",
    image: "/scribely.webp",
    link: "https://scribely.site",
    tech: ["Next.Js", "Typescript", "NeonDB", "Prisma", "GenAI"],
    category: "web",
    featured: true,
  },
  {
    title: "SnipHub",
    description:
      "A platform to share, explore, and manage code snippets with ease.",
    image: "/sniphub.webp",
    link: "https://sniphub.utsavworks.in",
    repoUrl: "https://github.com/utsavg05/snip-it",
    tech: ["Next.Js", "Typescript", "Supabase", "Drizzle ORM"],
    category: "web",
    featured: true,
  },
  {
    title: "QuickPoll",
    description:
      "Create and share polls instantly. No sign-up required. See results in real-time.",
    image: "/quickpoll.webp",
    link: "https://quickpoll.utsavworks.in/",
    tech: ["Next.Js", "Typescript", "Supabase"],
    category: "web",
    featured: true,
  },
  {
    title: "Zync",
    description: "Real-time chat app with instant messaging.",
    image: "/zync.webp",
    link: "https://zync-three.vercel.app",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "web",
    featured: true,
  },
  // {
  //   title: "Smriti AI",
  //   description: "All-in-one learning assistant powered by AI.",
  //   image: "/smritiAi.jpg",
  //   link: "https://www.smriti.live/",
  //   tech: ["Next.js", "TypeScript", "Gemini API", "Supabase"],
  //   category: "web",
  //   featured: false,
  // },
  {
    title: "JobSeek",
    description: "MERN job portal with role-based access.",
    image: "/jobseek-webp.webp",
    link: "https://jobseek-ete7.onrender.com/",
    repoUrl: "https://github.com/utsavg05/Job-Portal",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "web",
    featured: false,
  },
  {
    title: "Safarnama",
    description: "A destination discovery and booking app.",
    image: "/safarnama.png",
    link: "https://youtube.com/shorts/N6S4_Th7-ko?feature=share",
    repoUrl: "https://github.com/utsavg05/travel_app",
    tech: ["React Native", "Expo", "Zustand"],
    category: "mobile",
    featured: false,
  },
  {
    title: "Streakify",
    description:
      "A habit tracking app that gamifies your daily routines with streaks and rewards.",
    image: "/streakify.png",
    link: "https://youtube.com/shorts/QR1fqkbL25U?feature=share",
    tech: ["React Native", "Expo", "Neon DB"],
    category: "mobile",
    featured: false,
  },
  {
    title: "Futurme-OS",
    description:"A gamified life simulation app where you track habits like sleep, spending, study, and fitness to shape your future. Simulate outcomes, complete quests, earn XP, and unlock badges to improve your Future Self.",
    image: "/futuremeos.png",
    link: "https://www.youtube.com/shorts/Jb6HpmL0iOk",
    tech: ["React Native", "Expo", "Neon DB"],
    category: "mobile",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const webProjects = projects.filter((p) => p.category === "web");
export const mobileProjects = projects.filter((p) => p.category === "mobile");
