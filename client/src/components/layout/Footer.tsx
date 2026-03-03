import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { siteContent } from "@/data/siteContent";

const { footer, siteName } = siteContent.global;

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[hsl(213,80%,12%)] text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">{siteName}</span>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Engineering excellence since 1969. Delivering innovative technology solutions to global enterprises across five continents.
            </p>
            <a
              href={footer.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <SiLinkedin className="w-5 h-5" />
              Follow us on LinkedIn
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {footer.headquarters.title}
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p className="font-medium text-white/80">{footer.headquarters.company}</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{footer.headquarters.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{footer.headquarters.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Global Offices
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60 mb-6">
              {footer.offices.map((office) => (
                <li key={office} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {office}
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Sales
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {footer.salesPhones.map((item) => (
                <li key={item.region} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {item.region}: <span className="text-white/80">{item.phone}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <Link href="/privacy">
            <span data-testid="link-privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">
              Privacy Statement
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
