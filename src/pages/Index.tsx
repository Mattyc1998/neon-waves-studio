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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    style={{ margin: 0, padding: 0 }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <FadeInSection><HeroSection /></FadeInSection>
        <FadeInSection><AboutTeaser /></FadeInSection>
        <FadeInSection><ServicesGrid /></FadeInSection>
        <FadeInSection><CurrentOffers /></FadeInSection>
        <FadeInSection><OpeningHours /></FadeInSection>
        <FadeInSection><FAQSection /></FadeInSection>
        <FadeInSection><BookCTA /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;