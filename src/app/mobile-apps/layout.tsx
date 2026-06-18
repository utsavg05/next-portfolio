import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Apps | Utsav Gupta",
  description:
    "Mobile applications built by Utsav Gupta using React Native and Expo.",
  openGraph: {
    title: "Mobile Apps | Utsav Gupta",
    description:
      "Mobile applications built by Utsav Gupta using React Native and Expo.",
    url: "https://www.utsavworks.in/mobile-apps",
    type: "website",
  },
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
