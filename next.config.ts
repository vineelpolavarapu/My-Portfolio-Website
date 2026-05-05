import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compression ──────────────────────────────────────────────────────────
  compress: true,

  // ── Image Optimisation ───────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ── HTTP Security & Caching Headers ─────────────────────────────────────
  async headers() {
    return [
      // Applied to every route
      {
        source: "/(.*)",
        headers: [
          // Allow all robots (complements robots.txt)
          { key: "X-Robots-Tag", value: "index, follow" },

          // Clickjacking protection
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // MIME-type sniffing protection
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Referrer info sent on cross-origin requests
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Force HTTPS for 1 year (Vercel already enforces HTTPS, belt-and-braces)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          // Minimal CSP — allows Vercel analytics and Google Fonts
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://prod.spline.design https://*.spline.design https://unpkg.com",
              "media-src 'self' data: blob:",
              "worker-src 'self' blob:",
              "frame-ancestors 'none'",
            ].join("; "),
          },

          // Permissions policy — disable unused APIs to reduce attack surface
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },

      // Long-lived cache for Next.js static chunks (immutable hashed filenames)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // Cache public assets (images, fonts, svgs) for 30 days
      {
        source: "/(.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff2?|ttf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
