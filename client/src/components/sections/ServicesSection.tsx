import { Link } from "wouter";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ServicesProps {
  sectionTitle: string;
  subtitle: string;
  items: ServiceItem[];
}

export default function ServicesSection({ sectionTitle, subtitle, items }: ServicesProps) {
  return (
    <section
      data-testid="services-section"
      className="py-16 lg:py-20 bg-[#f5f5f5]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-testid="text-services-title"
            className="text-2xl md:text-3xl font-bold text-[#0033a0] mb-4"
            style={{ fontFamily: "'Open Sans', serif" }}
          >
            {sectionTitle}
          </h2>
          <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <div
                data-testid={`service-card-${idx}`}
                className="group cursor-pointer"
              >
                <div className="mb-5 overflow-hidden rounded">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-sm font-bold text-[#0033a0] uppercase tracking-wide mb-3"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
