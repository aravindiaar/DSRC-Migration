import { useMemo } from "react";
import { useTina, tinaField } from "@/lib/tina-react";
import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import { HOME_QUERY } from "@/lib/tinaQueries";
import HeroSlider from "@/components/sections/HeroSlider";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CustomersSection from "@/components/sections/CustomersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareersSection from "@/components/sections/CareersSection";

export default function Home() {
  const { data: apiData, isLoading } = usePageContent("home");

  const tinaData = useMemo(() => ({ home: apiData }), [apiData]);
  const { data: tina } = useTina({
    query: HOME_QUERY,
    variables: { relativePath: "home.json" },
    data: tinaData,
  });

  const page = apiData;
  const tinaRef = tina?.home;

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
      <div data-tina-field={tinaRef ? tinaField(tinaRef, "heroSlides") : undefined}>
        <HeroSlider slides={page.heroSlides} />
      </div>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "whoWeAre") : undefined}>
        <WhoWeAreSection
          sectionTitle={page.whoWeAre.sectionTitle}
          paragraphs={page.whoWeAre.paragraphs}
          cta={page.whoWeAre.cta}
        />
      </div>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "services") : undefined}>
        <ServicesSection
          sectionTitle={page.services.sectionTitle}
          subtitle={page.services.subtitle}
          items={page.services.items}
        />
      </div>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "customers") : undefined}>
        <CustomersSection logos={page.customers.logos} />
      </div>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "testimonials") : undefined}>
        <TestimonialsSection
          sectionTitle={page.testimonials.sectionTitle}
          items={page.testimonials.items}
        />
      </div>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "careers") : undefined}>
        <CareersSection
          sectionTitle={page.careers.sectionTitle}
          heading={page.careers.heading}
          description={page.careers.description}
          cta={page.careers.cta}
        />
      </div>
    </>
  );
}
