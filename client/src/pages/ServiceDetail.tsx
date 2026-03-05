import { useMemo } from "react";
import { useTina, tinaField } from "@/lib/tina-react";
import { useHead } from "@/hooks/use-head";
import { useServiceContent } from "@/lib/content";
import { SERVICE_DETAIL_QUERY } from "@/lib/tinaQueries";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle, Target, Users, Infinity, Settings, Scale,
  Globe, Shield, Layers, Cloud, Cpu, BarChart3, Cog, Glasses,
  Lightbulb, Zap, CircleDot, RefreshCw, ArrowRightCircle,
  Briefcase, ThumbsUp, Star
} from "lucide-react";

const insightIcons: Record<string, any> = {
  "briefcase": Briefcase,
  "thumbs-up": ThumbsUp,
  "star": Star,
};

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

const whyChooseIcons: Record<string, any> = {
  "target": Target,
  "user-plus": Users,
  "infinity": Infinity,
  "settings": Settings,
  "scale": Scale,
  "globe": Globe,
};

const processIcons = [Lightbulb, CircleDot, Zap, RefreshCw];

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const { data: apiData, isLoading } = useServiceContent(slug);

  const tinaData = useMemo(() => ({ serviceDetail: apiData }), [apiData]);
  const { data: tina } = useTina({
    query: SERVICE_DETAIL_QUERY,
    variables: { relativePath: `${slug}.json` },
    data: tinaData,
  });

  const page = apiData;
  const tinaRef = tina?.serviceDetail;

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
      <div data-tina-field={tinaRef ? tinaField(tinaRef, "hero") : undefined}>
        <HeroSection
          title={page.hero.title}
          subtitle={page.hero.subtitle}
          variant="dark"
          bgImage={page.hero.bgImage}
          breadcrumbs={page.hero.breadcrumbs}
        />
      </div>

      {page.whyDsrc && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "whyDsrc") : undefined}
          className="py-16 bg-white"
        >
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl lg:text-2xl font-bold text-[#0033a0] mb-5 tracking-wide uppercase">{page.whyDsrc.title}</h2>
            {page.whyDsrc.description && (
              <p className="text-[14px] text-gray-600 leading-[1.8] mb-10">{page.whyDsrc.description}</p>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {page.whyDsrc.items.map((item: any, idx: number) => (
                <div key={idx} data-testid={`why-dsrc-${idx}`} className="text-center">
                  {item.icon ? (
                    <img src={item.icon} alt={item.title} className="w-[53px] h-auto mx-auto mb-3" />
                  ) : (
                    <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-[#0033a0]" />
                    </div>
                  )}
                  <h3
                    data-tina-field={tinaField(item, "title")}
                    className="text-[13px] font-bold text-[#0033a0]"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.overview && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "overview") : undefined}
          className="py-14 bg-[#f0f4fa]"
        >
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            {page.overview.heading && (
              <h2 className="text-lg lg:text-xl font-bold text-[#0033a0] mb-6 tracking-wide uppercase">{page.overview.heading}</h2>
            )}
            {page.overview.paragraphs?.map((p: any, idx: number) => {
              if (typeof p === "string") {
                return <p key={idx} className="text-[14px] text-gray-600 leading-[1.8] mb-4">{p}</p>;
              }
              if (p.segments) {
                return (
                  <p key={idx} className="text-[14px] text-gray-600 leading-[1.8] mb-4">
                    {p.segments.map((seg: any, si: number) =>
                      seg.bold
                        ? <strong key={si} className="font-semibold text-gray-800">{seg.text}</strong>
                        : <span key={si}>{seg.text}</span>
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </section>
      )}

      {page.services && typeof page.services === "object" && !Array.isArray(page.services) && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#222] mb-10 tracking-wide uppercase">{page.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0">
              {page.services.topRow.map((service: any, idx: number) => (
                <div key={idx} data-testid={`service-box-${idx}`} className="border border-gray-200 bg-white">
                  <div className="bg-[#e8edf5] px-5 py-4 border-b border-gray-200">
                    <h3 className="text-[14px] font-bold text-[#222]">{service.title}</h3>
                  </div>
                  <div className="px-5 py-5">
                    <ul className="space-y-3">
                      {service.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0033a0] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {page.services.bottomRow.map((service: any, idx: number) => (
                <div key={idx} data-testid={`service-box-bottom-${idx}`} className="border border-gray-200 bg-white">
                  <div className="bg-[#e8edf5] px-5 py-4 border-b border-gray-200">
                    <h3 className="text-[14px] font-bold text-[#222]">{service.title}</h3>
                  </div>
                  <div className="px-5 py-5">
                    <ul className="space-y-3">
                      {service.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0033a0] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-10">{page.enhancedCapabilities.title}</h2>
            <div className="space-y-12">
              {page.enhancedCapabilities.sections.map((section: any, idx: number) => (
                <div key={idx} data-testid={`enhanced-section-${idx}`}>
                  <h3 className="text-lg font-bold text-[#0033a0] mb-4">{section.title}</h3>
                  {section.paragraphs?.map((p: string, i: number) => (
                    <p key={i} className="text-[14px] text-gray-600 leading-[1.8] mb-4">{p}</p>
                  ))}
                  {section.description && (
                    <p className="text-[14px] text-gray-600 leading-[1.8] mb-4">{section.description}</p>
                  )}
                  {section.capabilities && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Capabilities:</p>
                      {section.capabilities.map((cap: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
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
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "expertise") : undefined}
          className="py-14 bg-white"
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-10 tracking-wide uppercase">{page.expertise.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.expertise.items.map((item: any, idx: number) => (
                <div key={idx} data-testid={`expertise-${idx}`} className="group">
                  {item.image && (
                    <div className="w-full h-[160px] overflow-hidden mb-4 rounded-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3
                    data-tina-field={tinaField(item, "title")}
                    className="text-[14px] font-bold text-[#0033a0] mb-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.capabilities && typeof page.capabilities === "object" && !Array.isArray(page.capabilities) && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "capabilities") : undefined}
          className="py-14 bg-[#f5f5f5]"
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-3 uppercase tracking-wide">{page.capabilities.title}</h2>
            {page.capabilities.subtitle && (
              <p className="text-center text-[14px] text-gray-600 mb-10">{page.capabilities.subtitle}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.capabilities.items.map((item: any, idx: number) => {
                const Icon = capabilityIcons[item.title] || Layers;
                return (
                  <div key={idx} data-testid={`capability-${idx}`} className="bg-white rounded-lg shadow-md p-5 border border-gray-100 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#f0f4fa] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0033a0]" />
                    </div>
                    <h3
                      data-tina-field={tinaField(item, "title")}
                      className="text-sm font-bold text-[#0033a0] mb-2"
                    >
                      {item.title}
                    </h3>
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
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-10 uppercase tracking-wide">{page.approach.title}</h2>
            <div className="space-y-8">
              {page.approach.phases.map((phase: any, idx: number) => (
                <div key={idx} data-testid={`phase-${idx}`} className="bg-[#f5f5f5] rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#0033a0] text-white text-sm font-bold flex items-center justify-center shrink-0">{phase.number || idx + 1}</span>
                    <h3 className="text-base font-bold text-[#0033a0]">{phase.title}</h3>
                  </div>
                  <p className="text-[13px] text-gray-600 mb-4 ml-12">{phase.description}</p>
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
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "engagementModels") : undefined}
          className={`py-14 ${page.approach ? "bg-[#f5f5f5]" : "bg-white"}`}
        >
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0033a0] mb-4">{page.engagementModels.title}</h2>
            {page.engagementModels.description && (
              <p className="text-[14px] text-gray-600 leading-[1.8] mb-6">{page.engagementModels.description}</p>
            )}
            <ul className="space-y-3">
              {(page.engagementModels.models || page.engagementModels.items)?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-[13px] text-gray-600">
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
                <li key={idx} className="flex items-start gap-3 text-[13px] text-gray-600">
                  <Shield className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.whyChoose && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-12 tracking-wide uppercase">{page.whyChoose.title}</h2>
            {Array.isArray(page.whyChoose.items) && typeof page.whyChoose.items[0] === "object" && page.whyChoose.items[0].title ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {page.whyChoose.items.map((item: any, idx: number) => {
                  const Icon = item.icon ? (whyChooseIcons[item.icon] || Target) : Target;
                  return (
                    <div key={idx} data-testid={`why-choose-${idx}`} className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <Icon className="w-6 h-6 text-[#0033a0]" />
                      </div>
                      <div>
                        <h3
                          data-tina-field={tinaField(item, "title")}
                          className="text-[14px] font-bold text-[#0033a0] mb-1"
                        >
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
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

      {page.process && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "process") : undefined}
          className="py-16 bg-[#f5f5f5]"
        >
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#222] mb-12 tracking-wide uppercase">{page.process.title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {page.process.steps.map((step: any, idx: number) => {
                const Icon = processIcons[idx] || Lightbulb;
                return (
                  <div key={idx} data-testid={`process-step-${idx}`} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0033a0] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      data-tina-field={tinaField(step, "title")}
                      className="text-[13px] font-bold text-[#0033a0] mb-2"
                    >
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-[12px] text-gray-500 leading-relaxed">{step.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {page.caseStudies && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "caseStudies") : undefined}
          className="py-16 bg-white"
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {page.caseStudies.items.map((study: any, idx: number) => (
                <div key={idx} data-testid={`case-study-${idx}`}>
                  {idx === 0 ? (
                    <div className="relative h-[220px] rounded-lg overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/80 to-transparent flex items-end p-4">
                        <h3
                          data-tina-field={tinaField(study, "title")}
                          className="text-white text-[14px] font-bold leading-tight"
                        >
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  ) : idx === 1 ? (
                    <div className="bg-white border border-gray-200 rounded-lg p-5 h-[220px] flex flex-col justify-center">
                      <p
                        data-tina-field={tinaField(study, "description")}
                        className="text-[13px] text-gray-600 leading-relaxed mb-4"
                      >
                        {study.description}
                      </p>
                      <div data-testid={`link-read-more-${idx}`} className="flex items-center gap-2 text-[#0033a0] text-[13px] font-semibold cursor-pointer">
                        <ArrowRightCircle className="w-4 h-4" />
                        <span>Read more</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[220px] rounded-lg overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/80 to-transparent flex items-end p-4">
                        <h3
                          data-tina-field={tinaField(study, "title")}
                          className="text-white text-[14px] font-bold leading-tight"
                        >
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.insights && (
        <section
          data-tina-field={tinaRef ? tinaField(tinaRef, "insights") : undefined}
          className="py-16 bg-[#f0f4fa]"
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[#0033a0] mb-10 tracking-wide uppercase">{page.insights.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.insights.items.map((insight: any, idx: number) => {
                const Icon = insight.icon ? (insightIcons[insight.icon] || Briefcase) : null;
                return (
                  <div key={idx} data-testid={`insight-${idx}`} className="bg-white border border-gray-200 rounded-sm p-8 text-center flex flex-col">
                    {Icon && (
                      <div className="mb-5">
                        <Icon className="w-10 h-10 text-[#0033a0] mx-auto" />
                      </div>
                    )}
                    <h3
                      data-tina-field={tinaField(insight, "title")}
                      className="text-[15px] font-bold text-[#0033a0] mb-4"
                    >
                      {insight.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed flex-1">{insight.description}</p>
                    {insight.link && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link href={insight.link.href}>
                          <span data-testid={`link-insight-${idx}`} className="inline-flex items-center gap-2 text-[#0033a0] text-[13px] font-medium cursor-pointer hover:underline">
                            <ArrowRightCircle className="w-4 h-4" />
                            {insight.link.label}
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div data-tina-field={tinaRef ? tinaField(tinaRef, "cta") : undefined}>
        <CTASection
          title={page.cta.title}
          subtitle={page.cta.subtitle}
          cta={page.cta.button}
          variant={page.ctaVariant === "white" ? "white" : "blue"}
        />
      </div>
    </>
  );
}
