import { useHead } from "@/hooks/use-head";
import { siteContent } from "@/data/siteContent";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareersSection from "@/components/sections/CareersSection";
import CTASection from "@/components/sections/CTASection";

const { home } = siteContent.pages;

export default function Home() {
  useHead({
    title: home.seo.title,
    description: home.seo.description,
  });

  return (
    <>
      <HeroSection
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        cta={home.hero.cta}
        secondaryCta={home.hero.secondaryCta}
      />

      <StatsSection stats={home.stats} />

      <WhoWeAreSection
        sectionTitle={home.whoWeAre.sectionTitle}
        heading={home.whoWeAre.heading}
        points={home.whoWeAre.points}
        cta={home.whoWeAre.cta}
      />

      <ServicesSection
        sectionTitle={home.services.sectionTitle}
        heading={home.services.heading}
        items={home.services.items}
      />

      <TestimonialsSection
        sectionTitle={home.testimonials.sectionTitle}
        heading={home.testimonials.heading}
        items={home.testimonials.items}
      />

      <CareersSection
        sectionTitle={home.careers.sectionTitle}
        heading={home.careers.heading}
        description={home.careers.description}
        highlights={home.careers.highlights}
        cta={home.careers.cta}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss how DSRC can help you achieve your technology goals."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
