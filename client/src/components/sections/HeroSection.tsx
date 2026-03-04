interface HeroProps {
  title: string;
  subtitle: string;
  compact?: boolean;
}

export default function HeroSection({ title, subtitle }: HeroProps) {
  return (
    <section
      data-testid="hero-section"
      className="py-14 lg:py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          data-testid="text-hero-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0033a0]"
          style={{ fontFamily: "'Open Sans', serif" }}
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
