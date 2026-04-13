import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Reuses the same design as opengraph-image — Twitter/X card */
export { default } from "./opengraph-image";
