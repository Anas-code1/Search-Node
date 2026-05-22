export type AppState = "initial" | "loading" | "results";
export type Filter = "all" | "official" | "research";

export interface Result {
  id: number;
  title: string;
  url: string;
  displayUrl: string;
  snippet: string;
  category: "official" | "research";
}
