import { useHead } from "@/hooks/use-head";
import HeroSection from "@/components/sections/HeroSection";
import { CheckCircle, Users, GraduationCap, Globe, Star, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Briefcase, title: "Challenging Work", description: "Work on cutting-edge technologies and complex enterprise-grade solutions that push your boundaries." },
  { icon: Star, title: "Competitive Compensation", description: "We offer competitive salaries, performance bonuses, and comprehensive benefits packages." },
  { icon: GraduationCap, title: "Learning & Development", description: "Continuous learning opportunities with training programs, certifications, and mentorship." },
  { icon: Globe, title: "Global Opportunities", description: "Opportunities to work with international clients and at our offices across four continents." },
  { icon: Users, title: "Collaborative Culture", description: "Join a team where collaboration, respect, and innovation are the cornerstone of our culture." },
  { icon: CheckCircle, title: "Career Growth", description: "Clear career paths with accelerated growth opportunities based on performance and contributions." },
];

const values = [
  "Professionalism",
  "Trust",
  "Respect",
  "Fairness",
  "Responsibility",
];

export default function Careers() {
  useHead({
    title: "Careers at DSRC - Join Our Team",
    description: "Explore career opportunities at DSRC. Join our team of 350+ skilled engineers and work on cutting-edge technology solutions for global enterprises.",
  });

  return (
    <>
      <HeroSection
        title="Careers at DSRC"
        subtitle="We are constantly seeking exceptional talent. Join our team and discover opportunities to innovate, grow, and succeed."
        cta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Why DSRC</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Why Work With Us</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our core teams have an average of over 15 years of professional experience with DSRC.
              Here's why talented professionals choose to build their careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                data-testid={`benefit-${idx}`}
                className="p-6 rounded-md bg-muted/30 border border-transparent hover:border-border transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Core Values</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Built on Strong Foundations</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At DSRC, our values guide everything we do. They define how we work with our clients,
                how we collaborate with each other, and how we grow as professionals.
              </p>
            </div>
            <div className="space-y-3">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-md bg-background border border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(213, 80%, 18%) 0%, hsl(200, 60%, 25%) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Interested in joining DSRC?</h2>
          <p className="mt-4 text-white/60">Send us your resume and let's explore how you can grow with us.</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary font-semibold border-white" data-testid="button-career-contact">
                Career Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
