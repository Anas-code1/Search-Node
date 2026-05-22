import { useState } from "react";
import { AppState, Filter, Result } from "./types";
import { fetchSearchResults } from "./services/searchService";
import { InitialFrame } from "./components/InitialFrame";
import { LoadingFrame } from "./components/LoadingFrame";
import { ResultsFrame } from "./components/ResultsFrame";

export default function App() {
  const [appState, setAppState] = useState<AppState>("initial");
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const filteredResults = results.filter(
    (r) => activeFilter === "all" || r.category === activeFilter
  );

  const triggerSearch = async (query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    
    setInputValue(trimmedQuery);
    setAppState("loading");
    setError(null);
    setIsSearching(true);
    
    try {
      const apiResults = await fetchSearchResults(trimmedQuery);
      setResults(apiResults);
      setAppState("results");
    } catch (err: any) {
      console.error("Search failed:", err);
      setError(err.message || "An unexpected error occurred while searching.");
      setResults([]);
      setAppState("results");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      triggerSearch(inputValue);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#121212",
        color: "#FFFFFF",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {appState === "initial" && (
        <InitialFrame
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearch={handleSearch}
        />
      )}
      {appState === "loading" && (
        <LoadingFrame query={inputValue} />
      )}
      {appState === "results" && (
        <ResultsFrame
          query={inputValue}
          setInputValue={setInputValue}
          onSearch={handleSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filteredResults={filteredResults}
          error={error}
        />
      )}
    </div>
  );
}
