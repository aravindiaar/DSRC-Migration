import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { Target, Eye, Award, Users, Lightbulb, Heart, Shield, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Ambitious & Entrepreneurial", description: "We set bold goals and pursue them with relentless determination, fostering an entrepreneurial spirit that drives innovation." },
  { icon: Eye, title: "Insightful & Experienced", description: "With five decades of expertise, we bring deep industry knowledge and technical insight to every engagement." },
  { icon: Shield, title: "Ethical, Honest & Professional", description: "Integrity is at the core of everything we do. We maintain the highest standards of professionalism and transparency." },
  { icon: Heart, title: "Responsive & Responsible", description: "We are committed to being responsive to our clients' needs while taking responsibility for the impact of our work." },
  { icon: Lightbulb, title: "Innovation", description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions for our clients." },
  { icon: Zap, title: "Disruptive", description: "We challenge the status quo and embrace disruptive thinking to create breakthrough solutions." },
  { icon: Users, title: "Collaborative", description: "We believe in the power of teamwork, fostering strong partnerships with our clients and within our teams." },
  { icon: Award, title: "Hardworking", description: "We are dedicated to delivering excellence through hard work, discipline, and a commitment to quality." },
];

export default function WhoWeAre() {
  useHead({
    title: "Who We Are - DSRC | About Us",
    description: "Learn about DSRC's five decades of engineering excellence, our vision, mission, and the values that drive our team of 350+ engineers.",
  });

  return (
    <>
      <HeroSection
        title="Who We Are"
        subtitle="Engineering strength and agile innovation, delivering excellence for over five decades."
        compact
      />

      <section id="vision" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div data-testid="vision-block">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Vision</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Leading Through Technology</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                To be a globally recognized technology partner, known for engineering excellence,
                innovation, and delivering transformative solutions that help our clients succeed
                in an ever-evolving digital landscape.
              </p>
            </div>
            <div data-testid="mission-block">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Mission</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Empowering Digital Futures</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                To empower organizations worldwide through innovative technology solutions,
                leveraging our deep domain expertise and passionate team of engineers to deliver
                measurable business value and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">The DSRC Difference</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Company Overview</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              With over 50 years of experience and 350+ skilled engineers, DSRC delivers
              innovative technology solutions to global enterprises across multiple continents.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Years of Experience" },
              { value: "350+", label: "Skilled Engineers" },
              { value: "5", label: "Global Offices" },
              { value: "100+", label: "Enterprise Clients" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-md bg-background border border-border">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Values</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                data-testid={`value-card-${idx}`}
                className="p-6 rounded-md bg-muted/30 border border-transparent hover:border-border transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Global Presence</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground tracking-tight">Our Offices Worldwide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Chennai, India", role: "Corporate Headquarters", address: "11 Smith Road, 'Kasturi Towers'" },
              { city: "Santa Clara, CA", role: "US West Coast", address: "4677 Old Ironsides Drive, Suite# 250" },
              { city: "Parsippany, NJ", role: "US East Coast", address: "2011 Route 46, Waterview Plaza, Suite 310" },
              { city: "London, UK", role: "United Kingdom", address: "10 Orange Street, Haymarket" },
              { city: "Amsterdam, NL", role: "Netherlands", address: "Herengracht 449a" },
            ].map((office, idx) => (
              <div key={idx} data-testid={`location-${idx}`} className="p-6 rounded-md bg-background border border-border">
                <h3 className="font-semibold text-foreground">{office.city}</h3>
                <p className="text-xs text-primary font-medium mt-1">{office.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
