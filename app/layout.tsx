import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.truthindexsystems.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Truth Index Systems — Engineering Intelligent Software",
    template: "%s — Truth Index Systems",
  },
  description:
    "Truth Index Systems engineers intelligent software, proprietary technologies and engineering solutions. Built on Truth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Truth Index Systems — Engineering Intelligent Software",
    description: "Proprietary technology. Production software. Engineering solutions. Built on Truth.",
    url: siteUrl,
    siteName: "Truth Index Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truth Index Systems — Engineering Intelligent Software",
    description: "Proprietary technology. Production software. Engineering solutions. Built on Truth.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
