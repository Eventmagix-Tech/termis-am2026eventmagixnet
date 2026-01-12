import { Twitter, Linkedin } from "lucide-react";
import termisLogo from "@/assets/termis-logo.png";
import kenesLogo from "@/assets/kenes-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/TERMISAM", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/groups/4646229/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "About TERMIS", href: "#about" },
    { label: "Conference Program", href: "#program" },
    { label: "Submit Abstract", href: "#abstracts" },
    { label: "Registration", href: "#registration" },
  ];

  const resourceLinks = [
    { label: "Sponsorship Packages", href: "#sponsors" },
    { label: "Venue Information", href: "#venue" },
    { label: "Travel & Hotels", href: "#travel" },
    { label: "Contact Us", href: "#contact" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Conference Organizing Secretariat - Left */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Conference Organizing Secretariat
            </h4>
            <div className="mb-4">
              <img 
                src={kenesLogo} 
                alt="Kenes Group" 
                className="h-12 w-auto bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Kenes Group is the professional conference organizer for TERMIS-AM 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TERMIS Brand Column - Right */}
          <div>
            <div className="mb-4">
              <img 
                src={termisLogo} 
                alt="TERMIS Americas" 
                className="h-14 w-auto bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Tissue Engineering and Regenerative Medicine International Society - 
              Americas Chapter Annual Conference
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/60 text-sm mb-4">
              <span>November 15-18, 2026</span>
              <span className="text-accent">⚜</span>
              <span>New Orleans, LA</span>
            </div>
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
                href="#privacy"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
