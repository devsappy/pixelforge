import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Guides from "./pages/Guides";
import Article from "./pages/Article";
import { services } from "./content/services";
import { guides } from "./content/guides";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "faq", element: <Faq /> },
      { path: "services", element: <Services /> },
      ...services.map((s) => ({
        path: `services/${s.slug}`,
        element: <ServiceDetail slug={s.slug} />,
      })),
      { path: "guides", element: <Guides /> },
      ...guides.map((g) => ({
        path: `guides/${g.slug}`,
        element: <Article slug={g.slug} />,
      })),
    ],
  },
];
