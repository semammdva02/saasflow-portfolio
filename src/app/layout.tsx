import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaSFlow — AI-powered workflow automation",
  description:
    "A modern SaaS workflow platform that helps teams automate repetitive work and move faster.",
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
