import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import WhoWeAre from "@/pages/WhoWeAre";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import AdminCMS from "@/pages/admin/AdminCMS";
import NotFound from "@/pages/not-found";

function SiteRouter() {
  useEffect(() => {
    if (typeof window === "undefined" || window === window.parent) return;

    document.body.classList.add("tina-admin-preview");

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-tina-field]");
      if (!target) return;
      const fieldId = target.getAttribute("data-tina-field");
      try {
        window.parent.postMessage({ type: "tina-field-selected", fieldId }, "*");
      } catch (_) {}
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.body.classList.remove("tina-admin-preview");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/platform-product-development">
            {() => <ServiceDetail slug="platform-product-development" />}
          </Route>
          <Route path="/services/application-services">
            {() => <ServiceDetail slug="application-services" />}
          </Route>
          <Route path="/services/digital-transformation">
            {() => <ServiceDetail slug="digital-transformation" />}
          </Route>
          <Route path="/services/cloud-management">
            {() => <ServiceDetail slug="cloud-management" />}
          </Route>
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isAdmin ? (
          <Switch>
            <Route path="/admin" component={AdminCMS} />
          </Switch>
        ) : (
          <SiteRouter />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
