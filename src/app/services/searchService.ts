import { Result } from "../types";
import { MOCK_RESULTS } from "../data/mockResults";

// Read API key from Vite environment variables
const ZENSERP_API_KEY = import.meta.env.VITE_ZENSERP_API_KEY || "";
const BASE_URL = "/api/v2/search";

/**
 * Fetches search results from Zenserp API.
 * @param query The search query string
 */
export async function fetchSearchResults(query: string): Promise<Result[]> {
  // Fail explicitly if API key is not provided yet
  if (!ZENSERP_API_KEY) {
    throw new Error(
      "Zenserp API key (VITE_ZENSERP_API_KEY) is missing. Please create a '.env' file in the project root and define your key to connect the API."
    );
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "apikey": ZENSERP_API_KEY,
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("Invalid API key. Please check your VITE_ZENSERP_API_KEY configuration.");
      }
      throw new Error(`Zenserp API response error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.organic || !Array.isArray(data.organic)) {
      return [];
    }

    return data.organic.map((item: any, index: number): Result => {
      // Print item for visibility during setup in browser console
      console.log(`Zenserp item #${index + 1}:`, item);

      // Support both 'link' and 'url' API result keys
      const link = item.link || item.url || "";
      let displayUrl = link;
      
      if (link) {
        try {
          const urlObj = new URL(link);
          displayUrl = urlObj.hostname + (urlObj.pathname !== "/" ? urlObj.pathname : "");
          if (displayUrl.length > 50) {
            displayUrl = displayUrl.substring(0, 47) + "...";
          }
        } catch (e) {
          // Fallback display url
        }
      } else {
        displayUrl = "No source link available";
      }

      // Dynamic Classification Heuristic:
      // Group domains ending in educational/governmental TLDs or containing 'official' keyword as official
      const isOfficial = link.includes(".edu") || 
                         link.includes(".gov") || 
                         link.includes("official") || 
                         link.includes("ac.uk");
      
      const category = isOfficial ? "official" : "research";

      return {
        id: index + 1,
        title: item.title || "No Title",
        url: link,
        displayUrl: displayUrl,
        snippet: item.snippet || "No description available.",
        category: category,
      };
    });
  } catch (error) {
    console.error("Error calling Zenserp API:", error);
    throw error;
  }
}
