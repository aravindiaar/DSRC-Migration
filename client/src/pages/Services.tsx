import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSlider from "@/components/sections/HeroSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

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
      <ServicesSection
        sectionTitle={home.services.sectionTitle}
        subtitle={home.services.subtitle}
        items={home.services.items}
      />

      <CTASection
        title="Ready to get started?"
        subtitle="Let us help you find the right solution for your business."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
