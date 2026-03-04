import { Link } from "wouter";

interface CTAProps {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export default function CTASection({ title, subtitle, cta }: CTAProps) {
  return (
    <section
      data-testid="cta-section"
      className="py-16 bg-[#0033a0]"
    >
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
