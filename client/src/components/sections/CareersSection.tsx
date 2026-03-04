import { Link } from "wouter";
import { SiLinkedin } from "react-icons/si";
import { useGlobalContent } from "@/lib/content";

interface CareersProps {
  sectionTitle: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
}

export default function CareersSection({ sectionTitle, heading, description, cta }: CareersProps) {
  const { data: global } = useGlobalContent();

  return (
    <section data-testid="careers-section" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-2xl md:text-3xl font-bold text-[#0033a0] mb-10"
          style={{ fontFamily: "'Open Sans', serif" }}
        >
          {sectionTitle}
        </h2>

        <p className="text-[15px] text-gray-700 leading-[1.8] mb-4 font-semibold">
          {heading}
        </p>
        <p className="text-[15px] text-gray-600 leading-[1.8] mb-8">
          {description}
        </p>

        <div className="flex items-center gap-6">
          <Link href={cta.href}>
            <span
              data-testid="link-careers-cta"
              className="inline-block px-6 py-2.5 border border-[#0033a0] text-[#0033a0] text-sm font-medium rounded-sm hover:bg-[#0033a0] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {cta.label}
            </span>
          </Link>
          {global?.footer?.social?.linkedin && (
            <a
              href={global.footer.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-careers-linkedin"
              className="text-gray-400 hover:text-[#0033a0] transition-colors"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
