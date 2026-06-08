import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";
import "./index.css";

// Static-site generation: App is prerendered to HTML at build time, then
// hydrated on the client. Crawlers and AI systems receive full content;
// the browser still gets the same interactive React app.
export const createRoot = ViteReactSSG(<App />);
