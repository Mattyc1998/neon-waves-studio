import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const serviceLinks = [
  { label: "Cuts & Styling", href: "/services/cuts-styling" },
  { label: "Colour & Highlights", href: "/services/colour-highlights" },
  { label: "Hair Extensions & Fairy Tinsel", href: "/services/extensions" },
  { label: "Girls Pamper Package", href: "/services/pamper-package" },
  { label: "Body Piercing", href: "/services/body-piercing" },
  { label: "Glowwa Supplements", href: "/services/glowwa" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Offers", href: "/offers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-display text-primary text-xl italic font-bold tracking-wide">
          THE HAIR STUDIO
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2">
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[240px]">
                    {serviceLinks.map((s) => (
                      <li key={s.label}>
                        <Link
                          to={s.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link to={link.href} className="text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Book Now + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md font-semibold text-sm hover:brightness-110 transition"
          >
            Book Now
          </Link>
          <button
            className="lg:hidden text-foreground"
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
                    className="w-full flex items-center justify-between py-3 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                  >
                    {link.label}
                    {servicesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {servicesExpanded && (
                    <ul className="pl-4 pb-2">
                      {serviceLinks.map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.href}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                to="/contact"
                className="block mt-2 bg-primary text-primary-foreground text-center px-5 py-3 rounded-md font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
