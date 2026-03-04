import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import { MapPin } from "lucide-react";

export default function WhoWeAre() {
  const { data: page, isLoading } = usePageContent("who-we-are");

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
      <HeroSection
        title={page.hero.title}
        subtitle={page.hero.subtitle}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 mb-12">
            {page.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] text-gray-600 leading-[1.8]">{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-testid="vision-block">
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">{page.vision.title}</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">{page.vision.text}</p>
            </div>
            <div data-testid="mission-block">
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">{page.mission.title}</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">{page.mission.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-4">{page.difference.title}</h2>
          <p className="text-center text-[15px] text-gray-600 max-w-2xl mx-auto mb-10">
            {page.difference.subtitle}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {page.difference.stats.map((stat: any, idx: number) => (
              <div key={idx} className="text-center py-6 px-4 bg-white rounded border border-gray-200">
                <div className="text-3xl font-bold text-[#0033a0]">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.companyOverview && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-6">{page.companyOverview.title}</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] text-center">{page.companyOverview.text}</p>
          </div>
        </section>
      )}

      <section id="values" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.values.items.map((value: any, idx: number) => (
              <div
                key={idx}
                data-testid={`value-card-${idx}`}
                className="p-5 bg-white rounded border border-gray-200"
              >
                <h3 className="text-sm font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.locations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.locations.offices.map((office: any, idx: number) => (
              <div key={idx} data-testid={`location-${idx}`} className="p-5 bg-[#f5f5f5] rounded border border-gray-200">
                <h3 className="font-bold text-gray-800 text-sm">{office.city}</h3>
                <p className="text-xs text-[#0033a0] font-medium mt-1">{office.role}</p>
                <div className="flex items-start gap-1.5 mt-2 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" />
                  <span>{office.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
