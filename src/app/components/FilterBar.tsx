import { Filter } from "../types";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "official", label: "Official Sites" },
  { key: "research", label: "Research" },
];

interface FilterBarProps {
  active: Filter;
  onChange: (f: Filter) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-1">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 cursor-pointer select-none"
          style={{
            background:
              active === f.key ? "#3182CE" : "rgba(255,255,255,0.05)",
            color: active === f.key ? "#FFFFFF" : "#AAAAAA",
            border:
              active === f.key
                ? "1px solid #3182CE"
                : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
