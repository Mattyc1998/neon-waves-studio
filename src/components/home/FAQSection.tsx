import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the deposit policy for chemical work?",
    a: "A 50% deposit is required before all chemical work can be booked.",
  },
  {
    q: "Is a skin test required for certain services?",
    a: "Yes, a skin test is required at least 24 hours before any perming or colouring service.",
  },
  {
    q: "How do you handle disagreements or complaints?",
    a: "We prefer to handle any disagreements or complaints via phone call or face to face to ensure a clear and understanding resolution.",
  },
  {
    q: "Do you offer any discounts?",
    a: "Yes — we offer 10% off for seniors and students every Thursday.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can call us on 01825 763042 or use our online booking form.",
  },
  {
    q: "Do you offer hair extensions?",
    a: "Yes, we offer professional hair extensions and fairy hair tinsel. Get in touch to discuss the options.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-[80px] bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-primary uppercase text-sm font-semibold tracking-widest font-body">Got questions?</span>
          <h2 className="text-3xl sm:text-4xl text-accent mt-2">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 py-2 border-l-[3px] border-l-transparent data-[state=open]:border-l-[#39FF14] transition-colors duration-200">
              <AccordionTrigger className="text-foreground font-body font-medium text-left hover:text-[#39FF14] hover:no-underline data-[state=open]:text-[#39FF14] [&[data-state=open]>svg]:text-[#39FF14] text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-base mt-2 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
