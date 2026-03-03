import { Link } from "wouter";
import { Code, Smartphone, RefreshCw, Cloud, ArrowRight } from "lucide-react";

const iconMap: Record<string, typeof Code> = {
  code: Code,
  app: Smartphone,
  transform: RefreshCw,
  cloud: Cloud,
};

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface ServicesProps {
  sectionTitle: string;
  heading: string;
  items: ServiceItem[];
}

export default function ServicesSection({ sectionTitle, heading, items }: ServicesProps) {
  return (
    <section
      data-testid="services-section"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, hsl(213, 80%, 15%) 0%, hsl(213, 70%, 20%) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-300/80">
            {sectionTitle}
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code;
            return (
              <Link key={idx} href={item.href}>
                <div
                  data-testid={`service-card-${idx}`}
                  className="group p-8 rounded-md bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="w-14 h-14 rounded-md bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{item.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
