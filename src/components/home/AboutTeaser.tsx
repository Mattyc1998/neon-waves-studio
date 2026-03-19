import { Link } from "react-router-dom";
import salonInterior from "@/assets/salon-interior.png";
const AboutTeaser = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Who we are</span>
            <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-6">A little about us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              The Hair Studio is Uckfield's friendliest and most colourful salon. Owner Louise took over in March 2025
              and is passionate about making every client feel relaxed, happy, and looking their best. Our retro vibe and
              expert team create a truly unique experience.
            </p>
            <Link to="/about" className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] font-bold text-lg hover:text-[#32e012] hover:underline font-body inline-block mt-4">
              Meet Louise →
            </Link>
          </div>
          <img
            src={salonInterior}
            alt="The Hair Studio interior with retro 80s geometric wall mural"
            className="w-full aspect-[4/3] object-cover rounded-xl border-2 border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
