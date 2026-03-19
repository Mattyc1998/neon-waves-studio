import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Gift, Zap, Leaf } from "lucide-react";

const services = [
  { icon: Scissors, iconColor: "text-[#39FF14]", title: "Cuts & Styling", desc: "Precision cuts shaped to your style and face", price: "From £25", color: "border-t-[#39FF14]", glowClass: "hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]" },
  { icon: Palette, iconColor: "text-[#FF2D9B]", title: "Colour & Highlights", desc: "Vibrant, long-lasting colour and balayage", price: "From £60", color: "border-t-[#FF2D9B]", glowClass: "hover:shadow-[0_0_15px_rgba(255,45,155,0.4)]" },
  { icon: Sparkles, iconColor: "text-[#00CED1]", title: "Hair Extensions & Fairy Tinsel", desc: "Add length, volume and a little magic", price: "From £120", color: "border-t-[#00CED1]", glowClass: "hover:shadow-[0_0_15px_rgba(0,206,209,0.4)]" },
  { icon: Gift, iconColor: "text-[#39FF14]", title: "Girls Pamper Package", desc: "Perfect for birthdays and special occasions", price: "From £45", color: "border-t-[#39FF14]", glowClass: "hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]" },
  { icon: Zap, iconColor: "text-[#FF2D9B]", title: "Body Piercing", desc: "Professional, hygienic piercing service", price: "From £20", color: "border-t-[#FF2D9B]", glowClass: "hover:shadow-[0_0_15px_rgba(255,45,155,0.4)]" },
  { icon: Leaf, iconColor: "text-[#00CED1]", title: "Glowwa Supplements", desc: "Nourish your hair from the inside out", price: "Shop in salon", color: "border-t-[#00CED1]", glowClass: "hover:shadow-[0_0_15px_rgba(0,206,209,0.4)]" },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-[80px]">
      <div className="container mx-auto px-4">
        <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">What we do</span>
        <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-10">Our Services</h2>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {services.map((s) => {
            const Icon = s.icon;
            return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              key={s.title}
              className={`bg-card rounded-lg border border-border border-t-4 ${s.color} p-6 flex flex-col hover:bg-[hsl(0_0%_18%)] ${s.glowClass} transition-all duration-300`}
            >
              <div className={`mb-3 flex items-center ${s.iconColor} drop-shadow-[0_0_5px_currentColor]`}>
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-[#E5E5E5] text-sm font-body mb-4">{s.desc}</p>
              <div className="mt-auto">
                <span className="text-primary font-semibold text-sm font-body block mb-2">{s.price}</span>
                <Link to="/contact" className="text-xs text-primary font-bold uppercase border-b border-primary hover:text-white hover:border-white transition-colors pb-0.5 inline-flex items-center gap-1">
                  Book this service <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 text-center">
          <Link to="/services" className="text-primary hover:underline font-semibold font-body">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
