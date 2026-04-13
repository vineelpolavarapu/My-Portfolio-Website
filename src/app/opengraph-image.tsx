import { ImageResponse } from "next/og";

// Runtime: edge → near-zero cold start, served by Vercel's Edge Network
export const runtime = "edge";

// Exact OG spec dimensions
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates /opengraph-image.png at build time (and on-demand via edge).
 * Referenced automatically by Next.js for og:image & twitter:image.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f172a 0%, #0c1225 60%, #0a0e1f 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Decorative glowing circles ─────────────────────────── */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "150px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* ── Grid lines (right side decoration) ────────────────── */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "480px",
            height: "630px",
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
          }}
        />

        {/* ── Main content ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
            flex: 1,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.35)",
                borderRadius: "999px",
                padding: "6px 18px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#34d399",
                }}
              />
              <span
                style={{
                  color: "#93c5fd",
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                Available for Opportunities
              </span>
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              maxWidth: "700px",
            }}
          >
            Vineel Kumar
            <br />
            Polavarapu
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "30px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "36px",
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer
          </div>

          {/* Tech stack pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Python", "FastAPI", "Flask", "PostgreSQL", "Docker"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "999px",
                    padding: "6px 18px",
                    color: "#93c5fd",
                    fontSize: "17px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: "44px",
              color: "#64748b",
              fontSize: "18px",
              letterSpacing: "0.01em",
            }}
          >
            📍 Hyderabad, Telangana, India
          </div>
        </div>

        {/* ── Bottom border accent ───────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #6366f1)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
