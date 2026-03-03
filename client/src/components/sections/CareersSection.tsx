import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface CareersProps {
  sectionTitle: string;
  heading: string;
  description: string;
  highlights: string[];
  cta: { label: string; href: string };
}

export default function CareersSection({ sectionTitle, heading, description, highlights, cta }: CareersProps) {
  return (
    <section data-testid="careers-section" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {sectionTitle}
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              {heading}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{description}</p>
            <div className="mt-8">
              <Link href={cta.href}>
                <Button data-testid="button-careers-cta">
                  {cta.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                data-testid={`career-highlight-${idx}`}
                className="flex items-start gap-4 p-5 rounded-md bg-muted/30 border border-transparent hover:border-border transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80 leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
