import { useMemo } from "react";
import { useTina, tinaField } from "@/lib/tina-react";
import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import { WHO_WE_ARE_QUERY } from "@/lib/tinaQueries";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { MapPin } from "lucide-react";

export default function WhoWeAre() {
  const { data: apiData, isLoading } = usePageContent("who-we-are");

  const tinaData = useMemo(() => ({ whoWeAre: apiData }), [apiData]);
  const { data: tina } = useTina({
    query: WHO_WE_ARE_QUERY,
    variables: { relativePath: "who-we-are.json" },
    data: tinaData,
  });

  const page = apiData;
  const tinaRef = tina?.whoWeAre;

  useHead({
    title: page?.seo?.title || "Who We Are - DSRC",
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
          <div
            data-tina-field={tinaRef ? tinaField(tinaRef, "intro") : undefined}
            className="space-y-5 mb-12"
          >
            {page.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] text-gray-600 leading-[1.8]">{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              data-testid="vision-block"
              data-tina-field={tinaRef ? tinaField(tinaRef, "vision") : undefined}
            >
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">{page.vision.title}</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">{page.vision.text}</p>
            </div>
            <div
              data-testid="mission-block"
              data-tina-field={tinaRef ? tinaField(tinaRef, "mission") : undefined}
            >
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">{page.mission.title}</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">{page.mission.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="difference"
        data-tina-field={tinaRef ? tinaField(tinaRef, "difference") : undefined}
        className="py-16 bg-[#f0f4fa]"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {page.difference.image && (
              <div className="shrink-0">
                <img
                  src={page.difference.image}
                  alt="DSRC - 50+ Years of Innovation"
                  data-testid="img-difference"
                  className="w-full max-w-[280px] mx-auto"
                />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#0033a0] mb-3">{page.difference.title}</h2>
              <p className="text-[15px] text-gray-600 mb-8 leading-[1.8]">{page.difference.subtitle}</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {page.difference.stats.map((stat: any, idx: number) => (
                  <div key={idx} data-testid={`stat-${idx}`} className="text-center py-6 px-4 bg-white rounded border border-gray-200 shadow-sm">
                    <div
                      data-tina-field={tinaField(stat, "value")}
                      className="text-3xl font-bold text-[#0033a0]"
                    >
                      {stat.value}
                    </div>
                    <div
                      data-tina-field={tinaField(stat, "label")}
                      className="mt-2 text-xs text-gray-500"
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="values"
        data-tina-field={tinaRef ? tinaField(tinaRef, "values") : undefined}
        className="py-16 bg-white"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.values.items.map((value: any, idx: number) => (
              <div
                key={idx}
                data-testid={`value-card-${idx}`}
                className="p-5 bg-[#f5f5f5] rounded border border-gray-100"
              >
                <h3
                  data-tina-field={tinaField(value, "title")}
                  className="text-sm font-bold text-[#0033a0] mb-2"
                >
                  {value.title}
                </h3>
                <p
                  data-tina-field={tinaField(value, "description")}
                  className="text-xs text-gray-500 leading-relaxed"
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-16 bg-[#f0f4fa]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.locations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.locations.offices.map((office: any, idx: number) => (
              <div key={idx} data-testid={`location-${idx}`} className="p-5 bg-white rounded border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  {office.flag ? (
                    <img src={office.flag} alt={office.city} className="h-5 w-auto rounded-sm" />
                  ) : (
                    <MapPin className="w-4 h-4 text-[#0033a0] shrink-0" />
                  )}
                  <h3 className="font-bold text-[#0033a0] text-sm">{office.city}</h3>
                </div>
                <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">{office.role}</p>
                <p className="text-[13px] text-gray-600 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to explore how DSRC can help your business?"
        subtitle="Let's talk! Our team is ready to connect with you."
        cta={{ label: "Contact Us", href: "/contact" }}
        variant="white"
      />
    </>
  );
}
