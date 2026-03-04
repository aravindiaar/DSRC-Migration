import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface WhoWeAreProps {
  sectionTitle: string;
  paragraphs: string[];
  cta: { label: string; href: string };
}

export default function WhoWeAreSection({ sectionTitle, paragraphs, cta }: WhoWeAreProps) {
  return (
    <section data-testid="who-we-are-section" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-testid="text-who-we-are-title"
          className="text-center text-2xl md:text-3xl font-bold text-[#0033a0] mb-10"
          style={{ fontFamily: "'Open Sans', serif" }}
        >
          {sectionTitle}
        </h2>

        <div className="space-y-5">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              data-testid={`who-we-are-p-${idx}`}
              className="text-[15px] text-gray-700 leading-[1.8]"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={cta.href}>
            <span
              data-testid="link-who-we-are-more"
              className="inline-flex items-center gap-2 text-[15px] text-gray-500 hover:text-[#0033a0] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 border border-gray-300 rounded-full p-0.5" />
              {cta.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
