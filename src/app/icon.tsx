import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generated favicon — nebula gradient tile with an "SK" monogram.
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
          borderRadius: 14,
          color: "white",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(135deg, #7c5cff 0%, #4aa8ff 55%, #8a4dff 100%)",
        }}
      >
        SK
      </div>
    ),
    { ...size }
  );
}
