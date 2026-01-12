import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
  { label: "Welcome Letter", href: "#welcome" },
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
      { label: "Detailed Program", href: "#detailed-program" },
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
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={termisLogo} 
              alt="TERMIS Americas" 
              className="h-10 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-primary hover:text-accent hover:bg-accent/10 text-sm font-medium px-3 py-2">
                        {item.label}
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
                        className="px-3 py-2 text-sm text-primary hover:text-accent transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="gold"
              size="sm"
              className="hidden sm:flex"
            >
              Register Now
            </Button>
            
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
            <div className="px-4 pt-4">
              <Button variant="gold" className="w-full">
                Register Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
