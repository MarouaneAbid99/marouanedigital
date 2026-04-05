import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";

export const size = {
  width: 1200,
  height: 600
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "44px 56px",
          color: "#ecf1ff",
          backgroundColor: "#05080e",
          backgroundImage:
            "radial-gradient(760px 420px at 85% -20%, rgba(141,108,255,0.2), transparent 70%), radial-gradient(700px 400px at 12% -20%, rgba(77,127,255,0.2), transparent 70%)"
        }}
      >
        <p style={{ margin: 0, fontSize: "20px", letterSpacing: "0.12em" }}>{siteConfig.name}</p>
        <h1 style={{ margin: 0, maxWidth: "840px", fontSize: "62px", lineHeight: 1.08 }}>
          Digital Product Builder for SaaS and AI products
        </h1>
        <p style={{ margin: 0, color: "rgba(176,188,211,0.92)", fontSize: "26px" }}>marouanedigital.com</p>
      </div>
    ),
    size
  );
}
