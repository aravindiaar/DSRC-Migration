import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSlider from "@/components/sections/HeroSlider";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CustomersSection from "@/components/sections/CustomersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareersSection from "@/components/sections/CareersSection";

export default function Home() {
  const { data: page, isLoading } = usePageContent("home");

  useHead({
    title: page?.seo?.title || "DSRC",
    description: page?.seo?.description || "",
  });

  if (isLoading || !page) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-[#0033a0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <HeroSlider slides={page.heroSlides} />

      <WhoWeAreSection
        sectionTitle={page.whoWeAre.sectionTitle}
        paragraphs={page.whoWeAre.paragraphs}
        cta={page.whoWeAre.cta}
      />

      <ServicesSection
        sectionTitle={page.services.sectionTitle}
        subtitle={page.services.subtitle}
        items={page.services.items}
      />

      <CustomersSection logos={page.customers.logos} />

      <TestimonialsSection
        sectionTitle={page.testimonials.sectionTitle}
        items={page.testimonials.items}
      />

      <CareersSection
        sectionTitle={page.careers.sectionTitle}
        heading={page.careers.heading}
        description={page.careers.description}
        cta={page.careers.cta}
      />
    </>
  );
}
