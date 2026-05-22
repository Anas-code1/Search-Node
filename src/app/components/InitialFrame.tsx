import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

interface InitialFrameProps {
  inputValue: string;
  setInputValue: (v: string) => void;
  onSearch: () => void;
}

export function InitialFrame({
  inputValue,
  setInputValue,
  onSearch,
}: InitialFrameProps) {
  return (
    <div
      className="flex flex-col items-center justify-center px-5"
      style={{ minHeight: "100vh" }}
    >
      <Logo />

      <div className="mt-14 w-full" style={{ maxWidth: 800 }}>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={onSearch}
          showButton
        />
        <p
          className="mt-4 text-center text-[12px]"
          style={{ color: "#3a3a3a" }}
        >
          Powered by ZenSerp API; Built with ReactJs
        </p>
      </div>
    </div>
  );
}
