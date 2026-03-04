import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const { nav, logoUrl } = siteContent.global;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <Link href="/" data-testid="link-home">
            <img
              src={logoUrl}
              alt="DSRC"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0" ref={dropdownRef}>
            {nav.map((item) => (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                  onClick={() => toggleDropdown(item.label)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-[15px] font-normal text-gray-700 hover:text-[#0033a0] transition-colors cursor-pointer"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[260px]" role="menu">
                    <div className="bg-white rounded shadow-lg border border-gray-100 py-2">
                      {item.children?.map((child) => (
                        <Link key={child.label} href={child.href}>
                          <span
                            role="menuitem"
                            data-testid={`nav-sub-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#0033a0] hover:bg-gray-50 transition-colors cursor-pointer"
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

            <Link href="/contact">
              <span
                data-testid="button-lets-connect"
                className="ml-4 inline-flex items-center px-6 py-2.5 bg-[#0033a0] text-white text-sm font-medium rounded cursor-pointer hover:bg-[#002880] transition-colors"
              >
                Let's Connect!
              </span>
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
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg" role="navigation">
          <div className="px-4 py-3 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link href={item.href}>
                  <span
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#0033a0] transition-colors cursor-pointer"
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
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-[#0033a0] transition-colors cursor-pointer"
                        >
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 px-3">
              <Link href="/contact">
                <span className="block w-full text-center px-6 py-2.5 bg-[#0033a0] text-white text-sm font-medium rounded cursor-pointer" data-testid="mobile-button-connect">
                  Let's Connect!
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
