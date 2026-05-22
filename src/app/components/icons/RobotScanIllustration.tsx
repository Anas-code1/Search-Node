export function RobotScanIllustration() {
  return (
    <svg
      width="180"
      height="130"
      viewBox="0 0 180 130"
      fill="none"
      aria-label="AI scanning documents"
    >
      {/* Left document */}
      <rect
        x="4"
        y="30"
        width="38"
        height="48"
        rx="3"
        stroke="#AAAAAA"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      {[37, 43, 49, 55, 61].map((y, i) => (
        <line
          key={i}
          x1="12"
          y1={y}
          x2={i % 2 === 0 ? 36 : 32}
          y2={y}
          stroke="#AAAAAA"
          strokeWidth="0.8"
          strokeOpacity="0.28"
        />
      ))}
      {/* Scan beam left */}
      <line
        x1="43"
        y1="54"
        x2="54"
        y2="54"
        stroke="#3182CE"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <polygon points="52,50 62,54 52,58" fill="#3182CE" fillOpacity="0.35" />

      {/* Robot head */}
      <rect
        x="65"
        y="18"
        width="50"
        height="46"
        rx="9"
        stroke="#3182CE"
        strokeWidth="1.5"
        fill="#3182CE"
        fillOpacity="0.04"
      />
      {/* Eyes */}
      <rect
        x="76"
        y="32"
        width="11"
        height="9"
        rx="2.5"
        fill="#3182CE"
        fillOpacity="0.65"
      />
      <rect
        x="93"
        y="32"
        width="11"
        height="9"
        rx="2.5"
        fill="#3182CE"
        fillOpacity="0.65"
      />
      <rect
        x="78"
        y="34"
        width="3"
        height="2.5"
        rx="0.8"
        fill="white"
        fillOpacity="0.55"
      />
      <rect
        x="95"
        y="34"
        width="3"
        height="2.5"
        rx="0.8"
        fill="white"
        fillOpacity="0.55"
      />
      {/* Mouth */}
      <rect
        x="79"
        y="50"
        width="22"
        height="3"
        rx="1.5"
        fill="#3182CE"
        fillOpacity="0.35"
      />
      {/* Antenna */}
      <line
        x1="90"
        y1="18"
        x2="90"
        y2="9"
        stroke="#3182CE"
        strokeWidth="1.5"
        strokeOpacity="0.65"
      />
      <circle cx="90" cy="7" r="3.2" fill="#3182CE" fillOpacity="0.75" />
      {/* Body */}
      <rect
        x="72"
        y="66"
        width="36"
        height="24"
        rx="5"
        stroke="#3182CE"
        strokeWidth="1.2"
        fill="none"
        strokeOpacity="0.45"
      />
      <rect
        x="81"
        y="73"
        width="18"
        height="4"
        rx="1.5"
        fill="#3182CE"
        fillOpacity="0.2"
      />
      <rect
        x="84"
        y="81"
        width="12"
        height="3"
        rx="1.2"
        fill="#3182CE"
        fillOpacity="0.15"
      />
      {/* Legs */}
      <rect
        x="76"
        y="91"
        width="9"
        height="14"
        rx="2.5"
        stroke="#3182CE"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.3"
      />
      <rect
        x="95"
        y="91"
        width="9"
        height="14"
        rx="2.5"
        stroke="#3182CE"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.3"
      />

      {/* Right document */}
      <rect
        x="138"
        y="30"
        width="38"
        height="48"
        rx="3"
        stroke="#AAAAAA"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      {[37, 43, 49, 55, 61].map((y, i) => (
        <line
          key={i}
          x1="146"
          y1={y}
          x2={i % 2 === 0 ? 170 : 166}
          y2={y}
          stroke="#AAAAAA"
          strokeWidth="0.8"
          strokeOpacity="0.28"
        />
      ))}
      {/* Scan beam right */}
      <line
        x1="137"
        y1="54"
        x2="126"
        y2="54"
        stroke="#3182CE"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <polygon points="128,50 118,54 128,58" fill="#3182CE" fillOpacity="0.35" />

      {/* Data stream dots */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={72 - i * 10}
          cy={54}
          r="1.5"
          fill="#3182CE"
          fillOpacity={0.6 - i * 0.12}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={108 + i * 10}
          cy={54}
          r="1.5"
          fill="#3182CE"
          fillOpacity={0.6 - i * 0.12}
        />
      ))}
    </svg>
  );
}
