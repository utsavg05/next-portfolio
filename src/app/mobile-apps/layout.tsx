import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Apps",
  description:
    "Mobile applications built by Utsav Gupta using React Native and Expo.",
  alternates: {
    canonical: "/mobile-apps",
  },
  openGraph: {
    title: "Mobile Apps | Utsav Gupta",
    description:
      "Mobile applications built by Utsav Gupta using React Native and Expo.",
    url: "https://www.utsavworks.in/mobile-apps",
    siteName: "Utsav Gupta",
    type: "website",
    images: [{ url: "/og-image.png", width: 1307, height: 727 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Apps | Utsav Gupta",
    description:
      "Mobile applications built by Utsav Gupta using React Native and Expo.",
    images: ["/og-image.png"],
  },
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
