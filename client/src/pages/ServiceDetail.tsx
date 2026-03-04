import { useHead } from "@/hooks/use-head";
import { useServiceContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle, Lightbulb, Zap, DollarSign, Users, Shield, Layers, Cloud, Cpu, Globe, Glasses, BarChart3, Cog } from "lucide-react";

interface ServiceDetailProps {
  slug: string;
}

const capabilityIcons: Record<string, any> = {
  "App Modernisation": Layers,
  "Cloud Transformation": Cloud,
  "BI & Data Management": BarChart3,
  "AI & Machine Learning": Cpu,
  "Integration & Platform Engineering": Cog,
  "Industrial IoT & Connected Systems": Globe,
  "AR/VR & Immersive Technologies": Glasses,
};

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
        variant="dark"
      />

      {page.whyDsrc && (
        <section className="py-14 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.whyDsrc.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.whyDsrc.items.map((item: any, idx: number) => {
                const icons = [Lightbulb, Zap, DollarSign, Users];
                const Icon = icons[idx] || Lightbulb;
                return (
                  <div key={idx} data-testid={`why-dsrc-${idx}`} className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f0f4fa] flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7 text-[#0033a0]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0033a0] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {page.overview && (
        <section className={`py-14 ${page.whyDsrc ? "bg-[#f5f5f5]" : "bg-white"}`}>
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            {page.overview.heading && (
              <h2 className="text-xl lg:text-2xl font-bold text-[#0033a0] mb-6">{page.overview.heading}</h2>
            )}
            {page.overview.paragraphs?.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] text-gray-600 leading-[1.8] mb-4">{p}</p>
            ))}
          </div>
        </section>
      )}

      {page.services && typeof page.services === "object" && !Array.isArray(page.services) && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {page.services.topRow.map((service: any, idx: number) => (
                <div key={idx} data-testid={`service-box-${idx}`} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.services.bottomRow.map((service: any, idx: number) => (
                <div key={idx} data-testid={`service-box-bottom-${idx}`} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.services && Array.isArray(page.services) && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.services.map((service: any, idx: number) => (
                <div key={idx} data-testid={`cloud-service-${idx}`} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-[#0033a0] mb-5">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.enhancedCapabilities && (
        <section className="py-14 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.enhancedCapabilities.title}</h2>
            <div className="space-y-12">
              {page.enhancedCapabilities.sections.map((section: any, idx: number) => (
                <div key={idx} data-testid={`enhanced-section-${idx}`}>
                  <h3 className="text-lg font-bold text-[#0033a0] mb-4">{section.title}</h3>
                  {section.paragraphs?.map((p: string, i: number) => (
                    <p key={i} className="text-[15px] text-gray-600 leading-[1.8] mb-4">{p}</p>
                  ))}
                  {section.description && (
                    <p className="text-[15px] text-gray-600 leading-[1.8] mb-4">{section.description}</p>
                  )}
                  {section.capabilities && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Capabilities:</p>
                      {section.capabilities.map((cap: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-[14px] text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600">
                          <ArrowRight className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{item}</span>
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

      {page.expertise && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.expertise.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.expertise.items.map((item: any, idx: number) => (
                <div key={idx} data-testid={`expertise-${idx}`} className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-sm font-bold text-[#0033a0] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.capabilities && typeof page.capabilities === "object" && !Array.isArray(page.capabilities) && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-3">{page.capabilities.title}</h2>
            {page.capabilities.subtitle && (
              <p className="text-center text-[15px] text-gray-600 mb-10">{page.capabilities.subtitle}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.capabilities.items.map((item: any, idx: number) => {
                const Icon = capabilityIcons[item.title] || Layers;
                return (
                  <div key={idx} data-testid={`capability-${idx}`} className="bg-white rounded-lg shadow-md p-5 border border-gray-100 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#f0f4fa] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0033a0]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0033a0] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {page.approach && (
        <section className="py-14 bg-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.approach.title}</h2>
            <div className="space-y-8">
              {page.approach.phases.map((phase: any, idx: number) => (
                <div key={idx} data-testid={`phase-${idx}`} className="bg-[#f5f5f5] rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#0033a0] text-white text-sm font-bold flex items-center justify-center shrink-0">{phase.number || idx + 1}</span>
                    <h3 className="text-base font-bold text-[#0033a0]">{phase.title}</h3>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-4 ml-12">{phase.description}</p>
                  {phase.items && (
                    <ul className="space-y-2 ml-12">
                      {phase.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-500">
                          <ArrowRight className="w-3 h-3 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{item}</span>
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
        <section className={`py-14 ${page.approach ? "bg-[#f5f5f5]" : "bg-white"}`}>
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-4">{page.engagementModels.title}</h2>
            {page.engagementModels.description && (
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-6">{page.engagementModels.description}</p>
            )}
            <ul className="space-y-3">
              {(page.engagementModels.models || page.engagementModels.items)?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.governance && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.governance.title}</h2>
            <ul className="space-y-3">
              {page.governance.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600">
                  <Shield className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.whyChoose && (
        <section className="py-14 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.whyChoose.title}</h2>
            {Array.isArray(page.whyChoose.items) && typeof page.whyChoose.items[0] === "object" && page.whyChoose.items[0].title ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {page.whyChoose.items.map((item: any, idx: number) => (
                  <div key={idx} data-testid={`why-choose-${idx}`} className="p-5 bg-[#f5f5f5] rounded-lg">
                    <h3 className="text-sm font-bold text-[#0033a0] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3 max-w-2xl mx-auto">
                {page.whyChoose.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {page.businessImpact && (
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-6">{page.businessImpact.title}</h2>
            <ul className="space-y-3">
              {page.businessImpact.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.insights && (
        <section className="py-14 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">{page.insights.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.insights.items.map((insight: any, idx: number) => (
                <div key={idx} data-testid={`insight-${idx}`} className="bg-[#f5f5f5] rounded-lg p-6 text-center">
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
