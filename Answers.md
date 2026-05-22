1. How to run
   live link: https://search-node.vercel.app
   locally: run npm install, get Zenserp Api key, put your api key in .env file  VITE_ZENSERP_API_KEY=your_api_key_here , then run npm run dev


2. why I choose React.js for this project
   The core requirement of this project is straightforward: fetch data from a public API and present it. Because there is no need for a complex backend, database, or heavy server-side logic, a massive full-stack framework would be overkill.
   While this could theoretically be built using just a single plain HTML/JavaScript file, I chose **React (with Vite)** to properly structure the application.
   I paired this with **Vite** because it provides a blazing-fast local development environment and allowed me to easily configure a local server proxy to securely handle API routing without running into CORS errors during development.


3. One real edge case --->  marlformed urls  given in responce by the Zenserp Api crashes the data formatter
   file and line ------> i used url formatter new URL() which makes website links look pretty `src/app/services/searchService.ts`, Lines 52-61 (the `try/catch` block around `new URL(link)`).
   without handling this edge case: Because this formatting happens inside a `.map()` function looping over the `data.organic` array, an unhandled `TypeError` on just *one* bad result would abort the entire mapping process. This would cause the entire search request to fail and show an error screen to the user, meaning they see zero results even if the other 9 search results were perfectly valid. 
   By wrapping it in a scoped `try/catch`, the app safely intercepts the error and defaults to displaying the raw, unformatted link for that specific bad item, while allowing the rest of the search results to render perfectly.


4. AI Usage
   1. Figma Make (UI Generation)
   I used Figma Make for rapid prototyping to generate the initial UI and Tailwind CSS styling from my design. However, as is typical with UI generators, the output was a massive, unstructured monolithic `App.tsx` file that lacked separation of concerns.
   2. AntiGravity (Code Refactoring & Structuring)
   To fix the monolithic structure provided by Figma Make, I used AntiGravity as a refactoring assistant. I prompted it to help me extract the UI sections into proper, modular React components and establish a clean, maintainable project architecture. 
   3.My Contributions: 
   While AI heavily accelerated the UI boilerplate and CSS, the core logic required by this assignment was implemented manually. I personally wrote and wired up the `searchService.ts`, managed the React state transitions (Loading, Error, Success), implemented the `try/catch` error boundaries, and built the custom logic to categorize the search results.

5. Client Side Api Key Exposure
   In this project Api key can be seen easily through inspection.
   Making the api calls in the backend would be great hiding the crucial data.
   
   
