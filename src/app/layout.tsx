import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://my-portfolio-website-iota-ruddy.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default:
      "Vineel Kumar Polavarapu | Software Engineer — Python, FastAPI, Flask, Backend Development",
    template: "%s | Vineel Kumar Polavarapu",
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "Portfolio of Vineel Kumar Polavarapu, a Software Engineer from Hyderabad, India specialising in Python backend development, REST APIs, FastAPI, Flask, PostgreSQL, Docker, and scalable system design. MCA graduate actively seeking software engineering roles.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "Vineel Kumar Polavarapu",
    "Vineel Polavarapu",
    "Software Engineer Hyderabad",
    "Associate software engineer",
    "Entry level software engineer",
    "Python Backend Developer",
    "FastAPI Developer",
    "Flask Developer",
    "REST API Engineer",
    "Portfolio Website",
    "MCA Graduate",
    "Backend Developer India",
    "PostgreSQL Developer",
    "Docker Flask",
    "System Design Engineer",
    "Machine Learning Engineer",
    "Full Stack Python",
  ],

  // ── Author / Creator ───────────────────────────────────────────────────────
  authors: [{ name: "Vineel Kumar Polavarapu", url: BASE_URL }],
  creator: "Vineel Kumar Polavarapu",
  publisher: "Vineel Kumar Polavarapu",

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
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

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Vineel Kumar Polavarapu — Portfolio",
    title:
      "Vineel Kumar Polavarapu | Software Engineer — Python, FastAPI, Backend Development",
    description:
      "Portfolio of Vineel Kumar Polavarapu, a Software Engineer from Hyderabad specialising in Python, FastAPI, Flask, REST APIs, PostgreSQL and scalable backend systems.",
    // og:image is auto-injected by src/app/opengraph-image.tsx
  },

  // ── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "Vineel Kumar Polavarapu | Software Engineer — Python, FastAPI, Backend Development",
    description:
      "Portfolio of Vineel Kumar Polavarapu, Software Engineer from Hyderabad. Python | FastAPI | Flask | REST APIs | PostgreSQL | Docker.",
    // twitter:image is auto-injected by src/app/twitter-image.tsx
  },


  verification: {
    google: "QkblQfFeBKbVb49vDDGsCBf5ACUyVXfI47Sqv8Y6bfk",

  },
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Vineel Kumar Polavarapu",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/profile image.png`,
        width: 800,
        height: 1000,
      },
      jobTitle: "Software Engineer",
      description:
        "Software Engineer specialising in Python backend development, REST APIs, FastAPI, Flask, PostgreSQL, Docker, and scalable system design.",
      email: "itsmevineel43@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "D.N.R College of PG Courses",
          sameAs: "https://www.adikaviuniversity.ac.in/",
        },
      ],
      sameAs: [
        "https://github.com/vineelpolavarapu",
        "https://www.linkedin.com/in/vineelkumarpolavarapu/",
        "https://leetcode.com/u/vineel_polavarapu/",
      ],
      knowsAbout: [
        "Python",
        "FastAPI",
        "Flask",
        "REST API",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "System Design",
        "Machine Learning",
        "TensorFlow",
        "Data Structures & Algorithms",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Vineel Kumar Polavarapu — Portfolio",
      description:
        "Personal portfolio and project showcase of Vineel Kumar Polavarapu, Software Engineer from Hyderabad.",
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-950 text-gray-50 selection:bg-blue-500/30 selection:text-blue-200 relative`}
      >
        {children}
      </body>
    </html>
  );
}
