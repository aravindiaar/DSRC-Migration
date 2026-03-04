import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import { Link } from "wouter";
import { ArrowRightCircle, Briefcase, ThumbsUp, Star } from "lucide-react";

const insightIcons: Record<string, any> = {
  "briefcase": Briefcase,
  "thumbs-up": ThumbsUp,
  "star": Star,
};

const insights = [
  {
    title: "Engagement Models",
    description: "Experience seamless collaboration, accelerated innovation and intensive control on software development projects using flexible engagement models!",
    icon: "briefcase",
  },
  {
    title: "Technology Expertise",
    description: "DSRC brings front-end, back-end and full-stack technology expertise and capabilities across a wide variety of technologies, platforms and skill-sets.",
    icon: "thumbs-up",
  },
  {
    title: "Industry Experience",
    description: "Delivering custom software solutions across diverse industry verticals, seamlessly integrating technology expertise with our domain experience, driving innovation and transformation.",
    icon: "star",
  },
];

const caseStudies = [
  { title: "Talent Pipeline Management Solution", description: "Bespoke software solution developing a comprehensive workflow driven, intelligent talent nurturing and pipeline management solution!", image: "/images/case-study-1.jpg" },
  { title: "Smart Industry 4.0 Tech Solution", description: "Solution to capture, analyze and visualize KPIs from manufacturing, logistics and utility sectors.", image: "/images/case-study-2.jpg" },
  { title: "Industrial IOT Solutions", description: "Custom IOT solutions for a wide spectrum of customers using Azure and AWS IOT.", image: "/images/case-study-3.jpg" },
];

export default function Services() {
  const { data: home, isLoading } = usePageContent("home");

  useHead({
    title: "Services - DSRC | Technology Solutions",
    description: "Explore DSRC's comprehensive technology services including platform development, application services, digital transformation, and cloud management.",
  });

  if (isLoading || !home) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-[#0033a0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title="SERVICES"
        subtitle="Delivering innovative technology solutions that drive business growth and transformation."
        variant="dark"
        bgImage="/images/hero-slide-1.webp"
        breadcrumbs={["DSRC", "Services"]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-testid="text-services-title"
            className="text-center text-2xl font-bold text-[#0033a0] mb-4 uppercase tracking-wide"
          >
            Core Services
          </h2>
          <p className="text-center text-[15px] text-gray-600 max-w-3xl mx-auto mb-12">
            {home.services.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {home.services.items.map((item: any, idx: number) => (
              <Link key={idx} href={item.href}>
                <div data-testid={`service-card-${idx}`} className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#0033a0] uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f4fa]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-10 uppercase tracking-wide">
            INSIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, idx) => {
              const Icon = insightIcons[insight.icon] || Briefcase;
              return (
                <div key={idx} data-testid={`insight-${idx}`} className="bg-white border border-gray-200 rounded-sm p-8 text-center flex flex-col">
                  <div className="mb-5">
                    <Icon className="w-10 h-10 text-[#0033a0] mx-auto" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0033a0] mb-4">{insight.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed flex-1">{insight.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-[#0033a0] text-[13px] font-medium cursor-pointer hover:underline">
                      <ArrowRightCircle className="w-4 h-4" />
                      Explore More
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#0033a0] mb-10 uppercase tracking-wide">
            Case Studies &amp; Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {caseStudies.map((study, idx) => (
              <div key={idx} data-testid={`case-study-${idx}`}>
                {idx === 1 ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-5 h-[220px] flex flex-col justify-center">
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{study.description}</p>
                    <div className="flex items-center gap-2 text-[#0033a0] text-[13px] font-semibold cursor-pointer">
                      <ArrowRightCircle className="w-4 h-4" />
                      <span>Read more</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-[220px] rounded-lg overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/80 to-transparent flex items-end p-4">
                      <h3 className="text-white text-[14px] font-bold leading-tight">{study.title}</h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your search for a strategic software development partner ends here!"
        subtitle="Come join us for an insightful, exploratory discussion. You will be much impressed!"
        cta={{ label: "Contact Us", href: "/contact" }}
        variant="white"
      />
    </>
  );
}
