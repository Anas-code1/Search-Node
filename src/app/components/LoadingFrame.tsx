import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { Spinner } from "./Spinner";
import { RobotScanIllustration } from "./icons/RobotScanIllustration";

interface LoadingFrameProps {
  query: string;
}

export function LoadingFrame({ query }: LoadingFrameProps) {
  return (
    <div
      className="flex flex-col items-center px-5"
      style={{ minHeight: "100vh", paddingTop: "10vh" }}
    >
      {/* Header strip */}
      <div className="w-full flex justify-between items-center mb-10" style={{ maxWidth: 800 }}>
        <Logo />
      </div>

      {/* Disabled search bar */}
      <div className="w-full mb-16" style={{ maxWidth: 800 }}>
        <SearchBar value={query} disabled loading showButton={false} />
      </div>

      {/* Spinner */}
      <Spinner size={64} />

      {/* Robot illustration */}
      <div className="mt-8 opacity-70">
        <RobotScanIllustration />
      </div>

      {/* Status text */}
      <p
        className="mt-6 text-[18px] font-light text-center leading-relaxed"
        style={{ color: "#FFFFFF" }}
      >
        Searching the web&hellip; Finding your insights.
      </p>
      <p className="mt-2 text-[13px]" style={{ color: "#555555" }}>
        Querying Zenserp API for &ldquo;{query}&rdquo;
      </p>
    </div>
  );
}
