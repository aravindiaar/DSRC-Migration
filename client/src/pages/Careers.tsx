import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Users, Star, Lightbulb, Gift } from "lucide-react";
import { Link } from "wouter";

const highlightIcons = [Users, Star, Lightbulb, Gift];

export default function Careers() {
  const { data: page, isLoading } = usePageContent("careers");

  useHead({
    title: page?.seo?.title || "Careers at DSRC",
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
      />

      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0033a0] mb-4">{page.intro.heading}</h2>
          <p className="text-[15px] text-gray-600 leading-[1.8] mb-8">{page.intro.subheading}</p>

          <div className="bg-[#f5f5f5] rounded p-6 mb-10">
            <p className="text-[15px] text-gray-800 font-semibold mb-2">{page.intro.question}</p>
            <p className="text-[15px] text-gray-600 italic">{page.intro.answer}</p>
          </div>

          <div className="space-y-4 mb-12">
            {page.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] text-gray-600 leading-[1.8]">{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.highlights.map((item: any, idx: number) => {
              const Icon = highlightIcons[idx] || Users;
              return (
                <div
                  key={idx}
                  data-testid={`highlight-${idx}`}
                  className="p-5 bg-[#f5f5f5] rounded text-center"
                >
                  <Icon className="w-8 h-8 text-[#0033a0] mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.workingAtDsrc.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.workingAtDsrc.sections.map((section: any, idx: number) => (
              <div key={idx} data-testid={`working-section-${idx}`} className="p-6 bg-white rounded border border-gray-200">
                <h3 className="text-sm font-bold text-[#0033a0] mb-3">{section.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={page.cta.title}
        subtitle={page.cta.subtitle}
        cta={page.cta.button}
      />
    </>
  );
}
