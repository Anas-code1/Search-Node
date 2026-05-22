import { Result } from "../types";

interface ResultCardProps {
  result: Result;
  index: number;
}

export function ResultCard({ result, index }: ResultCardProps) {
  return (
    <div
      className="group rounded-[12px] px-5 py-4 transition-all duration-150 cursor-pointer"
      style={{
        background: "#1E1E1E",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(49,130,206,0.3)";
        (e.currentTarget as HTMLDivElement).style.background = "#222222";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.background = "#1E1E1E";
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 mt-0.5 text-[11px] font-mono tabular-nums leading-none pt-[2px]"
          style={{ color: "#444444", minWidth: "16px" }}
        >
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <a
            href={result.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium leading-snug block mb-1 hover:underline"
            style={{ color: result.url ? "#3182CE" : "#888888" }}
            onClick={(e) => {
              if (!result.url || result.url === "#") {
                e.preventDefault();
                console.warn("Result link URL is empty/invalid. Navigation prevented.");
              }
            }}
          >
            {result.title}
          </a>
          <p
            className="text-[12px] mb-2 truncate"
            style={{ color: "#AAAAAA" }}
          >
            {result.displayUrl}
          </p>
          <p
            className="text-[13.5px] leading-[1.65]"
            style={{ color: "#CCCCCC" }}
          >
            {result.snippet}
          </p>
        </div>
      </div>
    </div>
  );
}
