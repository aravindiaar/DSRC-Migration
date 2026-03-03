import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export default function CTASection({ title, subtitle, cta }: CTAProps) {
  return (
    <section
      data-testid="cta-section"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, hsl(213, 80%, 18%) 0%, hsl(200, 60%, 25%) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{title}</h2>
        <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8">
          <Link href={cta.href}>
            <Button
              data-testid="button-cta"
              size="lg"
              className="bg-white text-primary font-semibold border-white"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
