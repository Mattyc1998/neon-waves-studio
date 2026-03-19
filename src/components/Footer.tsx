import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <span className="font-display text-primary text-xl italic font-bold">THE HAIR STUDIO</span>
            <p className="mt-3 text-muted-foreground text-sm">Uckfield's favourite retro hair studio</p>
          </div>

          {/* Centre */}
          <div>
            <h4 className="font-display text-accent text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Offers", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="font-display text-accent text-sm mb-4">Get In Touch</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>The Hair Studio<br />Uckfield, East Sussex</p>
              <p>
                <a href="tel:01825763042" className="hover:text-primary transition-colors">01825 763042</a>
              </p>
              <div className="mt-3">
                <p>Tue–Fri: 9am – 5pm</p>
                <p>Thu: 9am – 7pm</p>
                <p>Sat: 9am – 4pm</p>
                <p>Sun–Mon: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <span>© 2026 The Hair Studio, Uckfield</span>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
