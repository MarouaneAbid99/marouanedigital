import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 64px",
          color: "#ecf1ff",
          backgroundColor: "#05080e",
          backgroundImage:
            "radial-gradient(860px 460px at 85% -10%, rgba(141,108,255,0.22), transparent 70%), radial-gradient(720px 420px at 15% -10%, rgba(77,127,255,0.2), transparent 70%)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "12px",
              border: "1px solid rgba(132,154,201,0.35)",
              background: "rgba(11,18,32,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              letterSpacing: "0.2em"
            }}
          >
            MD
          </div>
          <p style={{ margin: 0, fontSize: "23px", letterSpacing: "0.14em" }}>{siteConfig.name}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "930px" }}>
          <h1 style={{ margin: 0, fontSize: "74px", lineHeight: 1.04 }}>
            Digital Product Builder for SaaS and AI Teams
          </h1>
          <p style={{ margin: 0, color: "rgba(176,188,211,0.95)", fontSize: "30px", lineHeight: 1.3 }}>
            Product strategy, premium interface systems, and production-grade frontend delivery.
          </p>
        </div>

        <p style={{ margin: 0, color: "rgba(176,188,211,0.85)", fontSize: "24px" }}>marouanedigital.com</p>
      </div>
    ),
    size
  );
}
