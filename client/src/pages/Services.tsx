import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { Code, Smartphone, RefreshCw, Cloud, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "platform",
    icon: Code,
    title: "Platform & Product Development",
    description: "Delivering end-to-end software product engineering services that take your ideas from concept to market-ready solutions. Our teams work across the full product lifecycle, from discovery and prototyping to development, testing, and deployment.",
    features: [
      "Full-stack product engineering",
      "MVP development & rapid prototyping",
      "Product strategy & roadmap planning",
      "Continuous integration & delivery",
    ],
  },
  {
    id: "application",
    icon: Smartphone,
    title: "Next-Gen Application Development",
    description: "Empowering enterprise businesses with modern Web, Mobile, and cross-platform applications built with modern technologies and frameworks. We build scalable, performant, and user-friendly applications.",
    features: [
      "Web & mobile application development",
      "Cross-platform solutions",
      "Enterprise application modernization",
      "API design & integration",
    ],
  },
  {
    id: "digital",
    icon: RefreshCw,
    title: "Digital Transformation Services",
    description: "Modernizing legacy systems and applications helping clients in their digital transformation journey. We help organizations adopt new technologies and processes to drive innovation and efficiency.",
    features: [
      "Legacy system modernization",
      "Business process automation",
      "Data analytics & insights",
      "Digital strategy consulting",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Management Services",
    description: "We offer comprehensive cloud solutions covering Cloud Infrastructure Management, IT Operations Management and Cloud Security Management. Our cloud experts help you optimize costs and performance.",
    features: [
      "Cloud infrastructure management",
      "IT operations management",
      "Cloud security management",
      "Migration & optimization",
    ],
  },
];

export default function Services() {
  useHead({
    title: "Services - DSRC | Technology Solutions",
    description: "Explore DSRC's comprehensive technology services including platform development, application modernization, digital transformation, and cloud management.",
  });

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored to accelerate your business growth and digital transformation."
        compact
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                data-testid={`service-detail-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} flex items-center justify-center`}>
                  <div className="w-full max-w-md aspect-square rounded-md bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center border border-border">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(213, 80%, 18%) 0%, hsl(200, 60%, 25%) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-white/60">Let us help you find the right solution for your business.</p>
          <div className="mt-8">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-md cursor-pointer text-sm">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
