import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import CurrentOffers from "@/components/home/CurrentOffers";
import OpeningHours from "@/components/home/OpeningHours";
import FAQSection from "@/components/home/FAQSection";
import BookCTA from "@/components/home/BookCTA";
import { motion } from "framer-motion";

const FadeInSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <div className="container mx-auto px-4">
    <hr className="border-t border-border/40" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <AboutTeaser />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <ServicesGrid />
        </FadeInSection>
        <FadeInSection>
          <CurrentOffers />
        </FadeInSection>
        <FadeInSection>
          <OpeningHours />
        </FadeInSection>
        <FadeInSection>
          <FAQSection />
        </FadeInSection>
        <FadeInSection>
          <BookCTA />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
