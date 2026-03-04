import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface CTAProps {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  variant?: "blue" | "white";
}

export default function CTASection({ title, subtitle, cta, variant = "blue" }: CTAProps) {
  if (variant === "white") {
    return (
      <section data-testid="cta-section" className="py-14 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0033a0] mb-2">{title}</h2>
            <p className="text-[14px] text-gray-600">{subtitle}</p>
          </div>
          <Link href={cta.href}>
            <span
              data-testid="button-cta"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0033a0] text-white text-sm font-semibold rounded hover:bg-[#002580] transition-colors cursor-pointer whitespace-nowrap"
            >
              {cta.label} <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="cta-section" className="py-16 bg-[#0033a0]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-white/70 text-[15px]">{subtitle}</p>
        <div className="mt-8">
          <Link href={cta.href}>
            <span
              data-testid="button-cta"
              className="inline-block px-7 py-3 border-2 border-white text-white text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-white hover:text-[#0033a0] transition-all duration-300 cursor-pointer"
            >
              {cta.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
