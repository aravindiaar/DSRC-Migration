import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { CheckCircle, Users, GraduationCap, Globe, Star, Briefcase } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  { icon: Briefcase, title: "Challenging Work", description: "Work on cutting-edge technologies and complex enterprise-grade solutions." },
  { icon: Star, title: "Competitive Compensation", description: "Competitive salaries, performance bonuses, and comprehensive benefits." },
  { icon: GraduationCap, title: "Learning & Development", description: "Continuous learning with training programs, certifications, and mentorship." },
  { icon: Globe, title: "Global Opportunities", description: "Work with international clients and at our offices across four continents." },
  { icon: Users, title: "Collaborative Culture", description: "A team where collaboration, respect, and innovation are the cornerstone." },
  { icon: CheckCircle, title: "Career Growth", description: "Clear career paths with accelerated growth based on performance." },
];

const values = ["Professionalism", "Trust", "Respect", "Fairness", "Responsibility"];

export default function Careers() {
  useHead({
    title: "Careers at DSRC - Join Our Team",
    description: "Explore career opportunities at DSRC.",
  });

  return (
    <>
      <HeroSection
        title="Careers at DSRC"
        subtitle="We are constantly seeking exceptional talent. Join our team and discover opportunities to innovate, grow, and succeed."
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">Why Work With Us</h2>
          <p className="text-center text-[15px] text-gray-600 max-w-2xl mx-auto mb-10">
            Our core teams have an average of over 15 years of professional experience with DSRC.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                data-testid={`benefit-${idx}`}
                className="p-5 bg-[#f5f5f5] rounded"
              >
                <item.icon className="w-6 h-6 text-[#0033a0] mb-3" />
                <h3 className="text-sm font-bold text-gray-800 mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0033a0] mb-4">Our Core Values</h2>
              <p className="text-[15px] text-gray-600 leading-[1.8]">
                At DSRC, our values guide everything we do. They define how we work with our clients
                and how we grow as professionals.
              </p>
            </div>
            <div className="space-y-3">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#0033a0] shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0033a0]">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Interested in joining DSRC?</h2>
          <p className="mt-3 text-white/70 text-[15px]">Send us your resume and let's explore how you can grow with us.</p>
          <div className="mt-6">
            <Link href="/contact">
              <span data-testid="button-career-contact" className="inline-block px-7 py-3 border-2 border-white text-white text-sm font-semibold uppercase rounded-sm hover:bg-white hover:text-[#0033a0] transition-all cursor-pointer">
                Career Enquiry
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
