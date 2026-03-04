import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
  const { data: page, isLoading } = usePageContent("contact");

  useHead({
    title: page?.seo?.title || "Contact DSRC",
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
      <HeroSection
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        compact
      />

      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{page.intro.heading}</h2>
          {page.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-[15px] text-gray-600 leading-[1.8] mb-2">{p}</p>
          ))}
          {page.officeHours && (
            <p className="text-[13px] text-gray-500 mt-4 italic">{page.officeHours}</p>
          )}
        </div>
      </section>

      <ContactSection
        fields={page.form.fields}
        offices={page.offices}
      />
    </>
  );
}
