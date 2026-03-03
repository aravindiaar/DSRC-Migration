import { useHead } from "@/hooks/use-head";
import { siteContent } from "@/data/siteContent";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

const { contact } = siteContent.pages;

export default function Contact() {
  useHead({
    title: contact.seo.title,
    description: contact.seo.description,
  });

  return (
    <>
      <HeroSection
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
        compact
      />

      <ContactSection
        fields={contact.form.fields}
        offices={contact.offices}
      />
    </>
  );
}
