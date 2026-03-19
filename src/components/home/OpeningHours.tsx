const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9am – 5pm" },
  { day: "Wednesday", time: "9am – 5pm" },
  { day: "Thursday", time: "9am – 7pm", badge: "Senior & Student Day — 10% off" },
  { day: "Friday", time: "9am – 5pm" },
  { day: "Saturday", time: "9am – 4pm" },
  { day: "Sunday", time: "Closed" },
];

const OpeningHours = () => {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Come and see us</span>
        <h2 className="text-3xl sm:text-4xl text-accent mt-2 mb-10">When you can find us</h2>

        <div className="space-y-3">
          {hours.map((h) => (
            <div key={h.day} className="flex items-center justify-between py-2 border-b border-border">
              <span className="font-body font-medium text-foreground">{h.day}</span>
              <div className="flex items-center gap-3">
                <span className={`font-body ${h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                  {h.time}
                </span>
                {h.badge && (
                  <span className="bg-[#FF1493]/20 text-[#FF1493] text-xs px-2 py-1 rounded-full font-body font-bold tracking-wide">
                    {h.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground font-body">
          Uckfield, East Sussex &nbsp;|&nbsp;{" "}
          <a href="tel:01825763042" className="hover:text-primary transition-colors">01825 763042</a>
        </p>
      </div>
    </section>
  );
};

export default OpeningHours;
