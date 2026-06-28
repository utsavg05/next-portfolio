import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Utsav Gupta | Full Stack Developer",
    short_name: "Utsav Gupta",
    description:
      "Utsav Gupta is a Full-Stack Developer based in India specializing in building SaaS, web apps, mobile apps, AI agents and automations.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
