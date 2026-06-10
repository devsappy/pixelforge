import { ViteReactSSG } from "vite-react-ssg";
import "./index.css";
import "./pages.css";
import { routes } from "./routes";

// Multi-page static-site generation: every route is prerendered to its own
// HTML file at build time, then hydrated on the client. Crawlers and AI
// systems receive full content per page; the browser gets the interactive app.
export const createRoot = ViteReactSSG({ routes });
