import { useHead } from "@/hooks/use-head";
import { siteContent } from "@/data/siteContent";
import HeroSlider from "@/components/sections/HeroSlider";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CustomersSection from "@/components/sections/CustomersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareersSection from "@/components/sections/CareersSection";

const { home } = siteContent.pages;

export default function Home() {
  useHead({
    title: home.seo.title,
    description: home.seo.description,
  });

  return (
    <>
      <HeroSlider slides={home.heroSlides} />

      <WhoWeAreSection
        sectionTitle={home.whoWeAre.sectionTitle}
        paragraphs={home.whoWeAre.paragraphs}
        cta={home.whoWeAre.cta}
      />

      <ServicesSection
        sectionTitle={home.services.sectionTitle}
        subtitle={home.services.subtitle}
        items={home.services.items}
      />

      <CustomersSection logos={home.customers.logos} />

      <TestimonialsSection
        sectionTitle={home.testimonials.sectionTitle}
        items={home.testimonials.items}
      />

      <CareersSection
        sectionTitle={home.careers.sectionTitle}
        heading={home.careers.heading}
        description={home.careers.description}
        cta={home.careers.cta}
      />
    </>
  );
}
