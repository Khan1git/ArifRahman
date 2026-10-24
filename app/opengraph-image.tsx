import { ImageResponse } from "next/og"
import { site } from "@/lib/site-data"

export const runtime = "edge"

export const alt =
  "Arif Rahman — Full Stack Developer & Web Security Researcher"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0A0E14 0%, #0F1722 100%)",
          padding: "72px",
          color: "#E8EAED",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              border: "1px solid #243041",
              background: "#111823",
              color: "#36BABA",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            AR
          </div>
          <div style={{ fontSize: "24px", color: "#9AA6B5" }}>
            arif-rahman.vercel.app
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "70px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: "940px",
          }}
        >
          <div>Web apps that work.</div>
          <div style={{ color: "#36BABA" }}>And hold up under attack.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #243041",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "30px", fontWeight: 600 }}>Arif Rahman</div>
            <div style={{ fontSize: "20px", color: "#9AA6B5" }}>
              Full Stack Developer &amp; Web Security Researcher
            </div>
          </div>
          <div style={{ fontSize: "20px", color: "#36BABA" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  )
}
