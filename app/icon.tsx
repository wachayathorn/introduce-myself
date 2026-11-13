import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E6E6E6",
          color: "#4A4A4A",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 16,
        }}
      >
        WS
      </div>
    ),
    { ...size },
  );
}
