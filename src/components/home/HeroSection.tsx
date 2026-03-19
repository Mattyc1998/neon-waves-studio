import { Link } from "react-router-dom";
import GeometricDecoration from "../GeometricDecoration";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <GeometricDecoration />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-accent leading-tight mb-6">
              Uckfield's Favourite Hair Studio
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg font-body">
              Professional cuts, colour &amp; styling in the heart of Uckfield — where every client leaves feeling amazing
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:brightness-110 transition"
              >
                Book an Appointment
              </Link>
              <a
                href="#services"
                className="border-2 border-foreground text-foreground px-7 py-3 rounded-md font-semibold hover:bg-foreground hover:text-background transition"
              >
                See Our Services
              </a>
            </div>
            <a href="tel:01825763042" className="text-muted-foreground hover:text-primary transition-colors font-body">
              📞 01825 763042
            </a>
          </div>

          {/* Placeholder image */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-full aspect-[4/3] bg-muted rounded-xl border-2 border-border flex items-center justify-center">
              <span className="text-muted-foreground font-body text-sm">[ Hero salon photo ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
