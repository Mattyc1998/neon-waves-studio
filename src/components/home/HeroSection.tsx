import { Link } from "react-router-dom";
import GeometricDecoration from "../GeometricDecoration";
import salonHero from "@/assets/salon-hero.png";
import AnimatedShapes from "./AnimatedShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] py-8 sm:py-[40px] flex items-center overflow-hidden">
      <AnimatedShapes />
      <GeometricDecoration />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-none font-black tracking-tighter uppercase mb-4 sm:mb-6">
              Uckfield's Favourite Hair Studio
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 font-body">
              Professional cuts, colour &amp; styling in the heart of Uckfield — where every client leaves feeling amazing
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-[#39FF14] text-black px-7 py-3 rounded-md font-semibold transition-all duration-200 hover:drop-shadow-[0_0_12px_rgba(57,255,20,0.6)] hover:scale-[1.03] text-center min-h-[48px] flex items-center justify-center"
              >
                Book an Appointment
              </Link>
              <a
                href="#services"
                className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition text-center min-h-[48px] flex items-center justify-center"
              >
                See Our Services
              </a>
            </div>
            <a href="tel:01825763042" className="text-muted-foreground hover:text-primary transition-colors font-body block text-center lg:text-left">
              📞 01825 763042
            </a>
          </div>

          {/* Salon image */}
          <div className="relative z-10 flex items-center justify-center">
            <img
              src={salonHero}
              alt="The Hair Studio salon interior with styling chairs and retro decor"
              className="w-full aspect-[4/3] object-cover rounded-xl border-2 border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
