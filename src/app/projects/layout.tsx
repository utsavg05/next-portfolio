import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A collection of web apps, mobile apps, and everything in between — built by Utsav Gupta with Next.js, React and React Native.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "All Projects | Utsav Gupta",
    description:
      "A collection of web apps, mobile apps, and everything in between — built by Utsav Gupta.",
    url: "https://www.utsavworks.in/projects",
    siteName: "Utsav Gupta",
    type: "website",
    images: [{ url: "/og-image.png", width: 1307, height: 727 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Projects | Utsav Gupta",
    description:
      "A collection of web apps, mobile apps, and everything in between — built by Utsav Gupta.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
