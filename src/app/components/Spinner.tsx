interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 64 }: SpinnerProps) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "2px solid rgba(255,255,255,0.07)" }}
      />
      <div
        className="absolute inset-0 rounded-full animate-spin"
        style={{
          border: "2px solid transparent",
          borderTopColor: "#3182CE",
          animationDuration: "900ms",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          inset: 8,
          border: "1.5px solid rgba(255,255,255,0.04)",
        }}
      />
      <div
        className="absolute rounded-full animate-spin"
        style={{
          inset: 8,
          border: "1.5px solid transparent",
          borderTopColor: "rgba(49,130,206,0.45)",
          animationDuration: "600ms",
          animationDirection: "reverse",
        }}
      />
    </div>
  );
}
