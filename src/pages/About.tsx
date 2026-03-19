import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import salonInterior from "@/assets/salon-interior.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Who we are</span>
            <h1 className="text-4xl sm:text-5xl text-accent mt-2 mb-6">About The Hair Studio</h1>
            <p className="text-muted-foreground font-body max-w-2xl text-lg leading-relaxed">
              The Hair Studio is Uckfield's friendliest and most colourful salon — a place where retro vibes meet expert styling.
            </p>
          </div>
        </section>

        {/* Image + Story */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={salonInterior}
                  alt="The Hair Studio interior with retro 80s geometric wall mural"
                  className="w-full rounded-xl border-2 border-border object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl text-accent mb-6">Meet Louise</h2>
                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                  <p>
                    Owner Louise Macdonald took over The Hair Studio in March 2025 and has brought a fresh energy and passion to Uckfield's favourite salon.
                  </p>
                  <p>
                    Louise is dedicated to making every client feel relaxed, happy, and looking their absolute best. Whether you're after a simple trim or a complete transformation, you'll always leave feeling amazing.
                  </p>
                  <p>
                    Our retro 80s and 90s vibe — complete with bold geometric shapes and bright colours — creates a truly unique and fun experience that you won't find anywhere else.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:brightness-110 transition font-body"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-accent mb-10 text-center">Why Choose Us</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { emoji: "💚", title: "Warm Welcome", desc: "Every client is treated like family from the moment they walk in." },
                { emoji: "✨", title: "Expert Team", desc: "Skilled stylists passionate about delivering your perfect look." },
                { emoji: "🎨", title: "Unique Vibe", desc: "Our retro-inspired space makes every visit an experience." },
              ].map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">{v.emoji}</div>
                  <h3 className="font-display text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
