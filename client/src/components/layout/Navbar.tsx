import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

const { nav, siteName } = siteContent.global;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              {siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {nav.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    type="button"
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    onClick={() => toggleDropdown(item.label)}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      scrolled
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <span
                      data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                        scrolled
                          ? "text-foreground/80 hover:text-primary"
                          : "text-white/90 hover:text-white"
                      } ${location === item.href ? (scrolled ? "text-primary font-semibold" : "text-white font-semibold") : ""}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[240px]" role="menu">
                    <div className="bg-background rounded-md border border-border shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href}>
                          <span
                            role="menuitem"
                            data-testid={`nav-sub-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors cursor-pointer"
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button data-testid="button-get-started" size="sm">
                Let's Connect
              </Button>
            </Link>
          </div>

          <button
            data-testid="button-mobile-menu"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg" role="navigation">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link href={item.href}>
                  <span
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors cursor-pointer"
                  >
                    {item.label}
                  </span>
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        <span
                          data-testid={`mobile-nav-sub-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link href="/contact">
                <Button className="w-full" size="sm" data-testid="mobile-button-connect">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
