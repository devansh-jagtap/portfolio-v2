import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devanshjagtap.me"),

  title: {
    default: "Devansh Jagtap | Full Stack Developer & AI Engineer",
    template: "%s | Devansh Jagtap",
  },

  description:
    "Devansh Jagtap is a Full Stack Developer and AI Engineer building AI-powered SaaS products using Next.js, React, Node.js, TypeScript, Python, RAG, and LLMs.",

  keywords: [
    "Devansh Jagtap",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "MERN",
    "RAG",
    "Portfolio",
  ],

  creator: "Devansh Jagtap",

  authors: [
    {
      name: "Devansh Jagtap",
      url: "https://devanshjagtap.me",
    },
  ],

  alternates: {
    canonical: "https://devanshjagtap.me",
  },

  openGraph: {
    title: "Devansh Jagtap | Full Stack Developer & AI Engineer",

    description:
      "Portfolio of Devansh Jagtap showcasing AI-powered SaaS projects, MERN applications, and modern web development.",

    url: "https://devanshjagtap.me",

    siteName: "Devansh Jagtap",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devansh Jagtap Portfolio",
      },
    ],
  },
  

  twitter: {
    card: "summary_large_image",

    title: "Devansh Jagtap | Full Stack Developer & AI Engineer",

    description:
      "Building AI-powered SaaS applications using Next.js, React, Node.js, Python, and LLMs.",

    creator: "@devansh_jagtap",

    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: "Devansh Jagtap",

  url: "https://devanshjagtap.me",

  jobTitle: "Full Stack Developer & AI Engineer",

  description:
    "Full Stack Developer and AI Engineer specializing in Next.js, React, Node.js, TypeScript, Python, RAG, AI Agents, and SaaS products.",

  image: "https://devanshjagtap.me/dp.png",

  sameAs: [
    "https://github.com/devansh-jagtap",
    "https://www.linkedin.com/in/devansh-jagtap-9a9167259/",
    "https://x.com/devansh_jagtap",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}