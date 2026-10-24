import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0E14",
          color: "#36BABA",
          fontSize: "17px",
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        AR
      </div>
    ),
    size
  )
}
