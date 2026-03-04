import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "platform",
    title: "Platform & Product Development",
    description: "Delivering end-to-end software product engineering services that take your ideas from concept to market-ready solutions. Our teams work across the full product lifecycle, from discovery and prototyping to development, testing, and deployment.",
    features: [
      "Full-stack product engineering",
      "MVP development & rapid prototyping",
      "Product strategy & roadmap planning",
      "Continuous integration & delivery",
    ],
    image: "/images/service-platform.webp",
  },
  {
    id: "application",
    title: "Next-Gen Application Development",
    description: "Empowering enterprise businesses with modern Web, Mobile, and cross-platform applications built with modern technologies and frameworks. We build scalable, performant, and user-friendly applications.",
    features: [
      "Web & mobile application development",
      "Cross-platform solutions",
      "Enterprise application modernization",
      "API design & integration",
    ],
    image: "/images/service-application.webp",
  },
  {
    id: "digital",
    title: "Digital Transformation Services",
    description: "Modernizing legacy systems and applications helping clients in their digital transformation journey. We help organizations adopt new technologies and processes to drive innovation and efficiency.",
    features: [
      "Legacy system modernization",
      "Business process automation",
      "Data analytics & insights",
      "Digital strategy consulting",
    ],
    image: "/images/service-digital.jpg",
  },
  {
    id: "cloud",
    title: "Cloud Management Services",
    description: "We offer comprehensive cloud solutions covering Cloud Infrastructure Management, IT Operations Management and Cloud Security Management. Our cloud experts help you optimize costs and performance.",
    features: [
      "Cloud infrastructure management",
      "IT operations management",
      "Cloud security management",
      "Migration & optimization",
    ],
    image: "/images/service-cloud.webp",
  },
];

export default function Services() {
  useHead({
    title: "Services - DSRC | Technology Solutions",
    description: "Explore DSRC's comprehensive technology services.",
  });

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored to accelerate your business growth and digital transformation."
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                data-testid={`service-detail-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-xl lg:text-2xl font-bold text-[#0033a0] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[15px] text-gray-600 leading-[1.8] mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0033a0]">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-3 text-white/70 text-[15px]">Let us help you find the right solution for your business.</p>
          <div className="mt-6">
            <Link href="/contact">
              <span className="inline-block px-7 py-3 border-2 border-white text-white text-sm font-semibold uppercase rounded-sm hover:bg-white hover:text-[#0033a0] transition-all cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
