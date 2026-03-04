import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  compact?: boolean;
  variant?: "light" | "dark";
  bgImage?: string;
  breadcrumbs?: string[];
}

export default function HeroSection({ title, subtitle, compact, variant = "light", bgImage, breadcrumbs }: HeroProps) {
  if (variant === "dark") {
    return (
      <section
        data-testid="hero-section"
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundColor: bgImage ? undefined : "#0033a0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {bgImage && <div className="absolute inset-0 bg-[#001a4d]/70" />}
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            data-testid="text-hero-title"
            className="text-2xl md:text-3xl lg:text-[38px] font-bold text-white leading-tight tracking-wide"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {title}
          </h1>
          <p
            data-testid="text-hero-subtitle"
            className="mt-4 text-[15px] text-white/80 leading-relaxed max-w-3xl"
          >
            {subtitle}
          </p>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div data-testid="breadcrumbs" className="mt-8 flex items-center gap-1 text-[13px] text-white/70">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} data-testid={`breadcrumb-${idx}`} className="flex items-center gap-1">
                  {idx > 0 && <ChevronRight className="w-3 h-3" />}
                  <span className={idx === breadcrumbs.length - 1 ? "text-white/50" : "text-white/70"}>{crumb}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      data-testid="hero-section"
      className={`${compact ? "py-10 lg:py-14" : "py-14 lg:py-20"} bg-white border-b border-gray-100`}
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          data-testid="text-hero-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0033a0]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          {title}
        </h1>
        <p
          data-testid="text-hero-subtitle"
          className="mt-4 text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
