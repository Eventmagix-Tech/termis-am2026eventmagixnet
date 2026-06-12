import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Linkedin } from "lucide-react";
import termisLogo from "@/assets/termis-logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Attendee Planning",
    children: [
      { label: "Welcome Letter", href: "/welcome-letter" },
      { label: "General Information", href: "/general-information" },
      { label: "Visa Information", href: "/visa-information" },
      { label: "Explore New Orleans", href: "/explore-new-orleans" },
      { label: "Key Dates", href: "/key-dates" },
      { label: "Committees", href: "/committees" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    label: "Scientific Program",
    children: [
      { label: "Program at-a-glance", href: "/program-at-a-glance" },
      { label: "Plenary Speakers", href: "/plenary-speakers" },
      { label: "Pre-Conference Workshops", href: "/pre-conference-workshops" },
      { label: "Business Pitch Competition", href: "/business-pitch-competition" },
      { label: "Career Development Poster Sessions", href: "/career-development-poster-sessions" },
      { label: "Awards, Networking & Career Development Opportunities", href: "/awards-networking-career-development" },
      { label: "Empowering Next Leaders in TERM Luncheon", href: "/empowering-next-leaders-luncheon" },
    ],
  },
  {
    label: "Abstract Submission",
    children: [
      { label: "Abstract Topics", href: "/abstract-topics" },
      { label: "Call for Abstract", href: "/call-for-abstracts" },
    ],
  },
  {
    label: "Registration & Hotel Info",
    children: [
      { label: "Registration Information", href: "/registration-information" },
      { label: "Hotel Accommodation", href: "/hotel-accommodation" },
    ],
  },
  {
    label: "Sponsors & Exhibitors",
    children: [
      { label: "Support Opportunities", href: "/support-opportunities" },
      { label: "Confirmed Sponsors", href: "/confirmed-sponsors" },
    ],
  },
  {
    label: "Students & Young Investigators",
    children: [
      { label: "2026 SYIS-AM Conference Activities", href: "/2026-syis-am-conference-activities" },
      { label: "SYIS Positions & Awards", href: "/syis-positions-and-awards" },
    ],
  },
  {
    label: "Awards",
    children: [
      { label: "HCS Travel Awards", href: "/hcs-travel-awards" },
      { label: "NIH R13 Travel Awards", href: "/nih-r13-travel-awards" },
      { label: "WFIRM Young Investigator Awards", href: "/wfirm-young-investigator-awards" },
    ],
  },
  { label: "Promotional Toolkit", href: "/promotional-toolkit" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close desktop menu on Escape, and on click/focus outside
  useEffect(() => {
    if (!openDesktopMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDesktopMenu(null);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [openDesktopMenu]);

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent/20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center" aria-label="TERMIS Americas — Home">
              <img
                src={termisLogo}
                alt="TERMIS Americas"
                className="h-10 md:h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div ref={navRef} className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => {
                  const words = item.label.split(" ");
                  const hasMultipleWords = words.length > 1;
                  const formattedLabel = hasMultipleWords ? (
                    <span className="flex flex-col items-start leading-tight text-left">
                      <span>{words.slice(0, Math.ceil(words.length / 2)).join(" ")}</span>
                      <span>{words.slice(Math.ceil(words.length / 2)).join(" ")}</span>
                    </span>
                  ) : (
                    item.label
                  );

                  const submenuId = `submenu-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
                  const isMenuOpen = openDesktopMenu === item.label;

                  return (
                    <NavigationMenuItem key={item.label} className="relative">
                      {item.children ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setOpenDesktopMenu(item.label)}
                          onMouseLeave={() => setOpenDesktopMenu(null)}
                          onFocus={() => setOpenDesktopMenu(item.label)}
                          onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                              setOpenDesktopMenu(null);
                            }
                          }}
                        >
                          <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen}
                            aria-controls={submenuId}
                            onClick={() => setOpenDesktopMenu(isMenuOpen ? null : item.label)}
                            className="inline-flex items-center justify-center bg-transparent text-primary hover:text-accent hover:bg-accent/10 text-sm font-medium px-3 py-1 h-auto rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {formattedLabel}
                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                "ml-1 h-3 w-3 transition-transform duration-200",
                                isMenuOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {isMenuOpen && (
                            <div className="absolute left-0 top-full pt-1 z-50">
                              <ul
                                id={submenuId}
                                className="grid w-[220px] gap-1 p-2 bg-white shadow-lg rounded-md border border-accent/20"
                              >
                                {item.children.map((child) => (
                                  <li key={child.label}>
                                    <a
                                      href={child.href}
                                      className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent text-primary focus-visible:ring-2 focus-visible:ring-accent"
                                    >
                                      {child.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="inline-flex h-auto items-center justify-start px-3 py-1 text-sm text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200 font-medium text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {formattedLabel}
                          </a>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            </div>

            {/* Hashtag & Social Icons */}
            <div className="hidden sm:flex flex-col items-center gap-1">
              <span className="text-gold-text font-bold text-sm">#TERMISAM2026</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://x.com/TERMISAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 text-primary hover:text-accent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="TERMIS-AM on X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/termis-am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 text-primary hover:text-accent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="TERMIS-AM on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-primary hover:text-accent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile"
              className="lg:hidden py-4 border-t border-accent/20 animate-fade-in bg-white"
            >
              {navItems.map((item) => {
                const submenuId = `mobile-submenu-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
                const isMenuOpen = openSubmenu === item.label;
                return (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          type="button"
                          aria-expanded={isMenuOpen}
                          aria-controls={submenuId}
                          className="flex items-center justify-between w-full px-4 py-3 text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          onClick={() => setOpenSubmenu(isMenuOpen ? null : item.label)}
                        >
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isMenuOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isMenuOpen && (
                          <div id={submenuId} className="bg-accent/5 animate-fade-in">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block px-8 py-2 text-sm text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-accent/20 mt-4">
                <a
                  href="https://x.com/TERMISAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 text-primary hover:text-accent transition-colors rounded-md"
                  aria-label="TERMIS-AM on X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/termis-am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 text-primary hover:text-accent transition-colors rounded-md"
                  aria-label="TERMIS-AM on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <span className="text-gold-text font-bold text-sm">#TERMISAM2026</span>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
