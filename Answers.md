
## 1. How to Run

**Live link:** https://search-node.vercel.app

**To run locally:**

1. Clone the repository and navigate into the project folder
2. Run `npm install` to install dependencies
3. Obtain a [Zenserp API key](https://zenserp.com)
4. Create a `.env` file in the project root and add:
   ```
   VITE_ZENSERP_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```
   npm run dev
   ```

---

## 2. Stack Choice

**Chosen stack: React (with Vite)**

The core requirement is straightforward — fetch data from a public API and display it. There is no need for a complex backend, database, or server-side logic, so a full-stack framework would be overkill.

While this could technically be built with a single plain HTML/JavaScript file, **React with Vite** was chosen to properly structure the application into maintainable, modular components.

**Why Vite specifically:** It provides a blazing-fast local development environment and makes it easy to configure a local server proxy — this handles API routing securely and avoids CORS errors during development.

**A worse choice would have been:** A plain HTML/JS file. While it would work for a small prototype, it lacks component reusability, proper state management, and would become unmaintainable as the codebase grows.

---

## 3. One Real Edge Case

**Edge case: Malformed URLs returned by the Zenserp API**

**File & location:** `src/app/services/searchService.ts`, Lines 52–61 (the `try/catch` block around `new URL(link)`)

**What the code does:** A URL formatter using `new URL()` is applied to make website links look clean and readable.

**The problem:** The Zenserp API occasionally returns malformed URLs in its response. Passing a bad URL into `new URL()` throws a `TypeError`.

**What would happen without this handling:** Since the formatting runs inside a `.map()` over the `data.organic` array, a single unhandled error would abort the *entire* mapping process. This means the user would see a full error screen with **zero results**, even if the other 9 out of 10 results were perfectly valid.

**How it's handled:** By wrapping the formatter in a scoped `try/catch`, the app safely intercepts the error for the bad item, falls back to displaying the raw unformatted link, and allows all remaining results to render correctly.

---

## 4. AI Usage

Three AI tools were used across different phases of the project.

### 4.1 Figma Make — Initial UI Generation

**What I asked:** Generated the initial UI layout and Tailwind CSS styling from a design mockup.

**What it gave me:** A working visual foundation, but output as a single massive, unstructured `App.tsx` file with no separation of concerns.

**What I changed:** The monolithic structure was entirely refactored — see section 4.2 below.

---

### 4.2 AntiGravity — Code Refactoring & Architecture

**What I asked:** Prompted it to extract UI sections into proper, modular React components and establish a clean, maintainable project architecture.

**What it gave me:** A well-structured component hierarchy that resolved the mess left by Figma Make.

---

### 4.3 AntiGravity — Resolving Vercel Deployment 404 / CORS Issues

**Problem:** The app worked perfectly in local development using Vite's proxy rules (`/api/*`), but threw a `404 Not Found` error after deploying to Vercel.

**What AI diagnosed:** Vite's development server proxy does not run in a production static site environment. When deployed, Vercel serves the SPA statically, so `/api/v2/search` requests hit a non-existent route on Vercel's CDN rather than being proxied to the Zenserp API.

**Solution provided:** Configured a `vercel.json` rewrites rule to forward API requests to the external Zenserp endpoint at the Vercel level, replicating the local proxy behaviour in production.

---

### 4.4 AntiGravity — Custom Favicon Design

**Problem:** The app was using the default Vite icon — no custom browser tab branding.

**What AI did:**
- Extracted the core SVG path parameters from `NodeIcon.tsx`
- Created a standalone optimised SVG at `public/favicon.svg`, adjusting circle radius, stroke opacity, and line weights for sharp rendering at 16×16 / 32×32 sizes
- Updated `index.html` to link the favicon and set the tab title:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <title>SearchNode</title>
  ```

---

## 5. Known Limitation — Client-Side API Key Exposure

The API key is currently bundled into the frontend build and is visible through browser DevTools inspection. This is acceptable for a prototype but is **not production-safe**.

**Proper fix:** Move API calls to a lightweight backend (e.g. a Vercel serverless function). The key would live in a server-side environment variable, never reaching the client.
