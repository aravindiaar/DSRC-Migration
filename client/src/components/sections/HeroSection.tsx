interface HeroProps {
  title: string;
  subtitle: string;
  compact?: boolean;
  variant?: "light" | "dark";
}

export default function HeroSection({ title, subtitle, compact, variant = "light" }: HeroProps) {
  if (variant === "dark") {
    return (
      <section
        data-testid="hero-section"
        className="py-12 lg:py-16 bg-[#0033a0]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            data-testid="text-hero-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {title}
          </h1>
          <p
            data-testid="text-hero-subtitle"
            className="mt-3 text-[15px] text-white/80 leading-relaxed max-w-3xl"
          >
            {subtitle}
          </p>
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
