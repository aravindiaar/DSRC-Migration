import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Users, Award, Zap } from "lucide-react";

const iconMap: Record<number, typeof Lightbulb> = {
  0: Award,
  1: Lightbulb,
  2: Users,
  3: Zap,
};

interface WhoWeAreProps {
  sectionTitle: string;
  heading: string;
  points: { title: string; description: string }[];
  cta: { label: string; href: string };
}

export default function WhoWeAreSection({ sectionTitle, heading, points, cta }: WhoWeAreProps) {
  return (
    <section data-testid="who-we-are-section" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {sectionTitle}
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {points.map((point, idx) => {
            const Icon = iconMap[idx] || Lightbulb;
            return (
              <div
                key={idx}
                data-testid={`who-we-are-point-${idx}`}
                className="group flex gap-5 p-6 rounded-md bg-muted/30 border border-transparent hover:border-border transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href={cta.href}>
            <Button data-testid="button-who-we-are-cta" variant="outline">
              {cta.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
