import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section className="py-12 sm:py-[80px] bg-muted/30">
      <div className="container mx-auto px-4">
        <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Don't miss out</span>
        <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-10">Current Offers</h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {offers.map((o) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              key={o.title}
              className={`bg-card rounded-lg border-2 ${o.borderColor} p-6 hover:shadow-[0_0_25px_hsl(var(--primary)/0.1)] transition-all duration-300`}
            >
              <h3 className="font-display text-foreground text-lg mb-2">{o.title}</h3>
              <p className="text-[#E5E5E5] text-sm font-body mb-5">{o.desc}</p>
              <Link
                to="/contact"
                className="inline-block w-full sm:w-auto text-center px-7 py-3 min-h-[48px] rounded-md font-semibold transition-all duration-200 hover:drop-shadow-[0_0_12px_rgba(57,255,20,0.6)] hover:scale-[1.03]"
                style={{ backgroundColor: '#39FF14', color: '#000000' }}
              >
                Book This Deal
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-block border-[1px] border-solid border-white bg-transparent text-white px-7 py-3 min-h-[48px] rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            View all offers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffers;
