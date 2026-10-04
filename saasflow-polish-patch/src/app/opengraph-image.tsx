import { ImageResponse } from "next/og";

export const alt = "SaaSFlow — AI Workflow Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "#07111f", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px" }}>
        <div style={{ color: "#67e8f9", fontSize: 26, marginBottom: 24 }}>✦ SaaSFlow</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>AI workflow automation.</div>
        <div style={{ color: "#94a3b8", fontSize: 30, marginTop: 28 }}>Next.js · TypeScript · Tailwind CSS</div>
        <div style={{ color: "#64748b", fontSize: 22, marginTop: 64 }}>Portfolio concept by Sema Memmedova</div>
      </div>
    ),
    { ...size },
  );
}
