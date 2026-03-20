import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const serviceLinks = [
  "Cuts & Styling",
  "Colour & Highlights",
  "Hair Extensions & Fairy Tinsel",
  "Girls Pamper Package",
  "Body Piercing",
  "Glowwa Supplements",
];

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "#", active: false },
  { label: "Services", href: "#", active: false, dropdown: true },
  { label: "Offers", href: "#", active: false },
  { label: "Gallery", href: "#", active: false },
  { label: "Contact", href: "#", active: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <Link to="/" className="font-display text-primary text-base sm:text-xl italic font-bold tracking-wide">
          THE HAIR STUDIO
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2 cursor-default">
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[240px]">
                    {serviceLinks.map((s) => (
                      <li key={s}>
                        <span className="block px-4 py-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : link.active ? (
              <li key={link.label}>
                <Link to={link.href} className="text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <span className="text-foreground hover:text-primary transition-colors cursor-default">
                  {link.label}
                </span>
              </li>
            )
          )}
        </ul>

        {/* Book Now (desktop only) + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md font-semibold text-sm cursor-default transition-all duration-200 hover:drop-shadow-[0_0_12px_rgba(57,255,20,0.6)] hover:scale-[1.03]">
            Book Now
          </span>
          <button
            className="lg:hidden text-foreground p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 min-h-[48px] text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                  >
                    {link.label}
                    {servicesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {servicesExpanded && (
                    <ul className="pl-4 pb-2">
                      {serviceLinks.map((s) => (
                        <li key={s}>
                          <span className="block py-2 min-h-[44px] flex items-center text-muted-foreground text-sm cursor-default">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : link.active ? (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-3 min-h-[48px] flex items-center text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <span className="block py-3 min-h-[48px] flex items-center text-foreground hover:text-primary transition-colors font-medium cursor-default">
                    {link.label}
                  </span>
                </li>
              )
            )}
            <li>
              <span className="block mt-2 bg-primary text-primary-foreground text-center px-5 py-3 min-h-[48px] rounded-md font-semibold text-sm cursor-default transition-all duration-200 hover:drop-shadow-[0_0_12px_rgba(57,255,20,0.6)] hover:scale-[1.03]">
                Book Now
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
