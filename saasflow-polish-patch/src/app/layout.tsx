import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://saasflow-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SaaSFlow — AI Workflow Automation",
    template: "%s | SaaSFlow",
  },
  description: "A portfolio-grade SaaS landing page built with Next.js, TypeScript and Tailwind CSS.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Frontend Developer", "SaaS", "UI Development"],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "SaaSFlow — AI Workflow Automation",
    description: "A portfolio-grade SaaS landing page built with Next.js, TypeScript and Tailwind CSS.",
    siteName: "SaaSFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSFlow — AI Workflow Automation",
    description: "A portfolio-grade SaaS frontend built with Next.js, TypeScript and Tailwind CSS.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
