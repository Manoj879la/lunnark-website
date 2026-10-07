import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LunnArk — Lighting Beyond Spaces",
  description:
    "LunnArk creates integrated LED lighting solutions where design, engineering and manufacturing work as one.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
