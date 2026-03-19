import { Link } from "react-router-dom";

const services = [
  { emoji: "✂️", title: "Cuts & Styling", desc: "Precision cuts shaped to your style and face", price: "From £25", color: "border-t-primary" },
  { emoji: "🎨", title: "Colour & Highlights", desc: "Vibrant, long-lasting colour and balayage", price: "From £60", color: "border-t-secondary" },
  { emoji: "💇", title: "Hair Extensions & Fairy Tinsel", desc: "Add length, volume and a little magic", price: "From £120", color: "border-t-accent" },
  { emoji: "🎉", title: "Girls Pamper Package", desc: "Perfect for birthdays and special occasions", price: "From £45", color: "border-t-primary" },
  { emoji: "💎", title: "Body Piercing", desc: "Professional, hygienic piercing service", price: "From £20", color: "border-t-secondary" },
  { emoji: "🌿", title: "Glowwa Supplements", desc: "Nourish your hair from the inside out", price: "Shop in salon", color: "border-t-accent" },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">What we do</span>
        <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-10">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-card rounded-lg border border-border border-t-4 ${s.color} p-6 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:border-primary/40 transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="text-lg font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">{s.desc}</p>
              <span className="text-primary font-semibold text-sm font-body">{s.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/services" className="text-primary hover:underline font-semibold font-body">
            View all pricing →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
