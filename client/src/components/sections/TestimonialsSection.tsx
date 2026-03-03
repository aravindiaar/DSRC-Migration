import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  sectionTitle: string;
  heading: string;
  items: Testimonial[];
}

export default function TestimonialsSection({ sectionTitle, heading, items }: TestimonialsProps) {
  return (
    <section data-testid="testimonials-section" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {sectionTitle}
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              data-testid={`testimonial-${idx}`}
              className="relative p-8 bg-background rounded-md border border-border"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-foreground/80 leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{item.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
