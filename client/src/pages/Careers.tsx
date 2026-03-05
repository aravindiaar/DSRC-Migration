import { useMemo } from "react";
import { useTina, tinaField } from "@/lib/tina-react";
import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import { CAREERS_QUERY } from "@/lib/tinaQueries";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Users, Star, Lightbulb, Gift } from "lucide-react";

const highlightIcons = [Users, Star, Lightbulb, Gift];

export default function Careers() {
  const { data: apiData, isLoading } = usePageContent("careers");

  const tinaData = useMemo(() => ({ careers: apiData }), [apiData]);
  const { data: tina } = useTina({
    query: CAREERS_QUERY,
    variables: { relativePath: "careers.json" },
    data: tinaData,
  });

  const page = apiData;
  const tinaRef = tina?.careers;

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
      <div data-tina-field={tinaRef ? tinaField(tinaRef, "hero") : undefined}>
        <HeroSection
          title={page.hero.title}
          subtitle={page.hero.subtitle}
          variant="dark"
          bgImage={page.hero.bgImage}
          breadcrumbs={page.hero.breadcrumbs}
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-tina-field={tinaRef ? tinaField(tinaRef, "intro") : undefined}
            className="text-2xl font-bold text-[#0033a0] mb-4"
          >
            {page.intro.heading}
          </h2>
          <p className="text-[15px] text-gray-600 leading-[1.8] mb-8">{page.intro.subheading}</p>

          <div className="bg-[#f0f4fa] rounded-lg border border-blue-100 p-6 mb-10">
            <p className="text-[15px] text-gray-800 font-semibold mb-2">{page.intro.question}</p>
            <p className="text-[15px] text-[#0033a0] italic font-medium">{page.intro.answer}</p>
          </div>

          <div className="space-y-4 mb-12">
            {page.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] text-gray-600 leading-[1.8]">{p}</p>
            ))}
          </div>

          <div
            data-tina-field={tinaRef ? tinaField(tinaRef, "highlights") : undefined}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {page.highlights.map((item: any, idx: number) => {
              const Icon = highlightIcons[idx] || Users;
              return (
                <div
                  key={idx}
                  data-testid={`highlight-${idx}`}
                  className="p-6 bg-[#f0f4fa] rounded-lg text-center border border-blue-100"
                >
                  <Icon className="w-10 h-10 text-[#0033a0] mx-auto mb-4" />
                  <h3
                    data-tina-field={tinaField(item, "title")}
                    className="text-sm font-bold text-[#0033a0] mb-2"
                  >
                    {item.title}
                  </h3>
                  <p
                    data-tina-field={tinaField(item, "description")}
                    className="text-xs text-gray-500 leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        data-tina-field={tinaRef ? tinaField(tinaRef, "workingAtDsrc") : undefined}
        className="py-16 bg-[#f0f4fa]"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.workingAtDsrc.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.workingAtDsrc.sections.map((section: any, idx: number) => (
              <div key={idx} data-testid={`working-section-${idx}`} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3
                  data-tina-field={tinaField(section, "title")}
                  className="text-sm font-bold text-[#0033a0] mb-3"
                >
                  {section.title}
                </h3>
                <p
                  data-tina-field={tinaField(section, "description")}
                  className="text-[14px] text-gray-600 leading-relaxed"
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "cta") : undefined}>
        <CTASection
          title={page.cta.title}
          subtitle={page.cta.subtitle}
          cta={page.cta.button}
          variant="white"
        />
      </div>
    </>
  );
}
