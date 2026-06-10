import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Cursor from "./Cursor";
import Nav from "./Nav";
import Footer from "./Footer";

/** Resets scroll to top on route change (but honors in-page #anchors). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Persistent chrome shared by every route. */
export default function Layout() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Cursor />
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
