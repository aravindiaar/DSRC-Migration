import { useHead } from "@/hooks/use-head";
import { useServiceContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const { data: page, isLoading } = useServiceContent(slug);

  useHead({
    title: page?.seo?.title || "DSRC Services",
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
          {page.overview?.heading && (
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.overview.heading}</h2>
          )}
          {page.overview?.paragraphs?.map((p: string, idx: number) => (
            <p key={idx} className="text-[15px] text-gray-600 leading-[1.8] mb-4">{p}</p>
          ))}
        </div>
      </section>

      {page.capabilities && Array.isArray(page.capabilities) && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.capabilities.map((cap: any, idx: number) => (
                <div key={idx} data-testid={`capability-${idx}`} className="p-6 bg-white rounded border border-gray-200">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-4">{cap.title}</h3>
                  <ul className="space-y-2">
                    {cap.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.capabilities && !Array.isArray(page.capabilities) && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.capabilities.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.capabilities.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.expertise && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.expertise.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.expertise.items.map((item: any, idx: number) => (
                <div key={idx} data-testid={`expertise-${idx}`} className="p-5 bg-white rounded border border-gray-200">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.genai && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-4">{page.genai.title}</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-6">{page.genai.description}</p>
            <ul className="space-y-3">
              {page.genai.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.approach && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-4">{page.approach.title}</h2>
            {page.approach.description && (
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-8">{page.approach.description}</p>
            )}
            <div className="space-y-8">
              {page.approach.phases.map((phase: any, idx: number) => (
                <div key={idx} data-testid={`phase-${idx}`} className="p-6 bg-[#f5f5f5] rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#0033a0] text-white text-sm font-bold flex items-center justify-center">{idx + 1}</span>
                    <h3 className="text-sm font-bold text-[#0033a0]">{phase.title}</h3>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-3">{phase.description}</p>
                  {phase.items && (
                    <ul className="space-y-1.5">
                      {phase.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-500">
                          <ArrowRight className="w-3 h-3 text-[#0033a0] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.engagementModels && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-4">{page.engagementModels.title}</h2>
            {page.engagementModels.description && (
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-6">{page.engagementModels.description}</p>
            )}
            <ul className="space-y-3">
              {(page.engagementModels.models || page.engagementModels.items)?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.services && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.services.map((service: any, idx: number) => (
                <div key={idx} data-testid={`cloud-service-${idx}`} className="p-6 bg-white rounded border border-gray-200">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.governance && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.governance.title}</h2>
            <ul className="space-y-3">
              {page.governance.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.whyChoose && (
        <section className="py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.whyChoose.title}</h2>
            {Array.isArray(page.whyChoose.items) && typeof page.whyChoose.items[0] === "object" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {page.whyChoose.items.map((item: any, idx: number) => (
                  <div key={idx} className="p-5 bg-[#f5f5f5] rounded">
                    <h3 className="text-sm font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {page.whyChoose.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {page.businessImpact && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.businessImpact.title}</h2>
            <ul className="space-y-3">
              {page.businessImpact.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.process && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-8">{page.process.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.process.steps.map((step: any, idx: number) => (
                <div key={idx} data-testid={`process-step-${idx}`} className="text-center p-5 bg-[#f5f5f5] rounded">
                  <span className="w-10 h-10 rounded-full bg-[#0033a0] text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">{idx + 1}</span>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.caseStudies && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.caseStudies.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.caseStudies.items.map((study: any, idx: number) => (
                <div key={idx} data-testid={`case-study-${idx}`} className="p-6 bg-white rounded border border-gray-200">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-3">{study.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.insights && (
        <section className="py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(page.insights).map((insight: any, idx: number) => (
                <div key={idx} data-testid={`insight-${idx}`} className="p-6 bg-[#f5f5f5] rounded">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-3">{insight.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={page.cta.title}
        subtitle={page.cta.subtitle}
        cta={page.cta.button}
      />
    </>
  );
}
