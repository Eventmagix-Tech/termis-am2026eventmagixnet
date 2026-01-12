import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import termisLogo from "@/assets/termis-logo.png";
import kenesLogo from "@/assets/kenes-logo.png";
import eventmagixLogo from "@/assets/eventmagix-logo.png";

const Footer = () => {
  // Custom X (Twitter) icon component
  const XIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/TERMISAM", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/groups/4646229/", label: "LinkedIn" },
  ];


  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Jazz band silhouette decoration */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 400 150"
          className="w-80 h-auto"
          fill="currentColor"
        >
          {/* Simplified jazz band silhouette */}
          {/* Trumpet player */}
          <ellipse cx="60" cy="130" rx="15" ry="5" className="text-accent" />
          <rect x="55" y="80" width="10" height="50" className="text-accent" />
          <circle cx="60" cy="70" r="12" className="text-accent" />
          <path d="M72,65 L100,55 L100,60 L72,70" className="text-accent" />
          
          {/* Saxophone player */}
          <ellipse cx="150" cy="130" rx="15" ry="5" className="text-accent" />
          <rect x="145" y="75" width="10" height="55" className="text-accent" />
          <circle cx="150" cy="65" r="12" className="text-accent" />
          <path d="M162,70 Q185,100 175,130" stroke="currentColor" strokeWidth="8" fill="none" className="text-accent" />
          
          {/* Double bass player */}
          <ellipse cx="250" cy="130" rx="15" ry="5" className="text-accent" />
          <rect x="245" y="70" width="10" height="60" className="text-accent" />
          <circle cx="250" cy="60" r="12" className="text-accent" />
          <ellipse cx="280" cy="100" rx="20" ry="40" className="text-accent" />
          
          {/* Piano player */}
          <ellipse cx="350" cy="130" rx="15" ry="5" className="text-accent" />
          <rect x="345" y="90" width="10" height="40" className="text-accent" />
          <circle cx="350" cy="80" r="12" className="text-accent" />
          <rect x="310" y="100" width="50" height="30" rx="3" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Conference Organizing Secretariat - Left */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img 
                src={kenesLogo} 
                alt="Kenes Group" 
                className="h-24 w-auto bg-white rounded-lg p-3"
              />
            </div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-2">
              Conference Organizing Secretariat
            </h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed text-center md:text-left">
              Kenes Group, Office: Kenes M+
            </p>
          </div>

          {/* Social Links - Center */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* TERMIS Brand Column - Right */}
          <div className="flex flex-col items-center md:items-end">
            <div>
              <img 
                src={termisLogo} 
                alt="TERMIS Americas" 
                className="h-24 w-auto bg-white rounded-lg p-3"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2026 TERMIS Americas. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://web.kenes.com/klead/PRIVACY/KI.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="https://kenes-group.com/cookie-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Cookie Policy
              </a>
              <a
                href="https://am2025.termis.org/wp-content/uploads/2025/07/TERMIS-AM-Code-of-Conduct-Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Code of Conduct
              </a>
              <Link
                to="/contact-us"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Powered by Eventmagix */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-primary-foreground/50 text-sm">Powered by</span>
            <a
              href="https://eventmagix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={eventmagixLogo} 
                alt="Eventmagix" 
                className="h-3 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
