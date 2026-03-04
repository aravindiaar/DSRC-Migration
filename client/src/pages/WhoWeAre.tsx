import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { MapPin } from "lucide-react";

const values = [
  { title: "Ambitious & Entrepreneurial", description: "We set bold goals and pursue them with relentless determination, fostering an entrepreneurial spirit." },
  { title: "Insightful & Experienced", description: "With five decades of expertise, we bring deep industry knowledge and technical insight to every engagement." },
  { title: "Ethical, Honest & Professional", description: "Integrity is at the core of everything we do. We maintain the highest standards of professionalism." },
  { title: "Responsive & Responsible", description: "We are committed to being responsive to our clients' needs while taking responsibility for our work." },
  { title: "Innovation", description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions." },
  { title: "Disruptive", description: "We challenge the status quo and embrace disruptive thinking to create breakthrough solutions." },
  { title: "Collaborative", description: "We believe in the power of teamwork, fostering strong partnerships with our clients and within our teams." },
  { title: "Hardworking", description: "We are dedicated to delivering excellence through hard work, discipline, and commitment to quality." },
];

const offices = [
  { city: "Chennai, India", role: "Corporate Headquarters", address: "11 Smith Road, 'Kasturi Towers'" },
  { city: "Santa Clara, CA", role: "US West Coast", address: "4677 Old Ironsides Drive, Suite# 250" },
  { city: "Parsippany, NJ", role: "US East Coast", address: "2011 Route 46, Waterview Plaza, Suite 310" },
  { city: "London, UK", role: "United Kingdom", address: "10 Orange Street, Haymarket" },
  { city: "Amsterdam, NL", role: "Netherlands", address: "Herengracht 449a" },
];

export default function WhoWeAre() {
  useHead({
    title: "Who We Are - DSRC | About Us",
    description: "Learn about DSRC's five decades of engineering excellence.",
  });

  return (
    <>
      <HeroSection
        title="Who We Are"
        subtitle="Engineering strength and agile innovation, delivering excellence for over five decades."
      />

      <section id="vision" className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-testid="vision-block">
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">Our Vision</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">
                To be a globally recognized technology partner, known for engineering excellence,
                innovation, and delivering transformative solutions that help our clients succeed
                in an ever-evolving digital landscape.
              </p>
            </div>
            <div data-testid="mission-block">
              <h3 className="text-lg font-bold text-[#0033a0] mb-4">Our Mission</h3>
              <p className="text-[15px] text-gray-600 leading-[1.8]">
                To empower organizations worldwide through innovative technology solutions,
                leveraging our deep domain expertise and passionate team of engineers to deliver
                measurable business value and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-4">The DSRC Difference</h2>
          <p className="text-center text-[15px] text-gray-600 max-w-2xl mx-auto mb-10">
            With over 50 years of experience and 350+ skilled engineers, DSRC delivers
            innovative technology solutions to global enterprises across multiple continents.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Years of Experience" },
              { value: "350+", label: "Skilled Engineers" },
              { value: "5", label: "Global Offices" },
              { value: "100+", label: "Enterprise Clients" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center py-6 px-4 bg-white rounded border border-gray-200">
                <div className="text-3xl font-bold text-[#0033a0]">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, idx) => (
              <div
                key={idx}
                data-testid={`value-card-${idx}`}
                className="p-5 bg-[#f5f5f5] rounded"
              >
                <h3 className="text-sm font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#0033a0] mb-10">Our Offices Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((office, idx) => (
              <div key={idx} data-testid={`location-${idx}`} className="p-5 bg-white rounded border border-gray-200">
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
