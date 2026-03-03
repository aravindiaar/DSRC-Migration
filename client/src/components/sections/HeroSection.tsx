import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export default function HeroSection({ title, subtitle, cta, secondaryCta, compact }: HeroProps) {
  return (
    <section
      data-testid="hero-section"
      className={`relative overflow-hidden ${compact ? "pt-28 pb-16" : "pt-32 pb-24 lg:pt-44 lg:pb-36"}`}
      style={{
        background: "linear-gradient(135deg, hsl(213, 80%, 15%) 0%, hsl(213, 70%, 22%) 40%, hsl(200, 60%, 28%) 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.02]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${compact ? "max-w-3xl" : "max-w-4xl"}`}>
          <h1
            data-testid="text-hero-title"
            className={`font-bold text-white leading-tight tracking-tight ${
              compact ? "text-3xl lg:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          <p
            data-testid="text-hero-subtitle"
            className={`mt-6 text-white/70 leading-relaxed ${
              compact ? "text-base lg:text-lg max-w-2xl" : "text-lg lg:text-xl max-w-3xl"
            }`}
          >
            {subtitle}
          </p>
          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {cta && (
                <Link href={cta.href}>
                  <Button
                    data-testid="button-hero-cta"
                    size="lg"
                    className="bg-white text-primary font-semibold border-white"
                  >
                    {cta.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    data-testid="button-hero-secondary"
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white backdrop-blur-sm bg-white/5"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
