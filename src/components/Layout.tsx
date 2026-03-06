import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { PageTransition } from "./PageTransition";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface-secondary">
      <Header />
      <main className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
    </div>
  );
}
