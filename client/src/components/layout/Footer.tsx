import { Link } from "wouter";
import { SiLinkedin } from "react-icons/si";
import { useGlobalContent } from "@/lib/content";

export default function Footer() {
  const { data: global } = useGlobalContent();

  if (!global) return null;

  const { footer, logoUrl } = global;

  return (
    <footer data-testid="footer" className="bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoUrl} alt="DSRC" className="h-8 w-auto mb-6" />
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
              Connect with DSRC
            </h4>
            <a
              href={footer.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="inline-flex text-gray-400 hover:text-[#0033a0] transition-colors"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link: any) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-gray-500 hover:text-[#0033a0] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">
              {footer.headquarters.title}
            </h4>
            <p className="text-sm text-gray-600 font-medium mb-1">{footer.headquarters.company}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">{footer.headquarters.address}</p>
            <p className="text-sm text-gray-500">Switchboard: {footer.headquarters.phone}</p>
            <p className="text-sm text-gray-500">Fax: {footer.headquarters.fax}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">
              Global Offices
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-500 mb-6">
              {footer.offices.map((office: string) => (
                <li key={office}>{office}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">{footer.copyright}</p>
          <Link href="/privacy">
            <span data-testid="link-privacy" className="text-xs text-gray-400 hover:text-[#0033a0] transition-colors cursor-pointer">
              Privacy Statement
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
