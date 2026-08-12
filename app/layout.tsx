import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truth Index Systems — Engineering Intelligent Software",
  description: "Truth Index Systems engineers intelligent software, proprietary technologies and bespoke business systems. Built on Truth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
