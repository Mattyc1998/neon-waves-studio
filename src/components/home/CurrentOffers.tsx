import { Link } from "react-router-dom";

const offers = [
  {
    title: "Aura Keratin Treatment — 25% Off",
    desc: "Smoother, shinier, more manageable hair",
    borderColor: "border-primary",
  },
  {
    title: "Body Piercing — 20% Off",
    desc: "Professional piercing in a welcoming environment",
    borderColor: "border-secondary",
  },
  {
    title: "Full Foils inc Cut & Dry — £15 Off",
    desc: "Stunning highlights with a fresh cut and blow dry",
    borderColor: "border-accent",
  },
];

const CurrentOffers = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Don't miss out</span>
        <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-10">Current Offers</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`bg-card rounded-lg border-2 ${o.borderColor} p-6 hover:shadow-[0_0_25px_hsl(var(--primary)/0.1)] transition-all duration-300`}
            >
              <h3 className="font-display text-foreground text-lg mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm font-body mb-5">{o.desc}</p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Book This Deal
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-block border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            View all offers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffers;
