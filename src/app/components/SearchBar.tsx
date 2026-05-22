import { KeyboardEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange?: (v: string) => void;
  onSearch?: () => void;
  disabled?: boolean;
  loading?: boolean;
  showButton?: boolean;
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  disabled = false,
  loading = false,
  showButton = true,
}: SearchBarProps) {
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) onSearch();
  };

  return (
    <div className="flex gap-3 w-full">
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base select-none pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={handleKey}
          disabled={disabled}
          placeholder="Enter your query to begin searching, e.g., 'PUCIT'..."
          className="w-full h-[52px] pl-11 pr-5 text-[15px] rounded-[12px] outline-none transition-all duration-200 placeholder-[#444]"
          style={{
            background: disabled ? "#333333" : "#1E1E1E",
            border: disabled
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(255,255,255,0.10)",
            color: disabled ? "#888888" : "#FFFFFF",
            boxShadow: disabled
              ? "none"
              : "0 0 0 0px #3182CE",
          }}
        />
        {loading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <div
              className="w-4 h-4 rounded-full animate-spin shrink-0"
              style={{
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderTopColor: "#3182CE",
                animationDuration: "800ms",
              }}
            />
          </div>
        )}
      </div>
      {showButton && (
        <button
          onClick={onSearch}
          disabled={disabled}
          className="h-[52px] px-7 font-medium text-[15px] rounded-[12px] transition-all duration-150 shrink-0 cursor-pointer select-none"
          style={{
            background: disabled ? "#1a3a5c" : "#3182CE",
            color: disabled ? "rgba(255,255,255,0.4)" : "#FFFFFF",
            opacity: disabled ? 0.6 : 1,
          }}
        >
          Search
        </button>
      )}
    </div>
  );
}
