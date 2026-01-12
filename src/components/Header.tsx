import { useState } from "react";
import { Menu, X, ChevronDown, Linkedin } from "lucide-react";
import termisLogo from "@/assets/termis-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Welcome Letter", href: "/welcome-letter" },
  {
    label: "Attendee Planning",
    children: [
      { label: "General Information", href: "#general-info" },
      { label: "Visa Information", href: "#visa-info" },
      { label: "Explore New Orleans", href: "#explore" },
      { label: "Key Dates", href: "#key-dates" },
      { label: "Committees", href: "#committees" },
    ],
  },
  {
    label: "Scientific Program",
    children: [
      { label: "Program at-a-glance", href: "#program-glance" },
      { label: "Detailed Program", href: "/detailed-program" },
      { label: "Pre-Conference Workshops", href: "#workshops" },
      { label: "Plenary & Keynote Speakers", href: "#speakers" },
    ],
  },
  {
    label: "Registration & Hotel Info",
    children: [
      { label: "Registration Information", href: "#registration" },
      { label: "Hotel Accommodation", href: "#hotel" },
    ],
  },
  {
    label: "Sponsors & Exhibitors",
    children: [
      { label: "Support Opportunities", href: "#support" },
      { label: "Confirmed Sponsors", href: "#sponsors" },
    ],
  },
  { label: "Promotional Toolkit", href: "#toolkit" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={termisLogo} 
              alt="TERMIS Americas" 
              className="h-10 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
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

                return (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-primary hover:text-accent hover:bg-accent/10 text-sm font-medium px-3 py-1 h-auto">
                          {formattedLabel}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[220px] gap-1 p-2 bg-white shadow-lg rounded-md border border-accent/20">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={child.href}
                                    className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent text-primary"
                                  >
                                    {child.label}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="inline-flex h-auto items-center justify-start px-3 py-1 text-sm text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200 font-medium text-left rounded-md"
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

          {/* Social Icons & Hashtag */}
          <div className="flex items-center gap-3">
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block text-primary hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block text-primary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="hidden sm:block text-accent font-semibold text-sm">#TERMISAM2026</span>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-accent/20 animate-fade-in bg-white">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-200 font-medium"
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSubmenu === item.label && "rotate-180"
                        )} 
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="bg-accent/5 animate-fade-in">
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
            ))}
            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-accent/20 mt-4">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="text-accent font-semibold text-sm">#TERMISAM2026</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;