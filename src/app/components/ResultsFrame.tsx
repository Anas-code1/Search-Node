import { Result, Filter } from "../types";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { ResultCard } from "./ResultCard";

interface ResultsFrameProps {
  query: string;
  setInputValue: (v: string) => void;
  onSearch: () => void;
  activeFilter: Filter;
  setActiveFilter: (f: Filter) => void;
  filteredResults: Result[];
  error?: string | null;
}

export function ResultsFrame({
  query,
  setInputValue,
  onSearch,
  activeFilter,
  setActiveFilter,
  filteredResults,
  error,
}: ResultsFrameProps) {
  return (
    <div
      className="flex flex-col items-center px-5 pb-20"
      style={{ paddingTop: "10vh" }}
    >
      {/* Header strip */}
      <div
        className="w-full flex justify-between items-center mb-8"
        style={{ maxWidth: 800 }}
      >
        <Logo />
      </div>

      {/* Active search bar */}
      <div className="w-full mb-4" style={{ maxWidth: 800 }}>
        <SearchBar
          value={query}
          onChange={setInputValue}
          onSearch={onSearch}
          showButton
        />
      </div>

      {/* Filter toolbar */}
      <div
        className="w-full flex items-center justify-between mb-5"
        style={{ maxWidth: 800 }}
      >
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
        <span className="text-[13px]" style={{ color: "#AAAAAA" }}>
          {!error && `${filteredResults.length} result${filteredResults.length !== 1 ? "s" : ""} found`} for &lsquo;{query}&rsquo;
        </span>
      </div>

      {/* Results or Error Display */}
      <div
        className="w-full flex flex-col gap-3"
        style={{ maxWidth: 800 }}
      >
        {error ? (
          <div
            className="rounded-[12px] px-6 py-10 text-center flex flex-col items-center gap-3"
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              color: "#EF4444",
            }}
          >
            <span className="text-3xl">⚠️</span>
            <h3 className="font-semibold text-lg text-white">Search Connection Error</h3>
            <p className="text-sm text-[#AAAAAA] max-w-md leading-relaxed">
              {error}
            </p>
          </div>
        ) : filteredResults.length > 0 ? (
          filteredResults.map((result, i) => (
            <ResultCard key={result.id} result={result} index={i} />
          ))
        ) : (
          <div
            className="rounded-[12px] px-5 py-10 text-center"
            style={{
              background: "#1E1E1E",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#555555",
            }}
          >
            No results in this category.
          </div>
        )}
      </div>
    </div>
  );
}
